/**
 * Scans every piece of customer-facing text for environmental, certification and
 * performance claims that need documentary support.
 *
 * Two severities, deliberately different:
 *
 *   BLOCK  — an unqualified claim in copy this project authored. These are
 *            written by us, so there is no excuse: fix the sentence.
 *   REVIEW — a claim in inherited WordPress content (short descriptions, image
 *            alt text, metadata). The migration brief protects those fields, so
 *            the scan reports them for a human decision rather than deleting
 *            them. Deleting a claim the business can actually document would be
 *            just as wrong as keeping one it cannot.
 *
 * Run: node scripts/claim-scan.mjs [--strict]
 *   --strict exits non-zero when anything is flagged, for CI use.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));
const products = read('src/data/products.json');
const content = read('src/data/product-content.json');

/** Claims that need documentation before they may appear anywhere. */
const CLAIMS = [
  ['100% recyclable', /\b100\s*%\s*recycl/i],
  ['fully recyclable', /\bfully\s+recycl/i],
  ['completely recyclable', /\bcompletely\s+recycl/i],
  ['compostable', /\bcompostabl/i],
  ['biodegradable', /\bbiodegrad/i],
  ['decomposes / breaks down', /\b(decompos|breaks?\s+down\s+natural)/i],
  ['plastic-free', /\bplastic[\s-]free\b/i],
  ['zero waste', /\bzero[\s-]waste\b/i],
  ['FSC certified', /\bFSC\b/i],
  ['FDA approved', /\bFDA\b/i],
  ['carbon neutral', /\bcarbon[\s-]neutral\b/i],
  ['eco-safe', /\beco[\s-]safe\b/i],
  ['environmentally friendly / harmless', /\benvironmental(ly)?[\s-](friendly|harmless|safe)\b/i],
  ['sustainable / sustainably sourced', /\bsustainab/i],
  ['eco friendly (as a property)', /\beco[\s-]friendly\b/i],
  ['renewable resources', /\brenewable\s+resource/i],
  // Only an assertion counts. Explaining the term, or telling a reader to ask
  // whether fibre is post-consumer, is the behaviour this scan exists to encourage.
  ['post-consumer content', /\b(made\s+(from|of|with)|contains?|containing|uses?|using|built\s+(from|using|with))\s+[^.]{0,40}post[\s-]consumer\b/i],
  ['fixed recycled percentage', /\b\d{1,3}\s*%\s*(post[\s-]consumer|recycled)/i],
  ['recyclable (unqualified)', /\brecyclable\b/i],
  ['food safe / food grade approval', /\b(food[\s-]safe|certified\s+food[\s-]grade)\b/i],
  ['accepted by all facilities', /\ball\s+(recycling\s+)?facilities\b/i],
  ['guaranteed insulation / keeps warm', /\b(superior|guaranteed)\s+insulat|keeps?\s+\w+\s+warmer\s+longer/i],
  ['leakproof / greaseproof guarantee', /\b(leak[\s-]?proof|100\s*%\s*grease)/i],
];

/** Wording that makes a claim conditional, so the sentence is already honest. */
const QUALIFIERS =
  /\b(depends?\s+on|check|confirm|ask|verify|varies|may|might|can\s+affect|not\s+all|rather\s+than\s+assum|should\s+not\s+be\s+assumed|no\s+blanket|local\s+facilit|where\s+available|if\s+documented|subject\s+to|cannot\s+be\s+assumed|is\s+not\s+something)\b/i;

/**
 * Reporting what a supplier document says is not the same as asserting it.
 * "The specification describes food-safe paper" tells a reader where the claim
 * comes from and leaves them able to weigh it, which is the behaviour this scan
 * exists to encourage. Bare assertion in the site's own voice is what it is for.
 */
const ATTRIBUTED =
  /\b(specification|spec table|specifications|supplier|manufacturer|data\s+sheet|documentation)\s+\w{0,8}\s?(describes?|states?|lists?|says?|notes?|records?|names?|offers?|mentions?)\b/i;

/**
 * A sentence that denies a claim is the opposite of a violation — "this does not
 * make the sleeve leakproof" is the sentence we want on the page, so it must not
 * be reported as if it made the claim.
 */
