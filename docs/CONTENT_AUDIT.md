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

### 7. A product whose own description contradicts its own photographs

**TBS-021 White Printed Burger Sleeves.** The migrated short description
describes the product as *white ink printed on dark kraft*. All five product
images show the opposite — coloured artwork printed on a white stock — and the
15-row specification table agrees with the images, not the description.

This was resolved before writing rather than guessed at. The long copy follows
the images and the specification table. The short description was **left
unchanged**, because the brief forbids altering short descriptions, so the page
currently carries a sentence that its own photographs contradict.

The sibling product **TBS-020 Black Printed** was checked the same way and is
unambiguous: its specification table lists a light kraft or white board printed
in one-colour black, so the name means *black ink*, not *black board*. The page
answers that ambiguity in an FAQ rather than leaving it implied.

### 8. Unsupported environmental claims across the inherited copy

`node scripts/claim-scan.mjs` finds **39 environmental, certification or
performance claims in inherited WordPress fields** that no available product
documentation supports. They sit in short descriptions, image alt text and one
product name — all fields the migration brief protects — so they are reported
rather than deleted. The strongest examples:

| Product | Claim in the inherited copy | What the product data actually says |
| --- | --- | --- |
| TBS-006 Eco Friendly | "biodegradable materials with compostable coatings that break down naturally", "decomposes in commercial composting facilities within weeks", "plant based construction", "sustainably sourced fibers" | The spec table says only "designed around responsible packaging preferences", with kraft board, recycled board and barrier coat options. Nothing supports any of it |
| TBS-005 Recycled | "post consumer recycled cardboard materials" | The spec says "built using recycled content where suitable for sleeve board". No percentage, no post-consumer split |
| TBS-003 Paper | "renewable resources that biodegrade naturally after use", "sustainable alternative" | The spec describes paperboard construction and coating options. Nothing addresses degradation |
| TBS-004 Corrugated | "superior insulation", "keep burgers warmer longer" | No thermal data exists in any supplied field |
| TBS-006 image alt | `Biodegradable Burger Sleeve` | The image is a greaseproof gingham wrap sheet. Nothing in it evidences biodegradability |

Several of these terms carry specific regulatory meaning in the US market the
site ships to, rather than being general descriptions. None of them appears in
the copy written for this project, and the scan now fails the build if one does.

### 9. Corrugated: the name, the specification and the photographs disagree

The specification for TBS-004 documents fluted construction — E flute, F flute,
single-face builds, stiffer flute grades, a print-grade outer liner. **None of
the five product photographs shows fluting.** All five show smooth printed
board. Two carry third-party branding (a White Castle clamshell and a "Burger
Brother" tray), one is a free stock mockup template, and several depict open
trays or holders rather than sleeves at all.

The page is written from the specification, naming the flute options as things
to confirm at quotation, and asserts no thickness, insulation or thermal
performance. This needs resolving by the business: either the photography does
not represent the product, or the specification does.

### 10. Paper and Cardboard are not clearly two products

Both specifications describe solid paperboard across overlapping calipers —
Paper as "paperboard sleeve structure… medium to heavy calipers", Cardboard as
"white SBS board, kraft board… 250–450 GSM". The inherited Paper copy calls
itself a "light, flexible layer", which its own specification table contradicts.

No physical distinction was invented. The two pages are differentiated by the
question each answers: Cardboard by stiffness and caliper selection, Paper by
format and contact setup. If these are genuinely one product sold under two
names, that is a catalogue decision rather than a content one.

### 11. The duplication audit had a blind spot

Until checkpoint 5 the similarity check compared only headings and paragraphs.
It reported "repeated paragraphs: 0" for the Materials cluster while those six
pages shared **11 identical table rows** (three of them across three pages) and
**7 identical sentences**, and while Cardboard ↔ Corrugated sat at **11.8 %**
similar — the highest pair on the site, invisible to the report meant to catch
exactly that.

List items and table rows are now part of the comparison corpus, and repeated
rows and items are reported as their own metrics. The measured sitewide maximum
moved from a reported 7.3 % to a true 11.8 %, and after the Materials rewrite it
stands at 3.6 %.

## Client decisions still open

None of these are being changed unilaterally, because each one alters something
the brief protects or something only the business can confirm.

| # | Item | Why it needs a decision | Suggested fix |
| --- | --- | --- | --- |
| 1 | TBS-021 short description says "white ink on dark kraft"; images and spec table show colour on white stock | Short descriptions are protected by the brief, but this one misdescribes the product to a buyer | Confirm which product is actually sold, then correct the short description or the images |
| 2 | Brand red `#FF0000` fails WCAG AA at 3.998:1 | Changing it alters the visual match with the live site | `#ee0000` gives 4.53:1 and is visually indistinguishable at this scale |
| 3 | TBS-011 Takeaway and TBS-012 Disposable share one `metaDescription` | Metadata is frozen by the migration brief | Rewrite one of the two when the Usage group is written |
| 4 | TBS-002, TBS-012 and TBS-020 have no photography | A lookalike substitute would misrepresent the product | Supply real photographs; placeholder shown until then |
| 5 | `/about-us/` repeats the same three paragraphs in two panels | The repetition is visible on the live site and was preserved deliberately | Delete the duplicate panel on approval |
| 6 | 39 unsupported environmental claims in short descriptions and alt text (defect 8) | Several carry regulatory meaning in the US market; short descriptions are protected by the brief | Either obtain documentation, or rewrite the affected short descriptions and alt text |
| 7 | Corrugated photography shows no fluting and includes third-party brands and a mockup template (defect 9) | Either the images or the specification misrepresents the product | Supply photographs of the actual construction, or correct the specification |
| 8 | Paper and Cardboard may be the same product under two names (defect 10) | Their specifications overlap materially | Confirm whether these are two distinct offerings, and if not, decide which URL survives |
| 9 | TBS-005 "Speckled Recycled" image shows foil-lined bags, not recycled sleeves | The foil lining would itself complicate fibre recovery | Replace with photography of the product being sold |

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
