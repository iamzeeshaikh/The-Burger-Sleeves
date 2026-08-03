# Content Upgrade Report

Running report. Updated at each group checkpoint.
Status: **All seven groups complete — 44 of 44 products.**
See `CONTENT_PROGRESS.md` for per-product state.

## Totals so far

| Metric | Value |
| --- | ---: |
| Products audited | 44 / 44 |
| Products with long-form copy now | **44 / 44** |
| Products upgraded in this run | 44 |
| Products still needing copy written from scratch | 0 |
| Upgraded pages inside the 1,200–1,600 word target | 43 / 44 |
| Total long-form words on site | 57,504 |
| Total FAQs on site | 540 |
| Duplicate FAQ questions sitewide | 0 |
| Highest page-pair similarity | 3.6 % sitewide; 1.23 % within Group 7 |
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
| New contextual links added | 138 |
| Contextual links on the site now | 158 across 44 pages |
| Broken internal links | 0 |
| Self-links | 0 |
| Reused anchors sitewide | 0 |
| Sections carrying more than one contextual link | 0 |

The "preserved" figure fell from 28 to 5 this checkpoint, which looks alarming
and is not. Those 23 links were on Materials pages that simply had not been
rewritten yet, so they counted as preserved by default. Rewriting the group
reclassified them properly. As the remaining groups land, this number will keep
falling toward zero and the "newly added" count will keep rising.



## Group 7 — Combo (4) — complete

All four written from scratch; none had long-form copy and none had a single
incoming contextual link.

| SKU | Product | URL | Words | FAQs | Out | In |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| TBS-041 | Burger and Fries Sleeves | `/product/burger-and-fries-sleeves/` | 1,384 | 11 | 4 | 2 |
| TBS-042 | Burger Wrapping Sleeves | `/product/burger-wrapping-sleeves/` | 1,242 | 12 | 3 | 2 |
| TBS-043 | Burger Sandwich Sleeves | `/product/burger-sandwich-sleeves/` | 1,268 | 12 | 4 | 2 |
| TBS-044 | Fast Food Sleeves Packaging | `/product/fast-food-sleeves-packaging/` | 1,465 | 13 | 5 | 2 |

Group totals: **5,359 words, 48 FAQs, 16 contextual links.**

### Verification before writing — one product failed it

- **TBS-041 has no verifiable combined structure.** Its short description claims
  the design "holds both burgers and fries in one compact sleeve" and its spec
  row says "combined sleeve design". All four product images show a single-burger
  sleeve or wrap; one is a foil bag holding one burger with crisps loose on the
  tray beside it. No compartment, divider or fry pocket appears anywhere. The
  page is written as a sleeve used **within** a combo order — workflow, bag
  order, salt and oil crossover, portion pairing — and says explicitly in its
  first paragraph that there is no fry compartment. Flagged as defect 14.
- **TBS-042 verified as an outer sleeve, not wrapping paper.** Its spec reads
  "designed to sit over inner wrap without slipping" and "sized by wrapped width
  and height with slide on clearance". The page owns the two-layer relationship.
- **TBS-043 verified as multi-format**, covering burgers and chicken sandwiches
  in slide-on and wrap-around styles.
- **TBS-044 verified as the range product** — the longest specification in the
  catalogue at 10 rows, and the only one listing straight wrap / open-end /
  pocket styles, custom width-height-depth, 250–400 GSM and add-ons of cutouts,
  QR print and batch coding.

### Boundaries

| Page | Owns | Does not target |
| --- | --- | --- |
| Burger and Fries | the combo-order workflow: pairing two items, crossover, bag order, tier pairing | any compartment or carrier structure |
| Burger Wrapping | the two-layer system: seam control, slide-on clearance, applying without crushing | loose wrapping paper; menu formats |
| Burger Sandwich | format compatibility: round buns against long rolls, bread behaviour, fit tolerance | generic food packaging; combo orders |
| Fast Food Sleeves Packaging | the range as a system: how many sizes, menu coding, storage, reordering, multi-site | the homepage pitch; setting-specific pages |

Highest within-group pair similarity **1.23 %**. TBS-044 measured against the
homepage content: **0.08 %**, so the range page does not restate the homepage.
No repeated headings; every page carries its exact keyword in one H2.

### Closing the incoming-link debt

Every one of the six outstanding destinations received a link from this group:
Event and Large from TBS-041, Paper from TBS-042, and the Materials category,
Special Uses category and Recycled from TBS-044.

