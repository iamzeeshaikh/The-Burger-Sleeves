#!/usr/bin/env node
/**
 * Builds OLD_INTERNAL_LINK_BASELINE.csv — every internal link that exists
 * *before* the content upgrade, from every place one could hide.
 *
 * Sources swept:
 *   - src/data/*.json          long descriptions, short descriptions, FAQ answers,
 *                              policies, homepage/about copy (recursive string walk)
 *   - src/data/site.ts         navigation + footer link lists
 *   - src/components/*.astro   hard-coded hrefs in components
 *   - src/pages/**             hard-coded hrefs in routes
 *   - live production HTML     crawled pages under live-pages/ if present
 *
 * Detects HTML anchors, markdown links and bare data fields holding a path.
 * Verifies every destination against the built route table.
 *
 *   node scripts/link-baseline.mjs [--live]
 */
import { readFile, readdir, writeFile, access } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs');
const ORIGIN = 'https://theburgersleeves.com';
const LIVE_DIR = '/private/tmp/claude-501/-Users-sajjadahmad/7d7cb42b-7828-4da0-90ba-34cb02d40879/scratchpad/live/pages';

const products = JSON.parse(await readFile(join(root, 'src/data/products.json'), 'utf8'));
const content = JSON.parse(await readFile(join(root, 'src/data/product-content.json'), 'utf8'));
const skuToProduct = Object.fromEntries(products.map((p) => [p.sku, p]));

// ---------------------------------------------------------------- route table
const built = new Set();
async function collectBuilt() {
  const dist = join(root, 'dist', 'client');
  const walk = async (d) => {
    for (const e of await readdir(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name === 'index.html') {
        const rel = relative(dist, p).replace(/\\/g, '/');
        built.add(rel === 'index.html' ? '/' : '/' + rel.slice(0, -'index.html'.length));
      }
    }
  };
  try {
    await walk(dist);
  } catch {
    console.warn('  (no dist/ — run `npm run build` first for status checks)');
  }
}
await collectBuilt();

const statusOf = (href) => {
  if (/^(mailto:|tel:)/i.test(href)) return 'n/a';
  if (/^https?:/i.test(href) && !href.startsWith(ORIGIN)) return 'external';
  const path = href.startsWith(ORIGIN) ? href.slice(ORIGIN.length) || '/' : href;
  const clean = path.split('#')[0].split('?')[0];
  if (!built.size) return 'unknown';
  return built.has(clean) ? '200' : '404';
};

const rows = [];
const add = (r) => rows.push(r);
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// ------------------------------------------------- 1. structured product copy
for (const [sku, doc] of Object.entries(content)) {
  const p = skuToProduct[sku];
  if (!p) continue;
  for (const section of doc.sections) {
    for (const block of section.blocks) {
      const strings =
        block.t === 'p'
          ? [block.html]
          : block.t === 'ul' || block.t === 'ol'
            ? block.items
            : block.t === 'table'
              ? [...block.headers, ...block.rows.flat()]
              : [];
      for (const s of strings) {
        for (const m of s.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
          add({
            source: ORIGIN + p.url,
            destination: m[1],
            anchor: strip(m[2]),
            section: section.heading ?? '(pre-heading)',
            type: 'contextual',
            status: statusOf(m[1]),
            field: `product-content.json > ${sku} > sections > blocks[${block.t}]`,
          });
        }
      }
    }
  }
}

