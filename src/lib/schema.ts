import { SITE } from '../data/site';
import type { Product, Faq } from './catalog';

const abs = (path: string) => new URL(path, SITE.origin).href;

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.origin}/#organization`,
    name: SITE.name,
    url: `${SITE.origin}/`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE.addressParts,
    },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.origin}/#website`,
    name: SITE.name,
    url: `${SITE.origin}/`,
    publisher: { '@id': `${SITE.origin}/#organization` },
    inLanguage: 'en-US',
  };
}

export type Crumb = { name: string; url?: string };

export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: abs(c.url) } : {}),
    })),
  };
}

export function faqNode(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      },
    })),
  };
}

/**
 * Product schema deliberately carries no `offers`, `aggregateRating` or
 * `review`.
 *
 *  - The live WordPress plugin emitted a 5-star aggregateRating with a single
 *    review authored by "webmaster" while the page itself read "There are no
 *    reviews yet." Carrying that forward would be fabricating review data.
 *  - Every product in WooCommerce carries the same $0.50 placeholder and the
 *    product page never displays a price; the business quotes per enquiry.
 *    Publishing a price that is neither visible nor purchasable would be an
 *    invented offer.
 */
export function productNode(product: Product, imageUrls: string[]) {
  return {
    '@type': 'Product',
    '@id': `${abs(product.url)}#product`,
    url: abs(product.url),
    name: product.name,
    sku: product.sku,
    description: product.metaDescription,
    brand: { '@type': 'Brand', name: product.brand },
    category: product.category,
    ...(imageUrls.length ? { image: imageUrls.map((u) => abs(u)) } : {}),
  };
}

export function itemListNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: abs(it.url),
    })),
  };
}

export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