Four targeted single-sentence edits were made to completed pages to give the
Combo products their incoming links — to Grease Resistant, Cafe, Fast Food
Burger Sleeves and Medium. A fifth was attempted on Event Burger Sleeves and
**rejected by the editorial gate as a duplicate destination**: Event already
linked to Burger and Fries from "Counting Guests, Not Orders". No existing link
was displaced and no completed page was rewritten.

**Zero products remain with no incoming contextual link**, down from 3 before
this group and 12 at the Group 4 checkpoint.

Two destinations still sit below 70 % of baseline: the Materials and Special
Uses categories, both at 4 incoming against a baseline of 6. Those baseline
links were the closed-cluster pattern in which every page linked up to its own
parent category. Both hubs also receive navigation and breadcrumb links from
every page on the site, so the remaining gap is not worth a forced sentence, and
the decision is recorded in the preservation report rather than papered over.

## Group 6 — Usage (8) — complete

All eight were written from scratch; none had any long-form copy.

| SKU | Product | URL | Words | FAQs | Links |
| --- | --- | --- | ---: | ---: | ---: |
| TBS-007 | Burger Sleeves | `/product/burger-sleeves/` | 1,225 | 12 | 4 |
| TBS-008 | Hamburger Sleeves | `/product/hamburger-sleeves/` | 1,257 | 12 | 3 |
| TBS-009 | Cheeseburger Sleeves | `/product/cheeseburger-sleeves/` | 1,203 | 12 | 4 |
| TBS-010 | Fast Food Burger Sleeves | `/product/fast-food-burger-sleeves/` | 1,308 | 12 | 3 |
| TBS-011 | Takeaway Burger Sleeves | `/product/takeaway-burger-sleeves/` | 1,204 | 12 | 3 |
| TBS-012 | Disposable Burger Sleeves | `/product/disposable-burger-sleeves/` | 1,313 | 12 | 3 |
| TBS-013 | Grease Resistant Burger Sleeves | `/product/grease-resistant-burger-sleeves/` | 1,340 | 12 | 4 |
| TBS-014 | Food Grade Burger Sleeves | `/product/food-grade-burger-sleeves/` | 1,331 | 12 | 3 |

Group totals: **10,181 words, 96 FAQs, 27 contextual links.**

### Cannibalization — the sharpest group in the catalogue

Several of these are near-synonyms of the site's head term, so each page was
given one question it owns and forbidden from answering another's. The
specification tables made the split available: TBS-007 to TBS-010 share a
`board / finish / use` shape and describe the same sleeve against different
burgers or volumes; TBS-011 to TBS-014 share a `Feature | Details | Material |
Size Range | Printing | Notes` shape and describe service models and material
properties.

| Page | Owns | Does not target |
| --- | --- | --- |
| Burger Sleeves | what a sleeve is and the four decisions behind any order | throughput, specific burger types |
| Hamburger | the plain build's dimensional predictability and a close fit | moisture, cheese, volume |
| Cheeseburger | melt spread, wrap adhesion and steam softening | generic sizing, barrier engineering |
| Fast Food | seconds per order, dispensing, stacking, mixed-size lines | what a sleeve is; food contact |
| Takeaway | the journey after handoff, fold style, order-marking space | single-use economics, hygiene |
| Disposable | absorbent paper, pull-from-stack dispensing, cost per unit | barrier engineering, carry |
| Grease Resistant | the low-absorb inner liner, no inner print, fold integrity | disposal, cost per unit |
| Food Grade | ink migration, ink placement, odour, what the term settles | grease performance, speed |

**Highest within-group pair similarity: 1.88 %** (Hamburger ↔ Cheeseburger). No
repeated headings inside the group. Every page carries its exact keyword in one
H2 and only one.

The two hardest pairs were handled explicitly. **Disposable and Grease
Resistant are the absorbent and barrier answers to the same problem** — one lets
paper take up surface oil, the other stops oil crossing a liner — and each page
names the other as the alternative rather than restating it. **Hamburger and
Cheeseburger** split on dimension against moisture.

### TBS-011 / TBS-012 differentiation

These two shared a meta description, and TBS-012's was plainly wrong: it
described takeaway sleeves on the disposable page. Now differentiated on intent,
meta description, H1, section structure, table, FAQs, internal links and related
products — the full comparison is in `CONTENT_PROGRESS.md`. Duplicate meta
descriptions across all 44 products: **0**.

This is the only meta description changed in the project, and only because the
field named a different product than the page it sat on.

### A second unsupported certification claim

TBS-014's inherited short description claims the board *"meets strict FDA
regulations"* and uses *"certified safe materials"*. Nothing in the supplied data
supports either; the specification says only "food-safe paper stock", "approved
ink sets" and "low-migration options". The claim is flagged in `CONTENT_AUDIT.md`
§ 13 rather than rewritten, and the page copy states the opposite — that "food
grade" is a category rather than a certification and that suitability must be
confirmed in writing for the finished construction.

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

