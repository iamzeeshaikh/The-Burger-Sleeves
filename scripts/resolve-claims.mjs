/**
 * Resolves the open client decisions in CONTENT_AUDIT.md conservatively:
 * every claim that available project data does not support is removed or
 * replaced with qualified language, and every change is logged.
 *
 * Scope is deliberately narrow. Only the inaccurate sentence is touched; the
 * accurate copy around it is left exactly as migrated. Commercial terms the
 * business states as its own offer (free shipping, minimum order) are NOT
 * removed — those are the business's to make and are not product-property
 * claims. What goes is anything asserting a material property, a certification,
 * an environmental outcome or a structure that no image, specification or export
 * supports.
 *
 * Idempotent: every replacement checks for the corrected text first.
 * Writes docs/CLAIM_DECISION_LOG.csv.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'src/data/products.json');
const products = JSON.parse(readFileSync(file, 'utf8'));
const bySku = new Map(products.map((p) => [p.sku, p]));

const log = [];
const record = (sku, field, before, after, reason) => {
  const p = bySku.get(sku);
  log.push({ sku, product: p?.name ?? 'sitewide', url: p?.url ?? '(global data file)', field, before, after, reason });
};

/* ---------------------------------------------------------------- short descriptions */
const SHORT = {
  'TBS-021': {
    reason:
      'Decision 1. Claimed white ink reverse-printed on dark kraft. All five product images and the specification table show coloured artwork on a white stock. Rewritten to the product the evidence shows.',
    html:
      '<p>White printed burger sleeves put artwork onto a bright white stock, where an even ground lets printed colour land close to the approved reference. The bright surface suits detailed layouts and small text such as allergen information, and it reports handling marks more readily than an unbleached board does, so a barrier option is worth discussing for saucier menus. Multiple dimension options accommodate your burger varieties. Free USA delivery on all purchases with competitive wholesale rates. Reach out for personalized quotes or start your order.</p>',
  },
  'TBS-014': {
    reason:
      'Decision 10. Claimed the board "meets strict FDA regulations" and uses "certified safe materials". No approval, certification or supporting document exists in the WooCommerce export, the specification table or any supplied file. Replaced with the qualified position the page body already takes.',
    html:
      '<p>Food grade burger sleeves are specified around direct food contact, using food-contact suitable paper stock and approved ink sets with low-migration options available. Ink is kept off the food-facing side, and neutral pulp papers are chosen to limit odour transfer to warm items. Material, ink, coating and supplier documentation should be confirmed in writing for the exact construction you order, since suitability is a property of the finished build rather than of a product category. Available in standard and custom sizes. Free USA delivery included on all orders. Get your free quote or order now.</p>',
  },
  'TBS-041': {
    reason:
      'Decision 12. Claimed the design "holds both burgers and fries in one compact sleeve". All four product images show a single-burger sleeve or wrap; no compartment, divider, fry pocket or dual cavity appears in any image or in any specification field. Structural claim removed; repositioned as sleeve packaging for combo-order workflows.',
    html:
      '<p>Burger and fries sleeves are sleeve packaging planned around combo-order service, where a burger and a side leave the counter together in one bag. The sleeve holds the wrap closed and gives a clean grip while the fries travel in their own container, so the pair can be assembled and bagged quickly without the two items marking each other. Ideal for drive-through service, sports venues, and busy quick service restaurants where speed matters. Customize with full color branding that promotes your combo deals and value meals. Order starts at 100 pieces with attractive wholesale rates. No delivery fees applied across the United States.</p>',
  },
  'TBS-006': {
    reason:
      'Decision 6. Claimed biodegradable materials, compostable coatings, decomposition "in commercial composting facilities within weeks", plant-based construction and sustainably sourced fibres. The specification offers only "designed around responsible packaging preferences" with kraft and recycled board options. Every degradation and certification claim removed.',
    html:
      '<p>Eco friendly burger sleeves are a material-selection option built around kraft and recycled content board, with grease resistant and barrier coat choices and natural matte or coated finishes. The practical levers are right-sizing the sleeve to the build, keeping print coverage down and avoiding coatings the menu does not need. Disposal depends on the paperboard, any coatings or adhesives applied, food residue and what local facilities accept, so recycled content and recyclability should be confirmed separately for the specification you order. Start ordering with minimum quantities of 100 pieces at budget-friendly wholesale rates. Request your free quote today.</p>',
  },
  'TBS-003': {
    reason:
      'Decision 6. Claimed the material is "made from renewable resources that biodegrade naturally after use", a "sustainable alternative" and an "eco friendly material", and that the stock "meets health regulations". None is supported by the specification, which describes paperboard construction and coating options only.',
    html:
      '<p>Paper burger sleeves offer lightweight, economical paperboard packaging for burger and sandwich service. The paper based construction provides grease resistant options that reduce soak and surface marks during typical service conditions, and the format is usually specified to sit over an inner wrap rather than against the food. Disposal depends on the board, any barrier coating applied, ink coverage and local collection rules. Enjoy no cost delivery anywhere in the USA. At The Burger Sleeves, personalize with vibrant custom printing alongside your branding. Available in multiple sizes. Reach out for immediate pricing details or begin your order now.</p>',
  },
  'TBS-005': {
    reason:
      'Decision 6. Claimed "post consumer recycled cardboard materials" and framed recycled content as reduced landfill waste. The specification states only "built using recycled content where suitable for sleeve board" — no percentage and no post-consumer split is documented.',
    html:
      '<p>Free shipping throughout the USA on all orders with attractive wholesale pricing. Recycled burger sleeves are built using recycled content where it suits sleeve board, in recycled kraft or recycled paperboard, and perform reliably during service. The recycled content gives packaging a slightly speckled, textured appearance and a wider batch-to-batch shade variation than virgin board. Recycled content and recyclability are separate questions: ask your supplier to document the content figure for the board supplied, and check disposal against any coating applied and your local facilities. Choose from various sizes and coating finishes to match your requirements. Get instant pricing now or place your order.</p>',
  },
  'TBS-001': {
    reason:
      'Decision 6. Claimed the material "communicates environmental consciousness", aligns with "sustainable restaurant values" and that "natural fiber content provides biodegradable disposal". Kraft describes an unbleached pulping process and implies nothing about fibre source or disposal.',
    html:
      '<p>Natural brown kraft material delivers reliable grease resistance and structural strength, in absorbent or barrier builds across a 250 to 400 GSM band. Kraft burger sleeves suit an unpolished, paper-forward presentation, and the warm ground is forgiving of handling marks that would show on a bright board. The organic appearance complements farm-fresh ingredients and artisanal preparation methods. Kraft describes how the pulp was made rather than where the fibre came from, so recycled content and disposal options should be confirmed for the board you order. Customize with colorful designs that pop against the neutral kraft background. Free shipping throughout the United States included on every order. Start ordering with just 100 pieces.</p>',
  },
  'TBS-004': {
    reason:
      'Decision 7. Claimed "superior insulation", that air pockets "keep burgers warmer longer" and that the build protects "hands from heat". No thermal data exists in any supplied field. Performance claims removed; flute options retained as specification items.',
    html:
      '<p>Corrugated burger sleeves use a layered construction for added structural strength in demanding food service. The specification offers E flute and F flute profiles, single face constructions and stiffer flute grades with a print grade outer liner, which add rigidity and resist bending during transport and stacking. Flute profile, finished caliper and any barrier treatment should be confirmed at quotation, and a physical sample of the exact construction is worth approving before a run. Free shipping across the United States included with every order. Customize with bold, impactful designs on the outer liner. Multiple sizing choices accommodate your complete menu range. Contact our team for personalized quotes.</p>',
  },
  'TBS-029': {
    reason:
      'Decision 6. Claimed the tone "communicates sustainability" and that a "moisture proof coating keeps packaging intact". Neither is supported; the specification offers grease resistant and barrier coated options, which slow rather than stop moisture.',
    html:
      '<p>Kraft brown burger sleeves deliver an authentic, unbleached look that suits casual food presentation. The natural brown tone reads as warm and approachable, while the sturdy kraft material provides grease resistance with barrier coated options where the menu needs them. This earthy appearance suits organic burger joints, farm to table restaurants, and brands emphasizing natural ingredients. Batch to batch shade variation is normal in unbleached board rather than a defect, so retain an approved sample if close consistency matters. Free delivery across America included with all purchases. Design with custom branding that pops against the natural kraft background. Different size options available.</p>',
  },
};

