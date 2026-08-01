#!/usr/bin/env node
/**
 * One-off migration of the WooCommerce long descriptions from raw HTML blobs
 * into the structured section format the product page renders.
 *
 * Structured sections buy three things raw HTML cannot:
 *  - tables become responsive (they were fixed-width <table width="821">),
 *  - the "one contextual link per H2 section" rule becomes machine-checkable,
 *  - no unsanitised markup is injected; only inline emphasis and anchors survive.
 *
 * Writes src/data/product-content.json. Safe to re-run: it reads from
 * products.json, which keeps longDescriptionHtml as the source of truth until
 * this conversion is accepted.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const products = JSON.parse(await readFile(join(root, 'src/data/products.json'), 'utf8'));

const ORIGIN = 'https://theburgersleeves.com';
const INLINE_OK = new Set(['strong', 'em', 'b', 'i', 'a', 'br', 'sup', 'sub']);

const text = (node) =>
  node.nodeName === '#text'
    ? node.value
    : (node.childNodes ?? []).map(text).join('');

const clean = (s) => s.replace(/\s+/g, ' ').trim();

/** Serialise inline content, keeping only safe tags and normalising hrefs. */
function inline(node) {
  return (node.childNodes ?? [])
    .map((c) => {
      if (c.nodeName === '#text') {
        return c.value.replace(/[<>&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[m]);
      }
      if (!INLINE_OK.has(c.nodeName)) return inline(c); // unwrap anything else
      if (c.nodeName === 'br') return '<br>';
      if (c.nodeName === 'a') {
        const raw = c.attrs?.find((a) => a.name === 'href')?.value ?? '';
        // Internal links are stored relative so previews never leak to production.
        const href = raw.startsWith(ORIGIN) ? raw.slice(ORIGIN.length) || '/' : raw;
        const external = /^https?:/i.test(href);
        const rel = external ? ' rel="noopener" target="_blank"' : '';
        return `<a href="${href}"${rel}>${inline(c)}</a>`;
      }
      const tag = c.nodeName === 'b' ? 'strong' : c.nodeName === 'i' ? 'em' : c.nodeName;
      return `<${tag}>${inline(c)}</${tag}>`;
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

function tableOf(node) {
  const rows = [];
  const headers = [];
  const walk = (n) => {
    if (n.nodeName === 'tr') {
      const cells = (n.childNodes ?? []).filter((c) => c.nodeName === 'th' || c.nodeName === 'td');
      if (cells.length && cells.every((c) => c.nodeName === 'th')) {
        headers.push(...cells.map((c) => clean(text(c))));
      } else if (cells.length) {
        rows.push(cells.map((c) => clean(text(c))));
      }
      return;
    }
    (n.childNodes ?? []).forEach(walk);
  };
  walk(node);
  return { t: 'table', headers, rows };
}

const listOf = (node, t) => ({
  t,
  items: (node.childNodes ?? [])
    .filter((c) => c.nodeName === 'li')
    .map((c) => inline(c))
    .filter(Boolean),
});

const WRAPPERS = new Set(['main', 'div', 'section', 'article', 'body', 'html', 'head', 'span']);

function convert(html) {
  const sections = [];
  let current = null;
  const push = (block) => {
    if (!current) {
      current = { heading: null, blocks: [] };
      sections.push(current);
    }
    current.blocks.push(block);
  };

  /**
   * Recursive because the WordPress markup nests blocks inside <main> and even
   * drops bare <p> inside <ul>/<ol>. A flat pass over the fragment's children
   * silently dropped whole descriptions.
   */
  function walk(node) {
    // WordPress also emits bare text and inline tags with no <p> around them
    // (there is a whole paragraph, link included, floating after an <h2>).
    // Buffer those and flush them as an implicit paragraph.
    let loose = [];
    const flushLoose = () => {
      if (!loose.length) return;
      const html = inline({ childNodes: loose });
      loose = [];
      if (html) push({ t: 'p', html });
    };

    for (const c of node.childNodes ?? []) {
      if (c.nodeName === '#text') {
        if (c.value.trim()) loose.push(c);
        continue;
      }
      if (INLINE_OK.has(c.nodeName)) {
        loose.push(c);
        continue;
      }
      flushLoose();
      switch (c.nodeName) {
        case 'h2':
          current = { heading: clean(text(c)), blocks: [] };
          sections.push(current);
          break;
        case 'h3':
        case 'h4': {
          const t = clean(text(c));
          if (t) push({ t: 'h3', text: t });
          break;
        }
        case 'p': {
          const h = inline(c);
          if (h) push({ t: 'p', html: h });
          break;
        }
        case 'ul':
        case 'ol': {
          const list = listOf(c, c.nodeName);
          if (list.items.length) push(list);
          // Stray non-<li> block content inside the list is real copy — keep it.
          for (const kid of c.childNodes ?? []) {
            if (kid.nodeName !== 'li' && kid.nodeName !== '#text') walk({ childNodes: [kid] });
          }
          break;
        }
        case 'table':
          push(tableOf(c));
          break;
        case '#comment':
          break;
        default:
          if (WRAPPERS.has(c.nodeName)) walk(c);
          break;
      }
    }
    flushLoose();
  }

  walk(parseFragment(html));
  return sections;
}

function blockText(b) {
  if (b.t === 'p') return [b.html.replace(/<[^>]+>/g, ' ')];
  if (b.t === 'h3') return [b.text];
  if (b.t === 'ul' || b.t === 'ol') return b.items.map((i) => i.replace(/<[^>]+>/g, ' '));
  if (b.t === 'table') return [...b.headers, ...b.rows.flat()];
  return [];
}
const words = (s) =>
  s.sections
    .flatMap((x) => [x.heading ?? '', ...x.blocks.flatMap(blockText)])
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

const out = {};
let converted = 0;
for (const p of products) {
  const html = p.longDescriptionHtml?.trim();
  if (!html) continue;
  out[p.sku] = { sections: convert(html) };
  converted += 1;
}

// Refuse to write if the conversion lost any copy.
const strip = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const bag = (s) => strip(s).toLowerCase().split(/\s+/).filter(Boolean).sort().join(' ');
let lost = 0;
for (const p of products) {
  if (!p.longDescriptionHtml?.trim()) continue;
  const before = strip(p.longDescriptionHtml).split(/\s+/).filter(Boolean).length;
  const after = words(out[p.sku]);
  if (after < before) {
    console.error(`  ! ${p.sku} ${p.name}: ${before} -> ${after} words (${before - after} lost)`);
    lost += 1;
  }
}
if (lost) {
  console.error(`\nAborted: ${lost} description(s) lost content in conversion.`);
  process.exit(1);
}

await writeFile(join(root, 'src/data/product-content.json'), JSON.stringify(out, null, 1) + '\n');

console.log(`converted ${converted} descriptions`);
for (const [sku, v] of Object.entries(out)) {
  const links = JSON.stringify(v).match(/<a href=/g)?.length ?? 0;
  const tables = v.sections.flatMap((s) => s.blocks).filter((b) => b.t === 'table').length;
  console.log(
    `  ${sku}  sections=${String(v.sections.length).padStart(2)}  words=${String(words(v)).padStart(4)}  links=${links}  tables=${tables}`,
  );
}
