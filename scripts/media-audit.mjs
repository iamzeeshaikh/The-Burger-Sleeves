/**
 * Media rescue and licensing audit.
 *
 * Removes every product image carrying third-party branding, a mockup-template
 * watermark or a stock-listing overlay, and gives any product left with nothing
 * the neutral "Artwork Preview Coming Soon" graphic.
 *
 * The images are NOT edited. Removing a watermark or a logo from someone else's
 * copyrighted photograph and then using it would be worse than leaving it, so
 * the whole file is dropped from the product data instead.
 *
 * Classification came from viewing every one of the 148 referenced images as
 * contact sheets, then re-checking each flagged file at full size. The reasons
 * below record what is actually visible in each frame.
 *
 * Writes docs/PRODUCT_IMAGE_INVENTORY.csv. Idempotent.
 */
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG_DIR = join(root, 'src/assets/images');
const QUAR_DIR = join(root, 'quarantine/third-party-images');
const productsPath = join(root, 'src/data/products.json');
const products = JSON.parse(readFileSync(productsPath, 'utf8'));

const PLACEHOLDER = 'Artwork-Preview-Coming-Soon.jpg';
const PLACEHOLDER_ALT = 'Artwork preview coming soon';

/** file -> [category, what is visible] */
const EXCLUDE = new Map(Object.entries({
  'Burger-Wrapping-Sleeves.jpg': ['template advert', '"Fast Sleeve Printing — Get yours printed today!" printed on the box; a competitor or template advert'],
  'burger-sleeves-packaging.jpg': ['third-party brand', "JB's Burgers full brand identity across bags, boxes and wraps"],
  'custom-fast-food-sleeve.jpg': ['stock listing overlay', '"100 PACK" retail sticker composited onto the image'],
  'fast-food-sleeves-packaging.jpg': ['third-party brand', 'Lumi Fast Food logo and slogan'],
  'logo-printed-food-sleeves.jpg': ['third-party brand', 'BURGER HOUSE / BURGER BOX brand identity'],
  'Kraft-Hamburger-Sleeves.jpg': ['third-party brand', '"burger time" brand band across the wrap'],
  'Gloss-Paper-Burger-Sleeves.jpg': ['third-party brand', 'BURGER PALACE and BAYETTE Boutique Restaurant logos'],
  'Single-Wall-Corrugated-Burger-Sleeve.jpg': ['third-party brand', 'third-party striped burger-box identity; also shows trays rather than sleeves'],
  'Corrugated-Burger-Sleeve.jpg': ['third-party brand', 'White Castle branded clamshell'],
  'Custom-Corrugated-Burger-Sleeve.jpg': ['third-party brand', 'BURGER BROTHER™ branded tray'],
  'Disposable-Corrugated-Burger-Sleeve.jpg': ['mockup template', '"burger holder" free-mockup template with provider credit'],
  'Kraft-Corrugated-Burger-Sleeve.jpg': ['third-party brand', 'third-party striped burger-box identity'],
  'Food-Grade-Recycled-Burger-Sleeve.jpg': ['mockup template', '"SANDWICH PACKAGING mockup" watermark printed across the frame'],
  'Mini-Small-Burger-Sleeve.jpg': ['third-party brand', 'DOWNTOWNER branded box'],
  'Logo-Printed-Small-Burger-Sleeve.jpg': ['third-party brand', 'Hamburgesa branded wrap'],
  'Small-Burger-Sleeve-Packaging.jpg': ['third-party brand', 'MAZZA FOOD branded wrap'],
  'Classic-Medium-Burger-Sleeve.jpg': ['third-party brand', 'MUNCH branded box'],
  'Large-Burger-Sleeve.jpg': ['third-party brand', 'KLAY by Karak House branded box'],
  'Jumbo-Burger-Sleeves.jpg': ['mockup template', '"burger holder" free-mockup template'],
  'Slider-Burger-Sleeve.jpg': ['third-party brand', 'White Castle branded boxes, logo clearly legible'],
  'Cardboard-Double-Patty-Burger-Sleeve.jpg': ['third-party brand', 'third-party printed wrap identity'],
  'Custom-Kraft-Brown-Burger-Sleeve.jpg': ['third-party brand + agency credit', 'Burger King WHOPPER® wrap, "Flame Grilled™", "America\'s Favorite Burger®", plus a "Designed by Turner Duckworth" agency watermark'],
  'Kraft-Brown-Burger-Sleeves-With-Logo.jpg': ['third-party brand', 'Crave branded bags'],
  'Kraft-Brown-Burger-Sleeves.jpg': ['third-party brand', 'Burger Station branded bags'],
  'Uncoated-Kraft-Brown-Burger-Sleeve.jpg': ['third-party brand', 'KLAY by Karak House branded box'],
  'Gloss-White-Burger-Sleeve.jpg': ['third-party brand', 'CULTO KEBAB branded tray and wrap'],
  'Pure-White-Burger-Sleeve.jpg': ['third-party brand', '"street" / "BEER" branded cups and wrap'],
  'Premium-Mattle-Burger-Sleeve.jpg': ['third-party brand + wrong product', '"HOT DOG KING SIZE" sleeves — a hot dog product, not a burger sleeve'],
  'Custom-Gloss-Finish-Burger-Sleeve.jpg': ['third-party brand', 'BURGER swirl brand identity'],
  'Gloss-Finish-Burger-Sleeves-For-Cafes.jpg': ['third-party brand', 'HOFFY branded foil wrap'],
  'Die-Cut-Burger-Sleeve-For-Cafes.jpg': ['third-party brand', 'MAZZA FOOD branded wrap'],
  'White-Die-Cut-Burger-Sleeve.jpg': ['third-party brand', 'Hamburgesa branded wrap'],
  'Matte-Burger-Sleeve.jpg': ['third-party brand', 'White Castle branded box'],
  'Disposable-Hamburger-Sleeve.jpg': ['third-party brand', 'Hamburgesa branded wrap'],
  'Takeaway-Burger-Sleeves.jpg': ['third-party brand', 'DOWNTOWNER branded box'],
  'Custom-Takeaway-Burger-Sleeves.jpg': ['third-party brand', 'DOWNTOWNER branded box'],
  'Grease-Resistant-Burger-Sleeves.jpg': ['third-party brand', 'KRAFT (Kraft Heinz) burger cheese advertising imagery'],
  'Custom-Grease-Resistant-Burger-Packaging.jpg': ['third-party brand', 'GOOD FOOD BURGER branded wrap'],
  'Custom-Takeaway-Burger-Packaging.jpg': ['third-party brand', 'DELICIOUS DESSERT branded box'],
  'Restaurant-Burger-Sleeves-With-Logo.jpg': ['third-party brand + wrong product', '"HOTDOG" sleeves — a hot dog product, not a burger sleeve'],
  'Promotional-Burger-Sleeves.jpg': ['third-party brand', '"WHAT THE DUCK?" brand identity'],
  'Corporate-Event-Burger-Sleeves.jpg': ['third-party brand', 'third-party printed identity across bag and box'],
}));

