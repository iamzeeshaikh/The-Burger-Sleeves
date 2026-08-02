# Content Duplication Report

Generated 2026-08-02 from `src/data/product-content.json`.
Similarity is Jaccard overlap of word trigrams across everything a reader can read
in the long description — headings, body paragraphs, list items and table rows.
Shared chrome (header, nav, footer, breadcrumbs, spec-table labels, quote form,
pricing sentence) is excluded because it cannot vary between pages.

List items and table rows were added to this corpus at checkpoint 5. Comparing
headings and paragraphs alone had hidden 11 identical table rows and 7 identical
checklist steps shared across the Materials pages while this report still said
"repeated paragraphs: 0".

## Coverage

| Metric | Value |
| --- | ---: |
| Products | 44 |
| With long-form copy | 32 |
| **Missing long-form copy** | **12** |
| Below the 1,200-word target | 0 |
| Total long-form words | 41,736 |

## Similarity between pages that already have copy

| Rank | Page A | Page B | Similarity |
| ---: | --- | --- | ---: |
| 1 | White Burger Sleeves | White Printed Burger Sleeves | 3.6% |
| 2 | Small Burger Sleeves | Custom Burger Sleeves | 1.8% |
| 3 | Kraft Burger Sleeves | Kraft Brown Burger Sleeves | 1.6% |
| 4 | Logo Printed Burger Sleeves | Promotional Burger Sleeves | 1.5% |
| 5 | Kraft Burger Sleeves | Cardboard Burger Sleeves | 1.5% |
| 6 | Cardboard Burger Sleeves | Eco Friendly Burger Sleeves | 1.4% |
| 7 | Double Patty Burger Sleeves | Custom Burger Sleeves | 1.4% |
| 8 | Kraft Burger Sleeves | Recycled Burger Sleeves | 1.4% |
| 9 | Jumbo Burger Sleeves | Double Patty Burger Sleeves | 1.4% |
| 10 | Kraft Burger Sleeves | Paper Burger Sleeves | 1.3% |

Highest pair is **3.6%**. No pair is close to the level at which shared wording becomes visible to a reader.

## Repetition checks

| Check | Count | Verdict |
| --- | ---: | --- |
| Headings used on more than one page | 0 | clean |
| Paragraphs appearing on more than one page | 0 | clean |
| List items appearing on more than one page | 0 | clean |
| Table rows appearing on more than one page | 0 | clean |
| Anchor texts reused across pages | 0 | clean |
| FAQ questions asked on more than one page | 0 | clean |
| Near-duplicate opening paragraphs | 0 | clean |
| **Heading shapes reused once product nouns are removed** | **0** | clean |

### Internal-link shape

Every page with copy uses the identical link pattern, which is the clearest
mass-generation signal in the current set:

- `category+product+product+product` — 3 pages
- `product+product+product+product` — 6 pages
- `product+product+product` — 16 pages
- `product+category+product` — 2 pages
- `product+product+category+product` — 2 pages
- `product+product+product+category` — 2 pages
- `category+product+category+product` — 1 page

### Templated heading shapes

Headings with the product noun stripped out. A shape appearing on more than one
page means the sentence was reused with only the product name changed — the
signal plain word-overlap similarity cannot see.

None.

### Repeated list items and table rows

None.

### Repeated FAQ questions

None.

### Reused anchor text

None.

## Products with no long-form copy

- TBS-041 — Burger and Fries Sleeves (`/product/burger-and-fries-sleeves/`)
- TBS-042 — Burger Wrapping Sleeves (`/product/burger-wrapping-sleeves/`)
- TBS-043 — Burger Sandwich Sleeves (`/product/burger-sandwich-sleeves/`)
- TBS-044 — Fast Food Sleeves Packaging (`/product/fast-food-sleeves-packaging/`)
- TBS-007 — Burger Sleeves (`/product/burger-sleeves/`)
- TBS-008 — Hamburger Sleeves (`/product/hamburger-sleeves/`)
- TBS-009 — Cheeseburger Sleeves (`/product/cheeseburger-sleeves/`)
- TBS-010 — Fast Food Burger Sleeves (`/product/fast-food-burger-sleeves/`)
- TBS-011 — Takeaway Burger Sleeves (`/product/takeaway-burger-sleeves/`)
- TBS-012 — Disposable Burger Sleeves (`/product/disposable-burger-sleeves/`)
- TBS-013 — Grease Resistant Burger Sleeves (`/product/grease-resistant-burger-sleeves/`)
- TBS-014 — Food Grade Burger Sleeves (`/product/food-grade-burger-sleeves/`)

## Products below the word target

None.
