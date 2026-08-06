import type { ImageMetadata } from 'astro';

/**
 * Every product / content photo lives in src/assets/images so Astro can emit
 * responsive, dimension-stamped variants. Products reference them by filename
 * (as exported from WooCommerce), so the glob is resolved by basename.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const name = path.split('/').pop();
  // Skip macOS AppleDouble sidecars (._foo.jpg) that can leak in from exFAT drives.
  if (name && !name.startsWith('._')) byName.set(name, mod.default);
}

export function getImage(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  return byName.get(filename);
}

/** Throws at build time rather than silently shipping a broken <img>. */
export function requireImage(filename: string): ImageMetadata {
  const img = byName.get(filename);
  if (!img) throw new Error(`Missing local asset: src/assets/images/${filename}`);
  return img;
}

export const PLACEHOLDER = 'woocommerce-placeholder.webp';

export function hasImage(filename: string | undefined): boolean {
  return !!filename && byName.has(filename);
}
