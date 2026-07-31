/**
 * Stable social-preview URL for an image that lives in src/assets/images.
 * `scripts/build-og-images.mjs` writes the matching /og/<name>.jpg at build time.
 */
export function ogUrl(filename: string | undefined): string | undefined {
  if (!filename) return undefined;
  const base = filename.replace(/\.[^.]+$/, '');
  return `/og/${base}.jpg`;
}

/** Site-wide fallback when a page has no image of its own. */
export const DEFAULT_OG = '/og/png-1.jpg';
