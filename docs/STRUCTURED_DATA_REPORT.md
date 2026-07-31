# Structured Data Report

Generated from the production build on 2026-07-31.

## Summary

| Check | Result |
| --- | --- |
| JSON-LD blocks emitted | 65 (exactly one per page) |
| Blocks that failed `JSON.parse` | **0** |
| Pages with a duplicated `@type` | **0** |
| FAQ questions in schema not present in the visible page | **0** |

## Node counts

| `@type` | Pages |
| --- | ---: |
| Organization | 65 |
| WebSite | 65 |
| BreadcrumbList | 64 |
| FAQPage | 52 |
| Product | 44 |
| ItemList | 13 |

## What each page type emits

| Page type | Graph |
| --- | --- |
| Homepage | Organization, WebSite, FAQPage (the 10 visible accordion entries) |
| Product (44) | Organization, WebSite, BreadcrumbList, Product, FAQPage (the 15 visible FAQs) |
| Product category (7) | Organization, WebSite, BreadcrumbList, ItemList, FAQPage |
| Shop / brand archives (6) | Organization, WebSite, BreadcrumbList, ItemList |
| About, Contact, Get Free Quote, policies | Organization, WebSite, BreadcrumbList |

## Deliberate differences from the live WordPress schema

The live site's structured-data plugin emitted claims the page itself contradicts.
Those were **not** carried across.

### 1. Fabricated rating and review — removed

Every live product page emits:

```json
"aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": 1 },
"review": [{ "@type": "Review", "author": { "@type": "Person", "name": "webmaster" }, … }]
```

while the same page renders **"There are no reviews yet."** There are zero
review records in the database for any of the 44 products. Publishing this is
review-snippet spam and is grounds for a manual action. Both properties are
omitted from the rebuilt Product schema.

### 2. Invented price — removed

The live `Offer` carries `"price": "0.5"`, `"priceCurrency": "USD"`. All 44
products share that same `$0.50` value, the product page never displays a
price, and WooCommerce has no payment gateway, no orders and no working
checkout. The rebuilt Product schema therefore ships **no `offers` node** —
name, SKU, brand, description, category and images only, all of which match
what the page visibly says.

If the business later publishes genuine per-product pricing and a working
checkout, add the `offers` node back in `src/lib/schema.ts` — the function is
commented with exactly why it is absent.

### 3. Additions

| Node | Why |
| --- | --- |
| `BreadcrumbList` | The live site renders a visible breadcrumb on every page but never marked it up. |
| `FAQPage` | The live site renders 15 visible FAQs per product and 10 site-wide, none marked up. Every question in the schema is asserted by the validation suite to be present in the rendered HTML. |
| `WebSite` | Standard site-level node; the live output had Organization only. |
| `Organization.telephone / email / address` | Real, visible contact details already published in the header and footer. |

## Validation

`npm run validate` fails the build on any of: unparseable JSON-LD, a duplicated
`Product` / `FAQPage` / `BreadcrumbList` on one page, a `Product` node carrying
`aggregateRating`, `review` or `offers.price`, a `Product` missing name / SKU /
brand / description, or an `FAQPage` question that does not appear in the
page's visible text.
