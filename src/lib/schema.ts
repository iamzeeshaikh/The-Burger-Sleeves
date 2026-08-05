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
 * Product schema for Google Product snippets / Merchant listing snippets.
 *
 *  - Offers: the business quotes per enquiry, so each product carries an
 *    AggregateOffer describing the wholesale per-unit range. The $0.50 high
 *    anchor comes from the site's own WooCommerce catalogue price; the $0.10
 *    low reflects bulk-tier wholesale pricing (MOQ 100 units).
 *  - Shipping: the site advertises free shipping across the USA.
 *  - Returns: mirrors the published Refund and Returns Policy (7-day window
 *    for stock items, customer pays return shipping).
 *  - No `aggregateRating` / `review`: the site has no genuine review or
 *    testimonial content anywhere (every product page shipped "Reviews (0)"),
 *    so rating markup would be fabricated data.
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
    offers: {
      '@type': 'AggregateOffer',
      url: abs(product.url),
      priceCurrency: 'USD',
      lowPrice: '0.10',
      highPrice: '0.50',
      priceValidUntil: '2027-08-04',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${SITE.origin}/#organization` },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 14,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 7,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnShippingFees',
      },
    },
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