for (const [sku, { html, reason }] of Object.entries(SHORT)) {
  const p = bySku.get(sku);
  if (!p) throw new Error(`${sku} not found`);
  if (p.shortDescriptionHtml === html) continue;
  record(sku, 'shortDescriptionHtml', p.shortDescriptionHtml, html, reason);
  p.shortDescriptionHtml = html;
}

/* ---------------------------------------------------------------- specification rows */
/* Cell-level replacements. Only cells asserting a certification or an absolute
 * performance guarantee are touched; the surrounding specification is left as
 * the business supplied it. */
const SPEC_CELLS = [
  ['TBS-026', 'FDA-compliant, Direct food-contact safe materials', 'Food-contact suitable materials; confirm documentation for the specification ordered',
   'Decision 6. "FDA-compliant" asserts a regulatory status no supplied document establishes.'],
  ['TBS-026', 'Safe inks and coatings, Full regulatory compliance', 'Ink and coating options for food packaging; compliance to be confirmed per specification',
   'Decision 6. "Full regulatory compliance" is an unqualified certification claim.'],
  ['TBS-026', 'Meets FDA food packaging standards, Soy-based inks available, Quality tested', 'Soy-based inks available; supplier documentation to be confirmed for the chosen build',
   'Decision 6. Removes the FDA standards claim and the unqualified "quality tested".'],
  ['TBS-026', 'Food-safe grease barrier finish, Leak-proof coating', 'Grease barrier finish options; a barrier slows oil migration and does not make a sleeve leakproof',
   'Decision 6. "Leak-proof coating" is contradicted by every other page in the catalogue and by the material.'],
  ['TBS-026', 'No oil bleed-through, Keeps hands clean, Stain-free exterior, Sauce-resistant surface', 'Reduces oil bleed-through and surface staining; an inner wrap remains the primary barrier on sauced builds',
   'Decision 6. "No oil bleed-through" and "stain-free" are absolute guarantees the material cannot support.'],
  ['TBS-026', '12pt – 18pt food-grade cardboard, Grease-resistant inner coating standard', '12pt – 18pt paperboard, grease-resistant inner coating standard',
   'Decision 6. "Food-grade" used as a property claim; the caliper range is retained as supplied.'],
];

