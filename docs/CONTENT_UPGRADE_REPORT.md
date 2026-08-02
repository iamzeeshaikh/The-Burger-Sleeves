# Content Upgrade Report

Running report. Updated at each group checkpoint.
Status: **5 of 7 groups complete (32 of 44 products).**
See `CONTENT_PROGRESS.md` for per-product state.

## Totals so far

| Metric | Value |
| --- | ---: |
| Products audited | 44 / 44 |
| Products with long-form copy now | 32 / 44 |
| Products upgraded in this run | 32 |
| Products still needing copy written from scratch | 12 |
| Upgraded pages inside the 1,200–1,600 word target | 31 / 32 |
| Total long-form words on site | 41,736 |
| Total FAQs on site | 576 |
| Duplicate FAQ questions sitewide | 0 |
| Highest page-pair similarity | 3.6 % |
| Unqualified claims in authored copy | 0 |

### Internal links

Measured against `OLD_INTERNAL_LINK_BASELINE.csv`, the frozen pre-upgrade
snapshot taken at commit `57aa049`. `scripts/link-report.mjs` regenerates the
other two CSVs from it and from current content.

| Outcome | Count |
| --- | ---: |
| Existing links kept with the anchor rewritten | 15 |
| Existing contextual links preserved unchanged | 5 |
| Existing links removed (sentence no longer exists after rewrite) | 60 |
| New contextual links added | 90 |
| Contextual links on the site now | 110 across 32 pages |
| Broken internal links | 0 |
| Self-links | 0 |
| Reused anchors sitewide | 0 |
| Sections carrying more than one contextual link | 0 |

The "preserved" figure fell from 28 to 5 this checkpoint, which looks alarming
and is not. Those 23 links were on Materials pages that simply had not been
rewritten yet, so they counted as preserved by default. Rewriting the group
reclassified them properly. As the remaining groups land, this number will keep
falling toward zero and the "newly added" count will keep rising.

## Group 5 — Materials (6) — complete

| Product | Words (was → now) | FAQs | Links | Work done |
| --- | --- | ---: | ---: | --- |
| Kraft Burger Sleeves | 855 → 1,516 | 12 | 4 | rewritten as a stock decision |
| Cardboard Burger Sleeves | 927 → 1,397 | 12 | 4 | rewritten as a stiffness decision |
| Paper Burger Sleeves | 1,198 → 1,409 | 12 | 3 | **restructured**; both step lists preserved |
| Corrugated Burger Sleeves | 1,005 → 1,395 | 12 | 3 | rewritten; construction flagged as unverified |
| Recycled Burger Sleeves | 1,096 → 1,353 | 12 | 4 | rewritten around evidence rather than claims |
| Eco Friendly Burger Sleeves | 928 → 1,348 | 12 | 3 | rewritten as a selection framework |

Group totals: **8,418 words, 72 FAQs, 21 contextual links.**

### The inherited copy was mostly not about materials

The brief said to preserve accurate inherited content. Measured first, most of
it did not qualify. Across the six pages the copy was overwhelmingly generic
wrap-station routine — folding, bagging, stacking, staff training — with tables
whose cells read `Training | One fold sequence | Repeatable output | Shared
teams | Reliable`. It also repeated itself: **11 table rows appeared on more
than one page** and **7 sentences appeared twice**.

So the filler was replaced and the genuinely material-specific content kept.
Paper kept the most, including both of its step-by-step lists, which are
concrete and useful; only its templated headings, its duplicated tables and its
"lightweight flexible paper" framing changed. Its five application steps were
reworded because they collided with Printed Burger Sleeves, a completed page.

### Construction verification — findings

Four questions were put to the data before any writing.

- **Is Corrugated genuinely fluted? Not verifiable.** The specification
  documents E flute, F flute, single-face and stiffer grades. None of the five
  product photographs shows fluting — all show smooth printed board, two
  carrying third-party branding and one a stock mockup template. The page names
  the flute options as things to confirm at quotation and asserts no thickness,
  insulation or thermal performance.
- **How does Paper differ from Cardboard? Materially, it may not.** Both
  specifications describe solid paperboard across overlapping calipers. No
  physical distinction was invented; the pages are differentiated by the
  question each answers.
- **Is the recycled content verified? No.** No percentage and no post-consumer
  split is documented, so neither is claimed.
- **What does Eco Friendly offer? Nothing environmental is documented.** The
  page is written as a material-selection and waste-reduction framework.

No GSM, caliper, flute, coating, recycling or thermal figure on these pages was
invented. Every number comes from the products' own specification tables.

## Environmental claims

A new scan, `scripts/claim-scan.mjs`, checks every customer-facing string
against 23 claim patterns and separates two cases deliberately: copy this
project authored is **blocked** on any unqualified claim, while inherited
WordPress fields are **reported for a human decision** rather than deleted,
because removing a claim the business can actually document would be as wrong as
keeping one it cannot. Sentences that deny a claim, questions, and a product
being called by its own name are all excluded.