const NEGATED = (s, re) => {
  const m = re.exec(s);
  if (!m) return false;
  const before = s.slice(0, m.index).toLowerCase();
  return /\b(not|never|cannot|can't|no|nothing|neither|nor|without|avoid|stop\s+short\s+of|rather\s+than)\b[^.]{0,60}$/.test(before);
};

const strip = (s) => (s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const sentences = (t) => t.split(/(?<=[.!?])\s+/).filter(Boolean);
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const findings = [];
const check = (severity, sku, field, text, productName = '') => {
  // Calling a product by its own name is not a per-sentence claim. The name
  // itself is reported once, separately, as a REVIEW item.
  const names = productName
    ? [productName, productName.replace(/\bburger\s+/i, '')].map((n) => new RegExp(escape(n), 'gi'))
    : [];
  for (const raw of sentences(strip(text))) {
    // Questions are not assertions; the answer alongside them is scanned anyway.
    if (raw.trim().endsWith('?')) continue;
    let s = raw;
    for (const n of names) s = s.replace(n, ' ');
    for (const [label, re] of CLAIMS) {
      if (!re.test(s)) continue;
      const soft = QUALIFIERS.test(s) || ATTRIBUTED.test(s) || NEGATED(s, re);
      findings.push({ severity: soft ? 'QUALIFIED' : severity, sku, field, label, text: raw });
    }
  }
};

for (const p of products) {
  // The product name itself can carry a claim ("Eco Friendly Burger Sleeves").
  // That is a naming decision for the business, not something to rewrite here.
  for (const [label, re] of CLAIMS) {
    if (re.test(p.name)) findings.push({ severity: 'REVIEW', sku: p.sku, field: 'product name', label, text: p.name });
  }
  // Inherited WordPress fields — protected by the migration brief, so review only.
  check('REVIEW', p.sku, 'shortDescription', p.shortDescriptionHtml, p.name);
  check('REVIEW', p.sku, 'metaTitle', p.metaTitle, p.name);
  check('REVIEW', p.sku, 'metaDescription', p.metaDescription, p.name);
  for (const img of p.images ?? []) check('REVIEW', p.sku, `image alt "${img.file}"`, img.alt, p.name);
  for (const row of p.specRows ?? []) check('REVIEW', p.sku, 'specification table', row.join(' '), p.name);
  // FAQs are rewritten by this project, so they are held to the stricter bar.
  for (const f of p.faqs ?? []) check('BLOCK', p.sku, `FAQ "${strip(f.q).slice(0, 48)}"`, `${f.q} ${f.a}`, p.name);

  const doc = content[p.sku];
  if (!doc) continue;
  for (const sec of doc.sections) {
    for (const b of sec.blocks) {
      const strs =
        b.t === 'p' ? [b.html]
        : b.t === 'h3' ? [b.text]
        : b.t === 'ul' || b.t === 'ol' ? b.items
        : b.t === 'table' ? [...b.headers, ...b.rows.flat()]
        : [];
      for (const s of strs) check('BLOCK', p.sku, `long description › ${sec.heading ?? '(intro)'}`, s, p.name);
    }
  }
}

const byName = new Map(products.map((p) => [p.sku, p.name]));
const order = { BLOCK: 0, REVIEW: 1, QUALIFIED: 2 };
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.sku.localeCompare(b.sku));

const counts = findings.reduce((m, f) => m.set(f.severity, (m.get(f.severity) ?? 0) + 1), new Map());
console.log('=== unsupported claim scan ===');
console.log(`  BLOCK     ${counts.get('BLOCK') ?? 0}  unqualified claim in copy this project authored`);
console.log(`  REVIEW    ${counts.get('REVIEW') ?? 0}  claim in inherited WordPress content — needs a human decision`);
console.log(`  QUALIFIED ${counts.get('QUALIFIED') ?? 0}  claim wording present but already conditional (no action)`);

for (const sev of ['BLOCK', 'REVIEW']) {
  const rows = findings.filter((f) => f.severity === sev);
  if (!rows.length) continue;
  console.log(`\n--- ${sev} ---`);
  for (const f of rows) {
    console.log(`  ${f.sku} ${byName.get(f.sku)} › ${f.field}`);
    console.log(`     [${f.label}] ${f.text.slice(0, 150)}`);
  }
}

const blocking = counts.get('BLOCK') ?? 0;
if (blocking) {
  console.error(`\n${blocking} unqualified claim(s) in authored copy. Fix the wording or add the qualifier.`);
  process.exit(1);
}
if (process.argv.includes('--strict') && findings.length) process.exit(1);
console.log('\nno unqualified claims in authored copy.');