for (const [sku, before, after, reason] of SPEC_CELLS) {
  const p = bySku.get(sku);
  let hit = false;
  for (const row of p.specRows) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === before) { row[i] = after; hit = true; }
    }
  }
  if (hit) record(sku, 'specRows', before, after, reason);
}

/* ---------------------------------------------------------------- image alt text */
/* Alt text must describe what is visible. These carried material, environmental
 * or product claims the image does not show, or named the wrong subject. */
const ALTS = [
  ['TBS-006', 'Biodegradable-Burger-Sleeve.jpg', 'Burger held in a checked greaseproof paper wrap',
   'Decision 6. The image is a gingham greaseproof wrap sheet; nothing in it evidences biodegradability.'],
  ['TBS-006', 'Cafe-Eco-Friendly-Burger-Sleeve.jpg', 'Burger sleeve on a cafe counter',
   'Decision 6. Removes an environmental claim from alt text describing a counter photograph.'],
  ['TBS-006', 'Eco-Friendly-Burger-Sleeve.jpg', 'Kraft burger sleeve around a wrapped burger',
   'Decision 6. Alt text described a claim rather than the visible image.'],
  ['TBS-037', 'Eco-Friendly-Cafe-Burger-Sleeve.jpg', 'Burger sleeve served at a cafe table',
   'Decision 6. Environmental claim removed from alt text.'],
  ['TBS-040', 'Recyclable-Event-Burger-Sleeve.jpg', 'Printed burger sleeve at an event serving station',
   'Decision 6. "Recyclable" is a disposal outcome that depends on local facilities and cannot be asserted in alt text.'],
  ['TBS-005', 'Speckled-Recycled-Burger-Sleeve.jpg', 'Printed paper food bags holding a hot dog',
   'Decision 9. The image shows foil-lined printed bags with a hot dog, not a speckled recycled burger sleeve.'],
  ['TBS-005', 'Modern-Recycled-Burger-Sleeve.jpg', 'Recycled board burger sleeve',
   'Decision 9. Alt text read "Special Sleeves Uses", a category name unrelated to the image.'],
  ['TBS-044', 'burger-sleeves-packaging.jpg', 'Printed fast food sleeves stacked for service',
   'Decision 13. Alt text read "Burger Sleeves Materials", a category name that mislabels a fast-food image.'],
  ['TBS-043', 'Logo-Printed-Burger-Sandwich-Sleeves.jpg', 'Logo printed burger sandwich sleeve',
   'Decision 13. Alt text read "Logo Printed Burger Sleeves", naming the wrong product.'],
];