| Severity | Count | Meaning |
| --- | ---: | --- |
| BLOCK | **0** | no unqualified claim in authored copy |
| REVIEW | 39 | inherited claims needing documentation or rewriting |
| QUALIFIED | 14 | claim wording present but already conditional |

Two blocking issues were fixed to reach zero. Four table cells on Matte Finish —
a completed Group 1 page — read `Recyclable paper` and `Recyclable stock` as
bare assertions and now read `Paper-based stock` and `Paper-based board`. The
Materials pages were written qualified from the start.

The 39 review items are set out in `CONTENT_AUDIT.md` § 8. The strongest are on
Eco Friendly, whose short description claims compostable coatings and material
that "decomposes in commercial composting facilities within weeks" while its
specification says only "designed around responsible packaging preferences".

## The duplication audit had a blind spot

The similarity check compared only headings and paragraphs. It reported
"repeated paragraphs: 0" for the Materials cluster while those pages shared 11
identical table rows and 7 identical sentences, and while Cardboard ↔ Corrugated
sat at 11.8 % — the highest pair on the site, invisible to the report meant to
find it.

List items and table rows are now in the comparison corpus and are reported as
their own metrics.

| Metric | Before the fix (reported) | True value | After the Materials rewrite |
| --- | ---: | ---: | ---: |
| Highest pair similarity | 7.3 % | 11.8 % | **3.6 %** |
| Repeated table rows | not measured | 11 | **0** |
| Repeated list items | not measured | 9 | **0** |
| Templated link shape `category+product+product+product` | 8 pages | 8 pages | **2 pages** |

## Incoming-link check

41 → 42 destinations checked against the frozen baseline. **10 flagged above the
30 % reduction threshold**, all inspected. Breaking the closed Materials cluster
— where all six pages linked only to each other and up to their own category —
was the cause, and three destinations were given links back rather than
explained away:

| Destination | Baseline → after rewrite → now | Action |
| --- | --- | --- |
| `/product/paper-burger-sleeves/` | 4 → 0 → **1** | restored from Cardboard, where the boundary between the two is drawn |
| `/product-category/burger-sleeves-materials/` | 6 → 1 → **2** | restored from Kraft |
| `/product/food-grade-burger-sleeves/` | 0 → **1** | given an early link from Recycled, ahead of its own group |

The remaining flagged destinations all retain at least one contextual link and
are allocated to Groups 6–7, which add 12 pages carrying roughly 36 links. **No
page that has upgraded copy is left with zero contextual incoming links.** The
eight products still at zero are all unwritten Group 6 and 7 pages.

## Validation at this checkpoint

| Check | Result |
| --- | --- |
| `npm run build` | pass — 67 pages, 766 images |
| `npx astro check` | 0 errors, 0 warnings |
| `npm run validate` (30+ SEO/schema/link checks) | all passed |
| Indexable URLs | 61, unchanged |
| Editorial rule gate (`apply-content.mjs`) | passed for all 30 authored products |
| Unsupported claim scan | BLOCK 0 |
| Highest page-pair similarity | 3.6 % |
| Repeated headings / paragraphs / list items / table rows | 0 / 0 / 0 / 0 |
| Reused anchors | 0 |
| Near-duplicate introductions | 0 |
| Templated heading shapes | 0 |
| Duplicate FAQ questions | 0 |
| Duplicate `metaTitle` / `name` / `slug` / `url` | 0 |
| Duplicate `metaDescription` | 1 pair (TBS-011 / TBS-012, both unwritten) |
| FAQ schema matches visible FAQs after entity decoding | pass on all 44 |
| Orphan pages | 0 |
| Broken links / self-links | 0 / 0 |

## Rule violations the gate caught in my own drafts

Now 13 refusals across five groups. This checkpoint added four: the banned word
"discover" on Paper, Corrugated and Recycled, and Eco Friendly submitted with 2
contextual links where 3 are required.

## Unresolved

- 12 products still have no long-form copy
- 10 destinations remain below 70 % of their baseline incoming links, allocated
  to Groups 6–7
- 39 inherited environmental claims await a client decision
- Corrugated construction unverified; Paper and Cardboard may be one product
- TBS-011 and TBS-012 share a `metaDescription`; owned by Group 6
- TBS-021's short description contradicts its own images
- Brand red `#FF0000` still fails WCAG AA contrast at 3.998:1
- TBS-002, TBS-012 and TBS-020 have no product photography

## Next

**Group 6 — Usage (8):** TBS-007 Burger Sleeves, TBS-008 Hamburger, TBS-009
Cheeseburger, TBS-010 Fast Food Burger, TBS-011 Takeaway, TBS-012 Disposable,
TBS-013 Grease Resistant, TBS-014 Food Grade. All eight need writing from
scratch. This is the group with the sharpest cannibalization risk in the
catalogue — several are near-synonyms of the site's head term — and it owns the
TBS-011 / TBS-012 duplicate description plus most of the outstanding
incoming-link allocations.
