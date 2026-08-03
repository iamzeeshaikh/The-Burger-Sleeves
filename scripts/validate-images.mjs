/**
 * Image validation across all 44 products. Fails the run on any material
 * defect so this cannot silently regress.
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG = join(root, 'src/assets/images');
const products = JSON.parse(readFileSync(join(root, 'src/data/products.json'), 'utf8'));

const size = (f) => {
  const b = readFileSync(join(IMG, f));
  for (let i = 2; i + 9 < b.length; ) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  if (b.slice(1, 4).toString() === 'PNG') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  return { w: 0, h: 0 };
};

/** Filenames that would suggest a brand we do not own slipped back in. */
const BRAND_WORDS = /white[-_ ]?castle|whopper|burger[-_ ]?king|mcdonald|kfc|wendy|hardee|five[-_ ]?guys|shake[-_ ]?shack|in[-_ ]?n[-_ ]?out|kraft[-_ ]?heinz|mockup|watermark|shutterstock|getty|istock|freepik|envato|dreamstime|123rf|placeit/i;

const errors = [], warnings = [];
const mains = new Map();

for (const p of products) {
  const imgs = p.images ?? [];
  if (!imgs.length) { errors.push(`${p.sku} ${p.name}: no main image`); continue; }

  imgs.forEach((img, n) => {
    const where = `${p.sku} ${img.file}`;
    if (/^https?:\/\//i.test(img.file)) errors.push(`${where}: external image URL — must be a local asset`);
    if (!existsSync(join(IMG, img.file))) { errors.push(`${where}: file missing on disk`); return; }
    const bytes = statSync(join(IMG, img.file)).size;
    if (bytes === 0) errors.push(`${where}: zero-byte file`);
    else if (bytes < 3000) warnings.push(`${where}: very small file (${bytes} bytes)`);
    const { w, h } = size(img.file);
    if (!w || !h) errors.push(`${where}: dimensions could not be read`);
    else if (w < 300 || h < 300) errors.push(`${where}: image too small (${w}x${h})`);
    if (!img.alt || !img.alt.trim()) errors.push(`${where}: missing or empty alt text`);
    if (BRAND_WORDS.test(img.file)) errors.push(`${where}: suspicious brand/stock filename`);
    if (img.alt && BRAND_WORDS.test(img.alt)) errors.push(`${where}: suspicious brand/stock wording in alt text`);
    if (n === 0) {
      const prev = mains.get(img.file);
      // The shared placeholder is the one main image allowed to repeat.
      if (prev && img.file !== 'Artwork-Preview-Coming-Soon.jpg')
        errors.push(`${where}: duplicate main image, also main on ${prev}`);
      mains.set(img.file, p.sku);
    }
  });
}

// Unreferenced excluded files still on disk are fine (kept out of the build by
// not being imported), but flag anything referenced that is not on disk.
const onDisk = new Set(readdirSync(IMG));
const referenced = new Set(products.flatMap((p) => (p.images ?? []).map((i) => i.file)));
for (const f of referenced) if (!onDisk.has(f)) errors.push(`referenced but not on disk: ${f}`);

console.log('=== image validation ===');
console.log(`  products: ${products.length}`);
console.log(`  image references: ${referenced.size} distinct, ${products.reduce((n, p) => n + (p.images?.length ?? 0), 0)} total`);
console.log(`  products on the temporary placeholder: ${products.filter((p) => p.images?.[0]?.file === 'Artwork-Preview-Coming-Soon.jpg').length}`);
console.log(`  errors: ${errors.length}   warnings: ${warnings.length}`);
for (const e of errors) console.log(`  ERROR   ${e}`);
for (const w of warnings) console.log(`  warn    ${w}`);
if (errors.length) process.exit(1);
console.log('\nall image checks passed.');
