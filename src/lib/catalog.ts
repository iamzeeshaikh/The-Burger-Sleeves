import productsJson from '../data/products.json';
import categoriesJson from '../data/categories.json';
import siteFaqsJson from '../data/site-faqs.json';

export type ProductImage = { file: string; alt: string };
export type Faq = { q: string; a: string };

export type Product = {
  id: number;
  slug: string;
  url: string;
  name: string;
  sku: string;
  brand: string;
  category: string;
  categorySlug: string;
  position: number;
  shortDescriptionHtml: string;
  longDescriptionHtml: string;
  specHeaders: string[];
  specRows: string[][];
  faqs: Faq[];
  images: ProductImage[];
  metaTitle: string;
  metaDescription: string;
  metaSource: string;
  liveCanonical: string | null;
  h1: string;
  availability: 'InStock' | 'OutOfStock';
};

export type Category = {
  slug: string;
  name: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  metaSource: string;
  liveCanonical: string | null;
  products: string[];
};

export const products = productsJson as Product[];
export const categories = categoriesJson as Category[];
export const siteFaqs = siteFaqsJson as Faq[];

const bySlug = new Map(products.map((p) => [p.slug, p]));
export const getProduct = (slug: string) => bySlug.get(slug);

const catBySlug = new Map(categories.map((c) => [c.slug, c]));
export const getCategory = (slug: string) => catBySlug.get(slug);

/** Catalogue order used by /shop/ and /brand/ — alphabetical, as WooCommerce renders it. */
export const productsAlphabetical = [...products].sort((a, b) => a.name.localeCompare(b.name));

export function productsInCategory(categorySlug: string): Product[] {
  return products
    .filter((p) => p.categorySlug === categorySlug)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * WooCommerce's related-products widget draws from the same product category.
 * Deriving it deterministically (same category, self excluded, alphabetical,
 * capped at four) keeps the block stable across builds instead of shuffling.
 */
export function relatedProducts(product: Product, limit = 4): Product[] {
  return productsInCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, limit);
}

export function primaryImage(product: Product): ProductImage | undefined {
  return product.images[0];
}

/** WooCommerce archives paginate at 16 items per page. */
export const PER_PAGE = 16;

export function paginate<T>(items: T[], perPage = PER_PAGE): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += perPage) pages.push(items.slice(i, i + perPage));
  return pages;
}
