#!/usr/bin/env node
/**
 * Social-preview images need URLs that stay put between builds, so they can't
 * use Astro's content-hashed asset names. This emits a 1200px JPEG copy of
 * every image referenced as an og:image into public/og/<original-name>.jpg.
 *
 * Runs as a prebuild step; safe to re-run (skips files already generated).
 */
import { mkdir, stat, writeFile, access } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'src', 'assets', 'images');
const OUT = join(root, 'public', 'og');

const products = JSON.parse(
  await import('node:fs/promises').then((fs) =>
    fs.readFile(join(root, 'src', 'data', 'products.json'), 'utf8'),
  ),
);
const homepage = JSON.parse(
  await import('node:fs/promises').then((fs) =>
    fs.readFile(join(root, 'src', 'data', 'homepage.json'), 'utf8'),
  ),
);

const wanted = new Set();
for (const p of products) if (p.images[0]) wanted.add(p.images[0].file);
wanted.add(homepage.intro.image);
wanted.add(homepage.printing.image);
wanted.add('png-1.png');

await mkdir(OUT, { recursive: true });

let made = 0;
let skipped = 0;
for (const file of wanted) {
  const from = join(SRC, file);
  const to = join(OUT, `${basename(file, extname(file))}.jpg`);
  try {
    await access(from);
  } catch {
    console.warn(`  ! og source missing: ${file}`);
    continue;
  }
  try {
    await access(to);
    const [a, b] = await Promise.all([stat(from), stat(to)]);
    if (b.mtimeMs >= a.mtimeMs) {
      skipped += 1;
      continue;
    }
  } catch {
    /* not generated yet */
  }
  const buf = await sharp(from)
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeFile(to, buf);
  made += 1;
}

console.log(`og images: ${made} generated, ${skipped} up to date, ${wanted.size} total`);
