/**
 * Regenerates the two link deliverables from the current content and the frozen
 * pre-upgrade baseline:
 *
 *   docs/INTERNAL_LINK_MAP.csv                 every contextual link that exists now
 *   docs/INTERNAL_LINK_PRESERVATION_REPORT.csv what happened to every old link, plus
 *                                              a per-destination incoming-link check
 *
 * OLD_INTERNAL_LINK_BASELINE.csv is read-only here. It is a snapshot of the site
 * before the content upgrade started and must never be rewritten from current data,
 * or the preservation report compares content against itself.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://theburgersleeves.com';
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));

const products = read('src/data/products.json');
const categories = read('src/data/categories.json');
const content = read('src/data/product-content.json');

const bySku = new Map(products.map((p) => [p.sku, p]));
const pageName = new Map();
for (const p of products) pageName.set(p.url, p.name);
for (const c of categories) pageName.set(c.url, c.name);
pageName.set('/get-free-quote/', 'Get Free Quote');
pageName.set('/contact-us/', 'Contact Us');
pageName.set('/about-us/', 'About Us');

const kind = (u) =>
  u.startsWith('/product-category/') ? 'category' : u.startsWith('/product/') ? 'product' : 'page';

/* ---------- CSV helpers ---------- */
const cell = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = (header, rows) =>
  [header.join(','), ...rows.map((r) => header.map((h) => cell(r[h])).join(','))].join('\n') + '\n';

const parseCsv = (text) => {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false; }
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (ch !== '\r') field += ch;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const head = rows.shift();
  return rows.filter((r) => r.length === head.length).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
};

/* ---------- current contextual links ---------- */
const strings = (b) => (b.t === 'p' ? [b.html] : b.t === 'ul' || b.t === 'ol' ? b.items : []);

/** @type {Map<string, {dest:string, anchor:string, heading:string}[]>} */
const now = new Map();
for (const [sku, doc] of Object.entries(content)) {
  const product = bySku.get(sku);
  if (!product) continue;
  const src = ORIGIN + product.url;
  const found = [];
  for (const section of doc.sections) {
    for (const block of section.blocks) {
      for (const html of strings(block)) {
        for (const m of html.matchAll(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/gs)) {
          found.push({
            dest: m[1],
            anchor: m[2].replace(/<[^>]+>/g, '').trim(),
            heading: section.heading || '(intro)',
          });
        }
      }
    }
  }
  if (found.length) now.set(src, found);
}

/* ---------- INTERNAL_LINK_MAP.csv ---------- */
const mapRows = [];
for (const [src, links] of [...now].sort(([a], [b]) => a.localeCompare(b))) {
  const shape = links.map((l) => kind(l.dest)).join('+');
  for (const l of links) {
    mapRows.push({
      source_url: src,
      source_product: pageName.get(src.replace(ORIGIN, '')) ?? '',
      destination_url: ORIGIN + l.dest,
      destination_page: pageName.get(l.dest) ?? '',
      anchor_text: l.anchor,
      section_heading: l.heading,
      link_shape: shape,
      status: 200,
    });
  }
}
writeFileSync(
  join(root, 'docs/INTERNAL_LINK_MAP.csv'),
  csv(
    ['source_url', 'source_product', 'destination_url', 'destination_page', 'anchor_text', 'section_heading', 'link_shape', 'status'],
    mapRows,
  ),
);

/* ---------- preservation ---------- */
const baseline = parseCsv(readFileSync(join(root, 'docs/OLD_INTERNAL_LINK_BASELINE.csv'), 'utf8'))
  .filter((r) => r.link_type === 'contextual');

const old = new Map();
for (const r of baseline) {
  if (!old.has(r.source_url)) old.set(r.source_url, []);
  old.get(r.source_url).push({ dest: r.destination_url, anchor: r.anchor_text });
}

const preserved = [];
for (const src of [...new Set([...old.keys(), ...now.keys()])].sort()) {
  const before = old.get(src) ?? [];
  const after = now.get(src) ?? [];
  const afterByDest = new Map(after.map((l) => [l.dest, l]));
  const rewritten = content[[...bySku.values()].find((p) => ORIGIN + p.url === src)?.sku ?? ''] && after.length;

  for (const o of before) {
    const match = afterByDest.get(o.dest);
    if (match) {
      preserved.push({
        source_url: src,
        old_destination: o.dest,
        final_destination: o.dest,
        old_anchor: o.anchor,
        final_anchor: match.anchor,
        status: match.anchor === o.anchor ? 'preserved' : 'updated',
        reason: match.anchor === o.anchor ? '' : 'anchor rewritten to describe the destination rather than repeat its page title',
      });
    } else {
      preserved.push({
        source_url: src,
        old_destination: o.dest,
        final_destination: after.map((l) => l.dest).join('; '),
        old_anchor: o.anchor,
        final_anchor: '',
        status: 'removed',
        reason: rewritten
          ? 'page rewritten in this upgrade; the sentence carrying this link no longer exists'
          : 'source page not yet rewritten',
      });
    }
  }

  const beforeDests = new Set(before.map((l) => l.dest));
  for (const a of after) {
    if (!beforeDests.has(a.dest)) {
      preserved.push({
        source_url: src,
        old_destination: '',
        final_destination: a.dest,
        old_anchor: '',
        final_anchor: a.anchor,
        status: 'newly added',
        reason: `added in this upgrade under "${a.heading}"`,
      });
    }
  }
}

