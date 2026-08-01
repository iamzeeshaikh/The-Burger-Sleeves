# Product Content Audit

Audit of all 44 product pages before the content upgrade began.
Sources cross-checked: `src/data/products.json`, the WooCommerce CSV export,
the WordPress XML, the SQL dump, the Yoast sitemap and the crawled live pages.

## Correction to the migration report

`MIGRATION_REPORT.md` §4 stated the WooCommerce `Description` field was *"empty
for all 44 products."* That was wrong — it generalised from a single product.
**20 of 44 carry a long description** (855–1,800 words). They migrated
correctly with zero words lost; only the report line was inaccurate. It has
been corrected.

Those 20 descriptions were never visible on the live WordPress site: the
Elementor product template has no description widget, so the copy sat in the
database unrendered.

## Coverage at the start

| State | Products |
| --- | ---: |
| Long description present, 1,200–1,600 words | 8 |
| Long description present, under 1,200 words | 11 |
| Long description present, over 1,600 words | 1 |
| **No long description at all** | **24** |
| FAQs present (15 each) | 44 |
| Distinct specification header sets | 18 |

## What the existing copy got right

Contrary to expectation for bulk-generated content, the 20 existing
descriptions are genuinely differentiated:

- **88 distinct H2/H3 headings, zero repeated** across the 20 pages
- **Highest pairwise similarity 7.3%** (word-trigram Jaccard over headings and
  body paragraphs, chrome excluded)
- No near-duplicate opening paragraphs
- Each carries its own specification table and step list

The writing was kept. Rewriting it would have destroyed working content to
satisfy a process rather than a problem.

## Defects found

### 1. Layout — the copy was unreadable (fixed)

All 20 descriptions rendered inside the 407px product summary column. Matte
Finish produced a 10,291px tall ribbon of text beside an empty gallery column.
Moved to a dedicated full-width section at a 900px measure.

### 2. Every page used an identical internal-link shape

All 20 pages linked `category + sibling + sibling + sibling` — the clearest
mass-generation signal in the set, and the pattern the brief prohibits.

### 3. Anchors that named a page they did not link to

| Page | Anchor said | Actually linked to |
| --- | --- | --- |
| Matte Finish | "White Printed Burger Sleeves" | `/product/white-burger-sleeves/` |
| Matte Finish | "Black Printed Burger Sleeves" | `/product/black-burger-sleeves/` |
| Large | "large format burger sleeve options" | `/product/slider-burger-sleeves/` (the smallest size) |

Matte Finish also used destination page titles verbatim as anchor text on three
of its four links.

### 4. Other link defects

- Eco Friendly linked to `/product/kraft-burger-sleeves/` twice with different anchors
- Slider carried a leading space inside an anchor
- All internal links were absolute `https://theburgersleeves.com/...` rather than relative

### 5. Duplicate FAQs

20 of 660 FAQ questions were repeated across pages, including
*"How do I choose the right sleeve size?"* on four pages and a seven-question
die-cut set duplicated across two.

### 6. Fixed-width tables

Tables were emitted as `<table width="821">`, which overflows on mobile.

## Structural changes made

Long descriptions were converted from HTML blobs into structured blocks
(`src/data/product-content.json`). This makes tables responsive, removes raw
HTML passthrough, and — most usefully — makes the *"one contextual link per H2
section"* rule machine-checkable by `scripts/apply-content.mjs`, which refuses
to write content that breaks it.

The converter aborts if it loses a single word. That guard caught two real bugs
during conversion: a description wrapped in `<main>` that was dropped entirely,
and a paragraph with no `<p>` around it that took one of its page's links with it.

## Per-product content angles

Every product has an assigned primary keyword, search intent and a written
angle in `src/data/product-angles.json`, decided before any writing, so that
sibling pages argue about different things. Examples:

| Product | Angle that only this page takes |
| --- | --- |
| Black | Printing *onto* dark stock — opaque white underbase, foil, scuff visibility |
| White | Colour accuracy on a bright ground, and what white reveals in service |
| Kraft Brown | How unbleached fibre alters every ink laid on it |
| Gloss | Coating as ink protection, and its reflection problem under counter lighting |
| Die Cut | Dieline engineering — tabs, slots, tolerance stacking, assembly seconds |
| Grease Resistant | Strike-through vs surface shadowing, and what a coating cannot promise |
| Food Grade | Direct vs indirect food contact, and what to get in writing |

## Deliverables

| File | Contents |
| --- | --- |
| `PRODUCT_CONTENT_INVENTORY.csv` | 44 rows: keyword, intent, angle, word counts, headings, links, FAQs, related products |
| `OLD_INTERNAL_LINK_BASELINE.csv` | 351 links found before the upgrade, across data, components, pages and the live site |
| `INTERNAL_LINK_MAP.csv` | Every contextual link after the upgrade, with section and shape |
| `INTERNAL_LINK_PRESERVATION_REPORT.csv` | Preserved / updated / removed / newly added, with reasons |
| `CONTENT_DUPLICATION_REPORT.md` | Similarity matrix and repetition checks |
| `CONTENT_PROGRESS.md` | Per-product state for resuming a multi-turn run |
| `CONTENT_UPGRADE_REPORT.md` | Running totals and results |