for (const [sku, fileName, alt, reason] of ALTS) {
  const p = bySku.get(sku);
  const img = (p.images ?? []).find((i) => i.file === fileName);
  if (!img) throw new Error(`${sku}: image ${fileName} not found`);
  if (img.alt === alt) continue;
  record(sku, `image alt (${fileName})`, img.alt, alt, reason);
  img.alt = alt;
}

/* ---------------------------------------------------------------- more short descriptions */
const SHORT2 = {
  'TBS-012': {
    reason:
      'Decision 6. Claimed the sleeves are "made from biodegradable materials". The specification lists kraft or white paper and absorbent stock with an optional barrier; nothing addresses degradation.',
    find: ' Made from biodegradable materials that reduce environmental guilt associated with disposables.',
    replace: ' Absorbent paper takes up surface oils so the hold area stays dry through a short service; disposal depends on the stock, any barrier applied, food residue and local facilities.',
  },
  'TBS-026': {
    reason:
      'Decision 6. "Food-safe" used as a bare property claim. Replaced with the commercial grade descriptor, which names the class of stock without asserting a certification.',
    find: 'printed on food-safe, grease-resistant cardboard',
    replace: 'printed on food-contact grade, grease-resistant cardboard',
  },
};
for (const [sku, { find, replace, reason }] of Object.entries(SHORT2)) {
  const p = bySku.get(sku);
  if (!p.shortDescriptionHtml.includes(find)) continue;
  const after = p.shortDescriptionHtml.replace(find, replace);
  record(sku, 'shortDescriptionHtml', find.trim(), replace.trim(), reason);
  p.shortDescriptionHtml = after;
}

/* "Food-safe" as a bare material descriptor across specification tables. The
 * commercial grade is a real category; asserting safety is not ours to do. */
const GRADE = [
  ['TBS-012', 'Food-safe paper', 'Food-contact grade paper'],
  ['TBS-013', 'Food-safe barrier', 'Food-contact grade barrier'],
  ['TBS-013', 'Direct contact safe materials', 'Materials offered for direct contact; confirm per specification'],
  ['TBS-014', 'Food-safe paper stock', 'Food-contact grade paper stock'],
  ['TBS-044', 'Food safe paper stocks', 'Food-contact grade paper stocks'],
  ['TBS-006', 'Sustainability Focus', 'Material Focus'],
  ['TBS-026', 'White Cardboard, Brown Kraft, Recycled Food-grade Board, Bleached Paperboard', 'White cardboard, brown kraft, recycled food-contact grade board, bleached paperboard'],
  ['TBS-026', 'Aqueous coating, Grease-proof lamination, Food-safe UV coating', 'Aqueous coating, grease-resistant lamination, UV coating for food packaging'],
  ['TBS-026', 'Food Safety', 'Food Contact'],
];
for (const [sku, before, after] of GRADE) {
  const p = bySku.get(sku);
  let hit = false;
  for (const row of p.specRows) {
    for (let i = 0; i < row.length; i++) if (row[i] === before) { row[i] = after; hit = true; }
  }
  if (hit) record(sku, 'specRows', before, after,
    'Decision 6. Bare safety or sustainability wording in a specification cell, replaced with a descriptor that names the grade without asserting a certification or an environmental property.');
}

