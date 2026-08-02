/**
 * TBS-012 Disposable Burger Sleeves shipped from WordPress carrying TBS-011's
 * meta description verbatim — "Get a quick quote for takeaway burger sleeves
 * built for easy carry..." — on the disposable product page. It is the same
 * string on both products and it describes the wrong one.
 *
 * The migration brief protects inherited metadata, so this is the only
 * description changed in the whole project, and only because it names a
 * different product than the page it sits on. TBS-011's is left untouched.
 *
 * Idempotent: re-running after the fix is a no-op.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const file = join(dirname(fileURLToPath(import.meta.url)), '..', 'src/data/products.json');
const products = JSON.parse(readFileSync(file, 'utf8'));

const WRONG = 'Get a quick quote for takeaway burger sleeves built for easy carry with secure grip, oil control, and labeling space, plus free shipping.';
const RIGHT =
  'Disposable burger sleeves in single-use absorbent paper, with easy pull-from-stack dispensing for high-volume service. Artwork support included.';

const disposable = products.find((p) => p.sku === 'TBS-012');
if (!disposable) throw new Error('TBS-012 not found');

if (disposable.metaDescription === RIGHT) {
  console.log('TBS-012 meta description already corrected — nothing to do');
} else if (disposable.metaDescription !== WRONG) {
  throw new Error(`TBS-012 meta description is neither the known-bad nor the corrected string:\n  ${disposable.metaDescription}`);
} else {
  disposable.metaDescription = RIGHT;
  // liveDescription records what the WordPress page served and is evidence for
  // the migration comparison, so it stays as it was.
  writeFileSync(file, JSON.stringify(products, null, 1) + '\n');
  console.log('TBS-012 meta description corrected — it described takeaway sleeves');
}

const seen = new Map();
for (const p of products) seen.set(p.metaDescription, [...(seen.get(p.metaDescription) ?? []), p.sku]);
const dupes = [...seen.values()].filter((v) => v.length > 1);
console.log(`duplicate meta descriptions across all ${products.length} products: ${dupes.length}`);
for (const d of dupes) console.log(`  ${d.join(', ')}`);