const dims = (file) => {
  let p = join(IMG_DIR, file);
  if (!existsSync(p)) p = join(QUAR_DIR, file);
  if (!existsSync(p)) return { w: 0, h: 0, bytes: 0 };
  const b = readFileSync(p);
  const bytes = statSync(p).size;
  // JPEG SOF scan
  for (let i = 2; i + 9 < b.length; ) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7), bytes };
    i += 2 + b.readUInt16BE(i + 2);
  }
  if (b.slice(1, 4).toString() === 'PNG') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), bytes };
  return { w: 0, h: 0, bytes };
};

const rows = [];
let removed = 0;

/* Which product originally referenced each excluded file. Recorded here so the
 * inventory still reports the exclusions after the data has been cleaned — a
 * re-run must not quietly drop the audit trail. */
const ORIGIN = JSON.parse(readFileSync(join(root, 'scripts/excluded-origins.json'), 'utf8'));

for (const p of products) {
  const before = p.images ?? [];
  const kept = before.filter((i) => !EXCLUDE.has(i.file));
  removed += before.length - kept.length;
  p.images = kept;
}

for (const [file, [cat, seen]] of EXCLUDE) {
  const d = dims(file);
  for (const o of ORIGIN[file] ?? [{ sku: '(unknown)', name: '', url: '', alt: '' }]) {
    rows.push({
      sku: o.sku, product: o.name, url: o.url, role: 'excluded',
      file, local_path: `quarantine/third-party-images/${file}`,
      original_source: 'WordPress wp-content/uploads (migrated)',
      dimensions: d.w ? `${d.w}x${d.h}` : 'moved out of build',
      bytes: d.bytes || '', alt: o.alt,
      ownership: 'NOT owned — third-party or template imagery',
      status: 'excluded from production', third_party: cat,
      action: `Whole image removed and moved out of the build glob. Visible: ${seen}. Not edited or de-watermarked.`,
    });
  }
}

/* ---------------------------------------------------------------- one owner per image
 * Excluding contaminated files left three products whose only remaining image
 * was already another product's main. Showing the same photograph as the main
 * image of two different products misrepresents at least one of them, so each
 * file is assigned to the single product whose name it matches best and removed
 * from the others. Anything left with nothing takes the placeholder. */
const score = (file, product) => {
  const words = file.replace(/\.[a-z]+$/i, '').toLowerCase().split(/[-_]/).filter((w) => !['burger','sleeve','sleeves','jpg','packaging'].includes(w));
  const name = product.name.toLowerCase();
  return words.filter((w) => w && name.includes(w)).length;
};
const owners = new Map();
for (const p of products) {
  const first = p.images?.[0]?.file;
  if (!first) continue;
  const held = owners.get(first);
  if (!held) { owners.set(first, p); continue; }
  const winner = score(first, p) > score(first, held) ? p : held;
  const loser = winner === p ? held : p;
  owners.set(first, winner);
  loser.images = loser.images.filter((i) => i.file !== first);
}