/* ---------------------------------------------------------------- write */
if (log.length) {
  writeFileSync(file, JSON.stringify(products, null, 1) + '\n');
}

/* ---------------------------------------------------------------- sitewide content */
const patchJson = (rel, edits) => {
  const p = join(root, rel);
  const raw = readFileSync(p, 'utf8');
  let out = raw;
  for (const [before, after, sku, field, reason] of edits) {
    if (!out.includes(before)) continue;
    out = out.replace(before, after);
    record(sku, field, before, after, reason);
  }
  if (out !== raw) writeFileSync(p, out);
};

// The strongest regulatory claim on the site, and it feeds FAQPage schema.
patchJson('src/data/site-faqs.json', [
  [
    'Absolutely. All our materials are food-grade and comply with FDA and EU food contact regulations. We use only approved inks and coatings.',
    'Food-contact grade materials and approved ink sets are available, and ink is kept off the food-facing side. Suitability depends on the specific board, coating and inks in your build rather than on the product category, so ask us to confirm the intended contact type in writing for the exact specification you order.',
    'SITE', 'site-faqs.json — "Are the burger sleeves food-safe?"',
    'Decision 6/10. Claimed compliance with FDA and EU food contact regulations. No certification or supporting document exists in any supplied file, and the claim also fed the sitewide FAQPage schema.',
  ],
]);

patchJson('src/data/homepage.json', [
  [
    'Biodegradable and recyclable materials available for environmentally conscious businesses.',
    'Kraft and recycled content board options available; disposal depends on coatings, food residue and local facilities.',
    'SITE', 'homepage.json — why.cards[7].text',
    'Decision 6. Asserted biodegradability and recyclability sitewide on the homepage.',
  ],
  [
    'Eco-Friendly Options',
    'Lower-Impact Options',
    'SITE', 'homepage.json — why.cards[7].title',
    'Decision 6. Card title asserted an environmental property as a product category.',
  ],
  [
    'Natural, eco-friendly appearance with excellent strength',
    'Natural unbleached appearance with excellent strength',
    'SITE', 'homepage.json — materials.html (Kraft Paper row)',
    'Decision 6. "Eco-friendly appearance" implies an environmental property from a visual one.',
  ],
]);

patchJson('src/data/categories.json', [
  [
    'Explore premium burger sleeve materials: eco-friendly kraft paper, greaseproof, and custom printed options. Durable packaging for your restaurant!',
    'Explore burger sleeve materials: unbleached kraft paper, greaseproof board, corrugated and custom printed options. Durable packaging for your restaurant.',
    'SITE', 'categories.json — burger-sleeves-materials metaDescription',
    'Decision 6. "Eco-friendly kraft paper" asserts an environmental property of a material.',
  ],
]);

const cell = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const header = ['sku', 'product', 'url', 'field', 'before', 'after', 'reason'];
const logPath = join(root, 'docs/CLAIM_DECISION_LOG.csv');

// The log is a permanent record of every resolution, so it accumulates across
// runs rather than being overwritten by whatever a single run happened to
// change. Rows are keyed on sku + field + before, so re-running is a no-op.
let existing = [];
try {
  const raw = readFileSync(logPath, 'utf8').trim().split('\n').slice(1);
  const parse = (line) => {
    const out = []; let f = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (q) { if (c === '"') { if (line[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true;
      else if (c === ',') { out.push(f); f = ''; }
      else f += c;
    }
    out.push(f);
    return Object.fromEntries(header.map((h, i) => [h, out[i]]));
  };
  existing = raw.filter(Boolean).map(parse);
} catch { /* first run */ }

const key = (r) => `${r.sku}\u0000${r.field}\u0000${r.before}`;
const seen = new Set(existing.map(key));
const merged = [...existing, ...log.filter((r) => !seen.has(key(r)))];

writeFileSync(logPath, [header.join(','), ...merged.map((r) => header.map((h) => cell(r[h])).join(','))].join('\n') + '\n');
console.log(
  log.length
    ? `resolved ${log.length} claim(s) this run; decision log now holds ${merged.length} entries`
    : `no claims left to resolve; decision log holds ${merged.length} entries`,
);
for (const r of log) console.log(`  ${r.sku} ${r.field}`);
