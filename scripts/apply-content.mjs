#!/usr/bin/env node
/**
 * Merges authored group content into src/data/product-content.json and the FAQ
 * arrays in src/data/products.json, then enforces the editorial rules before
 * writing anything. Refuses to write on a rule violation.
 *
 * Rules checked: 10-15 FAQs, <=1 contextual link per H2 section, no two links
 * in one paragraph, no self-links, no duplicate destination within a page,
 * destination must be a real route, no banned filler words, FAQ questions
 * unique sitewide, anchors not reused across pages.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const products = JSON.parse(await readFile(join(root, 'src/data/products.json'), 'utf8'));
const content = JSON.parse(await readFile(join(root, 'src/data/product-content.json'), 'utf8'));
const bySku = Object.fromEntries(products.map((p) => [p.sku, p]));

// ------------------------------------------------------------ load groups
const groupDir = join(root, 'scripts/content');
const incoming = {};
for (const f of (await readdir(groupDir)).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = await import(join(groupDir, f));
  for (const value of Object.values(mod)) {
    if (value && typeof value === 'object') Object.assign(incoming, value);
  }
}

// -------------------------------------------------------------- known routes
const routes = new Set([
  '/',
  '/shop/',
  '/about-us/',
  '/contact-us/',
  '/get-free-quote/',
  '/privacy-policy/',
  '/refund_returns/',
  '/shipping-policy/',
  '/terms-and-conditions/',
  '/brand/the-burger-sleeves/',
  ...products.map((p) => p.url),
  ...new Set(products.map((p) => `/product-category/${p.categorySlug}/`)),
]);

const BANNED = [
  'introducing', 'embrace', 'versatility', 'versatile', 'look no further',
  'unparalleled', 'tailor-made', 'robust', 'paramount', 'crafted', 'discover',
  'elevate', 'aesthetic', 'unleash', 'exquisite', 'precious', 'distinctive',
  'exceptional', 'dive into a world', 'arrays', 'perfect for', 'game-changing',
  'revolutionary', 'ultimate solution', 'in today’s competitive market',
  'in today\'s competitive market', 'when it comes to', 'not only', 'in conclusion',
  'in the world of', 'it is important to note', 'stand out from the competition',
];

const errors = [];
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// anchors already used by pages we are not touching this run
const anchorOwners = new Map();
for (const [sku, doc] of Object.entries(content)) {
  if (incoming[sku]) continue;
  for (const s of doc.sections)
    for (const b of s.blocks) {
      const strs = b.t === 'p' ? [b.html] : b.t === 'ul' || b.t === 'ol' ? b.items : [];
      for (const str of strs)
        for (const m of str.matchAll(/<a[^>]+>([\s\S]*?)<\/a>/g))
          anchorOwners.set(strip(m[1]).toLowerCase(), sku);
    }
}

for (const [sku, doc] of Object.entries(incoming)) {
  const p = bySku[sku];
  if (!p) {
    errors.push(`${sku}: no such product`);
    continue;
  }
  const seenDest = new Set();

  for (const section of doc.sections) {
    const links = [];
    for (const b of section.blocks) {
      const strs = b.t === 'p' ? [b.html] : b.t === 'ul' || b.t === 'ol' ? b.items : [];
      for (const str of strs) {
        const inThis = [...str.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
        if (b.t === 'p' && inThis.length > 1)
          errors.push(`${sku} "${section.heading}": ${inThis.length} links in one paragraph`);
        for (const m of inThis) {
          links.push({ href: m[1], anchor: strip(m[2]) });
        }
      }
      if (b.t === 'table') {
        const cells = [...b.headers, ...b.rows.flat()].join(' ');
        if (/<a\s/.test(cells)) errors.push(`${sku}: link inside a specification table`);
      }
    }
    if (links.length > 1)
      errors.push(
        `${sku} "${section.heading}": ${links.length} contextual links in one section`,
      );
    for (const l of links) {
      if (!routes.has(l.href)) errors.push(`${sku}: unknown destination ${l.href}`);
      if (l.href === p.url) errors.push(`${sku}: self-link`);
      if (seenDest.has(l.href)) errors.push(`${sku}: duplicate destination ${l.href}`);
      seenDest.add(l.href);
      const key = l.anchor.toLowerCase();
      if (/^(click here|learn more|read more|view product|explore|visit this page)$/.test(key))
        errors.push(`${sku}: generic anchor "${l.anchor}"`);
      if (anchorOwners.has(key) && anchorOwners.get(key) !== sku)
        errors.push(`${sku}: anchor "${l.anchor}" already used by ${anchorOwners.get(key)}`);
      anchorOwners.set(key, sku);
    }
  }

  const total = doc.sections.flatMap((s) =>
    s.blocks.flatMap((b) => {
      const strs = b.t === 'p' ? [b.html] : b.t === 'ul' || b.t === 'ol' ? b.items : [];
      return strs.flatMap((str) => [...str.matchAll(/<a[^>]+href=/g)]);
    }),
  ).length;
  if (total < 3 || total > 6) errors.push(`${sku}: ${total} contextual links (want 3-6)`);

  if (doc.faqs) {
    if (doc.faqs.length < 10 || doc.faqs.length > 15)
      errors.push(`${sku}: ${doc.faqs.length} FAQs (want 10-15)`);
    for (const f of doc.faqs) {
      const w = f.a.split(/\s+/).length;
      if (w < 30 || w > 110) errors.push(`${sku}: FAQ answer ${w} words — "${f.q.slice(0, 40)}"`);
    }
  }

  const prose = doc.sections
    .flatMap((s) => [s.heading ?? '', ...s.blocks.flatMap((b) =>
      b.t === 'p' ? [strip(b.html)] : b.t === 'ul' || b.t === 'ol' ? b.items.map(strip) : [b.t === 'h3' ? b.text : ''],
    )])
    .join(' ')
    .toLowerCase();
  for (const bad of BANNED) if (prose.includes(bad)) errors.push(`${sku}: banned phrase "${bad}"`);
}

// FAQ questions must be unique sitewide. Duplicates that involve a product in
// this run are a hard failure; duplicates purely between pages we have not
// rewritten yet are pre-existing debt, reported so the owning group fixes them.
const qOwners = new Map();
for (const p of products) {
  const faqs = incoming[p.sku]?.faqs ?? p.faqs;
  for (const f of faqs) {
    const k = f.q.replace(/^\d+\.\s*/, '').toLowerCase().trim();
    if (!qOwners.has(k)) qOwners.set(k, []);
    qOwners.get(k).push(p.sku);
  }
}
const preExisting = [];
for (const [q, skus] of qOwners) {
  if (skus.length < 2) continue;
  const touched = skus.filter((s) => incoming[s]);
  if (touched.length) errors.push(`duplicate FAQ (${skus.join(', ')}): ${q.slice(0, 60)}`);
  else preExisting.push(`${skus.join(', ')}: ${q.slice(0, 60)}`);
}

if (errors.length) {
  console.error(`Refusing to write — ${errors.length} rule violation(s):\n`);
  for (const e of errors.slice(0, 40)) console.error('  ' + e);
  if (errors.length > 40) console.error(`  … ${errors.length - 40} more`);
  process.exit(1);
}

// ------------------------------------------------------------------- write
let updated = 0;
for (const [sku, doc] of Object.entries(incoming)) {
  content[sku] = { sections: doc.sections };
  if (doc.faqs) bySku[sku].faqs = doc.faqs.map((f, i) => ({ q: `${i + 1}. ${f.q}`, a: `<p>${f.a}</p>` }));
  updated += 1;
}
await writeFile(join(root, 'src/data/product-content.json'), JSON.stringify(content, null, 1) + '\n');
await writeFile(join(root, 'src/data/products.json'), JSON.stringify(products, null, 1) + '\n');

console.log(`applied ${updated} product(s): ${Object.keys(incoming).join(', ')}`);
console.log('all editorial rules passed for this run');
if (preExisting.length) {
  console.log(`\ncarried-over duplicate FAQs on pages not yet rewritten (${preExisting.length}):`);
  for (const d of preExisting) console.log('  ' + d);
}
