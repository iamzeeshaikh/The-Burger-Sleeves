import { products, categories, productsAlphabetical, paginate } from './catalog';
import { PAGE_META } from '../data/pages';

/**
 * Single source of truth for what this site publishes.
 * The sitemap, the redirect map and the validation suite all read from here so
 * they cannot drift apart.
 */
export type RouteKind = 'home' | 'page' | 'policy' | 'product' | 'category' | 'archive' | 'utility';

export type Route = {
  path: string;
  kind: RouteKind;
  /** In the XML sitemap? Mirrors what Yoast published on the live site. */
  indexable: boolean;
  priority?: number;
};

const archivePageCount = paginate(productsAlphabetical).length;

export const ROUTES: Route[] = [
  { path: '/', kind: 'home', indexable: true, priority: 1.0 },

  { path: '/shop/', kind: 'archive', indexable: true, priority: 0.8 },
  ...Array.from({ length: archivePageCount - 1 }, (_, i) => ({
    path: `/shop/page/${i + 2}/`,
    kind: 'archive' as const,
    indexable: false,
  })),

  { path: '/brand/the-burger-sleeves/', kind: 'archive', indexable: true, priority: 0.6 },
  ...Array.from({ length: archivePageCount - 1 }, (_, i) => ({
    path: `/brand/the-burger-sleeves/page/${i + 2}/`,
    kind: 'archive' as const,
    indexable: false,
  })),

  ...categories.map((c) => ({ path: c.url, kind: 'category' as const, indexable: true, priority: 0.8 })),
  ...products.map((p) => ({ path: p.url, kind: 'product' as const, indexable: true, priority: 0.7 })),

  { path: '/about-us/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/contact-us/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/get-free-quote/', kind: 'page', indexable: true, priority: 0.7 },

  // Blog listing plus one path per markdown file in src/data/blog/.
  { path: '/blog/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/blog/what-are-burger-sleeves-and-how-do-they-work/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/blog/how-to-choose-burger-sleeve-sizes/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/blog/kraft-and-greaseproof-burger-sleeves-compared/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/blog/how-to-design-custom-printed-burger-sleeves/', kind: 'page', indexable: true, priority: 0.6 },
  { path: '/blog/burger-sleeves-wrappers-and-boxes-compared/', kind: 'page', indexable: true, priority: 0.6 },

  { path: '/privacy-policy/', kind: 'policy', indexable: true, priority: 0.3 },
  { path: '/refund_returns/', kind: 'policy', indexable: true, priority: 0.3 },
  { path: '/shipping-policy/', kind: 'policy', indexable: true, priority: 0.3 },
  { path: '/terms-and-conditions/', kind: 'policy', indexable: true, priority: 0.3 },

  // noindex,nofollow on the live site — reachable, never listed.
  { path: '/thank-you/', kind: 'utility', indexable: false },
];

export const INDEXABLE_ROUTES = ROUTES.filter((r) => r.indexable);

export const ALL_PATHS = ROUTES.map((r) => r.path);

/** Sanity check used by the validation suite. */
export function duplicatePaths(): string[] {
  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const p of ALL_PATHS) {
    if (seen.has(p)) dupes.push(p);
    seen.add(p);
  }
  return dupes;
}

export { PAGE_META };
