# Content Duplication Report

Generated 2026-08-01 from `src/data/product-content.json`.
Similarity is Jaccard overlap of word trigrams across headings and body paragraphs
only — shared chrome (header, nav, footer, breadcrumbs, spec-table labels, quote
form, pricing sentence) is excluded because it cannot vary between pages.

## Coverage

| Metric | Value |
| --- | ---: |
| Products | 44 |
| With long-form copy | 25 |
| **Missing long-form copy** | **19** |
| Below the 1,200-word target | 10 |
| Total long-form words | 29,133 |

## Similarity between pages that already have copy

| Rank | Page A | Page B | Similarity |
| ---: | --- | --- | ---: |
| 1 | Cardboard Burger Sleeves | Corrugated Burger Sleeves | 7.3% |
| 2 | Kraft Burger Sleeves | Recycled Burger Sleeves | 6.3% |
| 3 | Cardboard Burger Sleeves | Paper Burger Sleeves | 6.1% |
| 4 | Kraft Burger Sleeves | Eco Friendly Burger Sleeves | 5.2% |
| 5 | Paper Burger Sleeves | Corrugated Burger Sleeves | 5.1% |
| 6 | Recycled Burger Sleeves | Eco Friendly Burger Sleeves | 4.0% |
| 7 | Kraft Burger Sleeves | Cardboard Burger Sleeves | 3.9% |
| 8 | Kraft Burger Sleeves | Corrugated Burger Sleeves | 3.7% |
| 9 | Corrugated Burger Sleeves | Eco Friendly Burger Sleeves | 3.7% |
| 10 | Paper Burger Sleeves | Recycled Burger Sleeves | 3.6% |

Highest pair is **7.3%**. Nothing in the existing set
reads as spun or templated at the paragraph level.

## Repetition checks

| Check | Count | Verdict |
| --- | ---: | --- |
| Headings used on more than one page | 0 | clean |
| Paragraphs appearing on more than one page | 0 | clean |
| Anchor texts reused across pages | 0 | clean |
| FAQ questions asked on more than one page | 0 | clean |
| Near-duplicate opening paragraphs | 0 | clean |
| **Heading shapes reused once product nouns are removed** | **0** | clean |

### Internal-link shape

Every page with copy uses the identical link pattern, which is the clearest
mass-generation signal in the current set:

- `category+product+product+product` — 8 pages
- `product+product+product` — 14 pages
- `product+category+product` — 1 page
- `product+product+category` — 2 pages

### Templated heading shapes

Headings with the product noun stripped out. A shape appearing on more than one
page means the sentence was reused with only the product name changed — the
signal plain word-overlap similarity cannot see.

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
- TBS-015 — Custom Burger Sleeves (`/product/custom-burger-sleeves/`)
- TBS-017 — Branded Burger Sleeves (`/product/branded-burger-sleeves/`)
- TBS-018 — Logo Printed Burger Sleeves (`/product/logo-printed-burger-sleeves/`)
- TBS-019 — Full Color Burger Sleeves (`/product/full-color-burger-sleeves/`)
- TBS-020 — Black Printed Burger Sleeves (`/product/black-printed-burger-sleeves/`)
- TBS-021 — White Printed Burger Sleeves (`/product/white-printed-burger-sleeves/`)
- TBS-022 — Minimal Design Burger Sleeves (`/product/minimal-design-burger-sleeves/`)

## Products below the word target

- TBS-001 — Kraft Burger Sleeves: 855 words
- TBS-002 — Cardboard Burger Sleeves: 927 words
- TBS-003 — Paper Burger Sleeves: 1198 words
- TBS-004 — Corrugated Burger Sleeves: 1005 words
- TBS-005 — Recycled Burger Sleeves: 1096 words
- TBS-006 — Eco Friendly Burger Sleeves: 932 words
- TBS-029 — Kraft Brown Burger Sleeves: 1012 words
- TBS-030 — White Burger Sleeves: 886 words
- TBS-033 — Gloss Finish Burger Sleeves: 815 words
- TBS-034 — Die Cut Burger Sleeves: 1017 words