let placeheld = 0;
for (const p of products) {
  if (!p.images || p.images.length === 0) {
    p.images = [{ file: PLACEHOLDER, alt: PLACEHOLDER_ALT }];
    placeheld++;
  }
}

for (const p of products) {
  for (const [n, i] of p.images.entries()) {
    const d = dims(i.file);
    const temp = i.file === PLACEHOLDER;
    rows.push({
      sku: p.sku, product: p.name, url: p.url, role: n === 0 ? 'main' : `gallery ${n}`,
      file: i.file, local_path: `src/assets/images/${i.file}`,
      original_source: temp ? 'generated for this project (scripts/media-audit.mjs)' : 'WordPress wp-content/uploads (migrated)',
      dimensions: d.w ? `${d.w}x${d.h}` : 'unknown', bytes: d.bytes,
      alt: i.alt, ownership: temp ? 'owned — generated in-project' : 'site-supplied, no third-party marks detected',
      status: temp ? 'TEMPORARY placeholder' : 'permanent',
      third_party: 'none detected', action: temp ? 'Placeholder shown until real photography is supplied' : 'retained',
    });
  }
}

writeFileSync(productsPath, JSON.stringify(products, null, 1) + '\n');

const header = ['sku','product','url','role','file','local_path','original_source','dimensions','bytes','alt','ownership','status','third_party','action'];
const cell = (v) => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; };
writeFileSync(join(root, 'docs/PRODUCT_IMAGE_INVENTORY.csv'),
  [header.join(','), ...rows.map((r) => header.map((h) => cell(r[h])).join(','))].join('\n') + '\n');


/* ---------------------------------------------------------------- sitewide imagery
 * The homepage hero and the about page also referenced contaminated files —
 * including White Castle packaging on two hero slides. Replaced with unbranded
 * photographs already in the library. */
const SITE_SWAPS = [
  ['src/data/homepage.json', 'Mini-Small-Burger-Sleeve.jpg', 'Kraft-Medium-Burger-Sleeve.jpg', 'homepage intro image — DOWNTOWNER branded box'],
  ['src/data/homepage.json', 'Logo-Printed-Small-Burger-Sleeve.jpg', 'Custom-Double-Patty-Burger-Sleeve.jpg', 'homepage printing section — Hamburgesa branded wrap'],
  ['src/data/homepage.json', 'Single-Wall-Corrugated-Burger-Sleeve.jpg', 'Custom-Jumbo-Burger-Sleeves.jpg', 'homepage hero slide — third-party striped box identity'],
  ['src/data/homepage.json', 'Corrugated-Burger-Sleeve.jpg', 'Unbleached-Kraft-Burger-Sleeve.jpg', 'homepage hero slides — White Castle branded clamshell'],
  ['src/data/about.json', 'Corrugated-Burger-Sleeve.jpg', 'Matte-Burger-Sandwich-Sleeve.jpg', 'about page panel — White Castle branded clamshell'],
  ['src/data/homepage.json', 'Jumbo-Burger-Sleeves.jpg', 'Paper-Double-Patty-Burger-Sleeves.jpg', 'homepage section image — free-mockup template'],
  // The CTA banner background appears on the homepage, every product, every
  // category, about and contact — so this one file was on nearly every page.
  ['src/components/CtaBanner.astro', 'logo-printed-food-sleeves.jpg', 'Natural-Kraft-Brown-Burger-Sleeve.jpg', 'sitewide CTA banner background — BURGER HOUSE branded box'],
];
for (const [rel, before, after, why] of SITE_SWAPS) {
  const fp = join(root, rel);
  const raw = readFileSync(fp, 'utf8');
  // Match the quoted filename, not a bare substring: replacing
  // "Jumbo-Burger-Sleeves.jpg" loosely also rewrites the middle of
  // "Custom-Jumbo-Burger-Sleeves.jpg" and invents a file that does not exist.
  const quoted = new RegExp(`(['"\`])${before.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g');
  if (!quoted.test(raw)) continue;
  writeFileSync(fp, raw.replace(quoted, (m) => m[0] + after + m[0]));
  rows.push({
    sku: 'SITE', product: 'sitewide', url: rel, role: 'excluded',
    file: before, local_path: `quarantine/third-party-images/${before}`,
    original_source: 'WordPress wp-content/uploads (migrated)',
    dimensions: '', bytes: '', alt: '',
    ownership: 'NOT owned — third-party imagery', status: 'replaced',
    third_party: 'third-party brand',
    action: `${why}; replaced with ${after}`,
  });
}

console.log(`excluded ${removed} image reference(s)`);
console.log(`products given the temporary placeholder: ${placeheld}`);
console.log(`inventory rows written: ${rows.length}`);