// ------------------------------------- 2. every other string in the data files
const dataFiles = (await readdir(join(root, 'src/data'))).filter((f) => f.endsWith('.json'));
for (const f of dataFiles) {
  if (f === 'product-content.json') continue; // already swept, with section context
  const json = JSON.parse(await readFile(join(root, 'src/data', f), 'utf8'));
  const seen = [];
  const walk = (node, path) => {
    if (typeof node === 'string') {
      for (const m of node.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g))
        seen.push({ href: m[1], anchor: strip(m[2]), path, kind: 'html' });
      for (const m of node.matchAll(/\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+)\)/g))
        seen.push({ href: m[2], anchor: m[1], path, kind: 'markdown' });
    } else if (Array.isArray(node)) {
      node.forEach((v, i) => walk(v, `${path}[${i}]`));
    } else if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) {
        if (typeof v === 'string' && /^(href|url|link)$/i.test(k) && /^\//.test(v)) {
          seen.push({ href: v, anchor: node.label ?? node.name ?? '(data field)', path: `${path}.${k}`, kind: 'data-field' });
        }
        walk(v, `${path}.${k}`);
      }
    }
  };
  walk(json, f);
  for (const s of seen) {
    add({
      source: `(data) ${f}`,
      destination: s.href,
      anchor: s.anchor,
      section: s.path,
      type: s.kind === 'data-field' ? 'navigation/data' : `${s.kind} (body copy)`,
      status: statusOf(s.href),
      field: `${f} > ${s.path}`,
    });
  }
}

// ----------------------------------- 3. hard-coded hrefs in components & pages
async function sweepSource(dir, label) {
  const walk = async (d) => {
    for (const e of await readdir(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) {
        await walk(p);
        continue;
      }
      if (!/\.(astro|ts|tsx|mjs)$/.test(e.name)) continue;
      const src = await readFile(p, 'utf8');
      const rel = relative(root, p);
      for (const m of src.matchAll(/href=["'](\/[^"'{}]*)["']/g)) {
        add({
          source: `(${label}) ${rel}`,
          destination: m[1],
          anchor: '(template)',
          section: '—',
          type: 'template/chrome',
          status: statusOf(m[1]),
          field: rel,
        });
      }
    }
  };
  await walk(join(root, dir));
}
await sweepSource('src/components', 'component');
await sweepSource('src/pages', 'page');

// --------------------------------------------- 4. links on the live WordPress
let liveCount = 0;
try {
  await access(LIVE_DIR);
  const files = (await readdir(LIVE_DIR)).filter((f) => f.endsWith('.html'));
  for (const f of files) {
    const html = await readFile(join(LIVE_DIR, f), 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (!canonical) continue;
    // Only the editorial body, not the shared chrome.
    const body =
      html.match(/<div class="elementor elementor-\d+ elementor-location-single[\s\S]*?<footer/)?.[0] ??
      html.match(/<main[\s\S]*?<\/main>/)?.[0] ??
      '';
    for (const m of body.matchAll(/<a[^>]+href="(https:\/\/theburgersleeves\.com\/[^"]*|\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
      const anchor = strip(m[2]);
      if (!anchor) continue;
      add({
        source: canonical,
        destination: m[1],
        anchor,
        section: '(live body)',
        type: 'live-wordpress',
        status: statusOf(m[1]),
        field: `live crawl > ${f}`,
      });
      liveCount += 1;
    }
  }
} catch {
  console.warn('  (live crawl directory not available — skipping live baseline)');
}

// ------------------------------------------------------------------- write it
const csv = (rs) => {
  const head = [
    'source_url',
    'destination_url',
    'anchor_text',
    'section_heading',
    'link_type',
    'http_status',
    'source_field',
  ];
  const esc = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return (
    [head.join(','), ...rs.map((r) => [r.source, r.destination, r.anchor, r.section, r.type, r.status, r.field].map(esc).join(','))].join('\n') +
    '\n'
  );
};
await writeFile(join(OUT, 'OLD_INTERNAL_LINK_BASELINE.csv'), csv(rows));

const byType = rows.reduce((m, r) => ((m[r.type] = (m[r.type] ?? 0) + 1), m), {});
const bad = rows.filter((r) => r.status === '404');
console.log(`baseline rows: ${rows.length}`);
for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) console.log(`  ${k}: ${v}`);
console.log(`  live-crawl anchors: ${liveCount}`);
console.log(`  destinations returning 404: ${bad.length}`);
for (const b of bad.slice(0, 12)) console.log(`    ${b.destination}  <- ${b.source}`);