47 destinations checked against the frozen baseline at this checkpoint, with
**6 flagged** above the 30 % reduction threshold — down from 10 — all inspected.
Link concentration: **0 destinations** absorb more than 8 % of the 138
contextual links, so nothing reads as an artificially boosted target.

At the previous checkpoint the picture was: Breaking the closed Materials cluster
— where all six pages linked only to each other and up to their own category —
was the cause, and three destinations were given links back rather than
explained away:

| Destination | Baseline → after rewrite → now | Action |
| --- | --- | --- |
| `/product/paper-burger-sleeves/` | 4 → 0 → **1** | restored from Cardboard, where the boundary between the two is drawn |
| `/product-category/burger-sleeves-materials/` | 6 → 1 → **2** | restored from Kraft |
| `/product/food-grade-burger-sleeves/` | 0 → **1** | given an early link from Recycled, ahead of its own group |

Group 6 then paid down most of that debt. The materials category went 2 → 3,
special uses 2 → 3, large 2 → 3, street food back to its baseline 3, and Fast
Food, Hamburger, Cheeseburger, Disposable and Food Grade all received their
first contextual links from sibling pages inside the group.

Six destinations remain below 70 % of baseline — the materials and special-uses
categories, Event, Large, Paper and Recycled — and each still carries 2 or 3
incoming links. They are allocated to Group 7, which adds 4 pages carrying
roughly 14 links. **No page that has upgraded copy is left with zero contextual
incoming links.** The three products still at zero are all unwritten Combo
pages.

## Validation at this checkpoint

| Check | Result |
| --- | --- |
| `npm run build` | pass — 67 pages, 766 images |
| `npx astro check` | 0 errors, 0 warnings |
| `npm run validate` (30+ SEO/schema/link checks) | all passed |
| Indexable URLs | 61, unchanged |
| Editorial rule gate (`apply-content.mjs`) | passed for all 42 authored products |
| Unsupported claim scan | BLOCK 0 |
| Highest page-pair similarity | 3.6 % sitewide; 1.23 % within Group 7 |
| Repeated headings / paragraphs / list items / table rows | 0 / 0 / 0 / 0 |
| Reused anchors | 0 |
| Near-duplicate introductions | 0 |
| Templated heading shapes | 0 |
| Duplicate FAQ questions | 0 |
| Duplicate `metaTitle` / `name` / `slug` / `url` | 0 |
| Duplicate `metaDescription` | **0** — the TBS-011 / TBS-012 pair was resolved |
| FAQ schema matches visible FAQs after entity decoding | pass on all 44 |
| Orphan pages | 0 |
| Products with zero incoming contextual links | **0** |
| Link concentration above 8 % of all links | 0 destinations |
| Broken links / self-links | 0 / 0 |

## Rule violations the gate caught in my own drafts

Now 34 refusals across seven groups. This final group added ten: seven anchors
already used by pages written in Groups 5 and 6, two links in one section on
Fast Food Sleeves Packaging, and a duplicate destination on Event Burger
Sleeves — that last one usefully, since it revealed the planned targeted edit
was unnecessary because the link already existed.

Across the whole project the gate caught banned words, reused anchors,
duplicated FAQs, self-links, over-long FAQ answers, link-density breaches and
under-linked pages before any of them reached the build. Not one was found by
reading the copy back.

## Unresolved

- 2 category hubs sit below 70 % of their baseline incoming contextual links,
  by decision rather than omission — see the Group 7 section
- 39 inherited environmental claims await a client decision
- Corrugated construction unverified; Paper and Cardboard may be one product
- TBS-014's short description claims FDA approval nothing supports
- TBS-021's short description contradicts its own images
- TBS-012 Disposable has no product photography at all
- Brand red `#FF0000` still fails WCAG AA contrast at 3.998:1
- TBS-002, TBS-012 and TBS-020 have no product photography

## Next

The content upgrade is complete at 44 of 44 products. What remains is a final
sitewide audit and deployment preparation, neither of which has been started,
and **nothing has been deployed.**

Before any deploy, thirteen client decisions are open in `CONTENT_AUDIT.md`. Four
of them are claims the site currently makes that its own data does not support —
the FDA statement on Food Grade, the compostability and biodegradability
language on Eco Friendly, the combined-carrier claim on Burger and Fries, and
the white-ink-on-dark-kraft description on White Printed. Each sits in a short
description or alt text that the migration brief protects, so each was flagged
rather than rewritten. They are worth resolving before the pages are published
rather than after.
