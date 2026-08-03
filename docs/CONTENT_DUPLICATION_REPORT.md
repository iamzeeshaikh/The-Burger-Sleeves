# Content Duplication Report

Generated 2026-08-03 from `src/data/product-content.json`.
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
| With long-form copy | 44 |
| **Missing long-form copy** | **0** |
| Below the 1,200-word target | 0 |
| Total long-form words | 57,504 |

## Similarity between pages that already have copy

| Rank | Page A | Page B | Similarity |
| ---: | --- | --- | ---: |
| 1 | White Burger Sleeves | White Printed Burger Sleeves | 3.6% |
| 2 | Cardboard Burger Sleeves | Burger Sleeves | 3.4% |
| 3 | Burger Sleeves | Custom Burger Sleeves | 2.4% |
| 4 | Recycled Burger Sleeves | Food Grade Burger Sleeves | 2.3% |
| 5 | Hamburger Sleeves | Cheeseburger Sleeves | 1.8% |
| 6 | Fast Food Sleeves Packaging | Branded Burger Sleeves | 1.8% |
| 7 | Kraft Burger Sleeves | Burger Sleeves | 1.8% |
| 8 | Small Burger Sleeves | Custom Burger Sleeves | 1.8% |
| 9 | Paper Burger Sleeves | Burger Sleeves | 1.7% |
| 10 | Paper Burger Sleeves | Fast Food Burger Sleeves | 1.6% |

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

- `product+product+product+product` — 11 pages
- `product+product+product` — 19 pages
- `category+product+product+category+product` — 1 page
- `category+product+product+product` — 3 pages
- `product+category+product` — 1 page
- `product+product+category+product` — 4 pages
- `product+product+product+category` — 2 pages
- `category+category+product+product` — 1 page
- `product+product+product+product+product` — 1 page
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

None.

## Products below the word target

None.