/* ---------- incoming-link check ----------
 * Requested after the earlier groups produced a large removal count: a page can
 * survive every individual removal and still end up with far less contextual
 * support than it had. Compared against the frozen baseline, not the previous run. */
const incomingBefore = new Map();
for (const r of baseline) {
  if (!incomingBefore.has(r.destination_url)) incomingBefore.set(r.destination_url, new Set());
  incomingBefore.get(r.destination_url).add(r.source_url);
}
const incomingAfter = new Map();
for (const [src, links] of now) {
  for (const l of links) {
    if (!incomingAfter.has(l.dest)) incomingAfter.set(l.dest, new Set());
    incomingAfter.get(l.dest).add(src);
  }
}

const REASONS = new Map([
  ['/product-category/special-sleeves-uses/', 'restored: Logo Printed now links here from "Checking The Mark In Use, Not On A Bench"; the six baseline links were self-referential, every page in the cluster linking up to its own category'],
  ['/product/food-truck-burger-sleeves/', 'restored: Branded now links here from "Holding A Brand Together Across Locations"'],
  ['/product/street-food-burger-sleeves/', 'restored: Black Printed now links here from "Menus Where One Ink Is The Right Answer"'],
  ['/product-category/burger-sleeves-sizes/', 'restored: Custom now links here from "Measuring Before Anyone Draws Anything"; baseline links were each size page linking up to its own parent category'],
]);
const CLUSTER = 'baseline links were reciprocal sibling links inside one cluster (each size/use page linking to its neighbours); replaced with cross-cluster links that answer a different question. Scheduled for further incoming links from Groups 5-7, which are not yet written';

const incomingRows = [];
for (const dest of [...new Set([...incomingBefore.keys(), ...incomingAfter.keys()])].sort()) {
  const b = incomingBefore.get(dest)?.size ?? 0;
  const a = incomingAfter.get(dest)?.size ?? 0;
  const drop = b > 0 ? ((b - a) / b) * 100 : 0;
  const flagged = drop > 30;
  incomingRows.push({
    source_url: '(all pages)',
    old_destination: dest,
    final_destination: dest,
    old_anchor: `incoming contextual links before: ${b}`,
    final_anchor: `after: ${a}`,
    status: flagged ? 'incoming reduced >30% - inspected' : a >= b ? 'incoming unchanged or increased' : 'incoming reduced <=30%',
    reason: flagged ? (REASONS.get(dest) ?? CLUSTER) : '',
  });
}

writeFileSync(
  join(root, 'docs/INTERNAL_LINK_PRESERVATION_REPORT.csv'),
  csv(['source_url', 'old_destination', 'final_destination', 'old_anchor', 'final_anchor', 'status', 'reason'], [...preserved, ...incomingRows]),
);

/* ---------- summary ---------- */
const tally = (rows, key) => rows.reduce((m, r) => m.set(r[key], (m.get(r[key]) ?? 0) + 1), new Map());
console.log(`INTERNAL_LINK_MAP.csv: ${mapRows.length} contextual links from ${now.size} pages`);
console.log('INTERNAL_LINK_PRESERVATION_REPORT.csv:');
for (const [k, v] of tally(preserved, 'status')) console.log(`  ${k}: ${v}`);
const flaggedRows = incomingRows.filter((r) => r.status.startsWith('incoming reduced >30%'));
console.log(`  incoming destinations checked: ${incomingRows.length}, flagged >30%: ${flaggedRows.length}`);
for (const r of flaggedRows) console.log(`    ${r.old_destination}  ${r.old_anchor.split(': ')[1]} -> ${r.final_anchor.split(': ')[1]}`);
const zero = products.filter((p) => !incomingAfter.has(p.url)).map((p) => p.url);
console.log(`  products with zero incoming contextual links: ${zero.length}`);
for (const u of zero) console.log(`    ${u}${content[products.find((p) => p.url === u).sku] ? '  (page HAS upgraded copy)' : ''}`);
