# Product Content Upgrade — Progress

State file for a multi-turn job. **On resuming: read this first, then continue
from the first product not marked `completed`.** Do not redo completed products.

Authored copy lives in `scripts/content/*.mjs` and is merged by
`node scripts/apply-content.mjs`, which refuses to write if any editorial rule
fails. Never hand-edit `src/data/product-content.json` for authored groups —
edit the group file and re-run the merge.

Last updated: 2026-08-02 · Styles, Sizes, Special Uses, Customized, Materials and Usage complete (40 of 44 products).

## Status legend

`pending` not started · `in-progress` partially written · `completed` written and merged ·
`validated` passed the sitewide audit at the end of the run

---

## Group 1 — Styles (6) — **completed** (word counts corrected at checkpoint 4)

The word counts first recorded here were wrong — inflated by 200–390 words per
page. Verified against the committed data at `ea4db83`, `4e592eb` and
`cdce3f8`: no content was lost, the figures were simply mis-measured when
written down. Four pages were below the 1,200-word target as a result and were
expanded at checkpoint 4.

| SKU | Product | Words (first reported → actual → now) | FAQs | Links | Status |
| --- | --- | --- | ---: | ---: | --- |
| TBS-031 | Black Burger Sleeves | 1,286 → 1,244 → 1,244 | 12 | 3 | completed |
| TBS-030 | White Burger Sleeves | 1,178 → 886 → **1,211** | 13 | 4 | completed (2 sections added) |
| TBS-029 | Kraft Brown Burger Sleeves | 1,262 → 1,012 → **1,239** | 12 | 4 | completed (1 section added) |
| TBS-033 | Gloss Finish Burger Sleeves | 1,201 → 815 → **1,235** | 12 | 4 | completed (2 sections added) |
| TBS-034 | Die Cut Burger Sleeves | 1,247 → 1,017 → **1,268** | 14 | 4 | completed (1 section added) |
| TBS-032 | Matte Finish Burger Sleeves | 1,800 → 1,809 | 15 | 4 | completed (kept existing copy; 3 mis-targeted anchors rewritten) |

Each added section carries one restored internal link to a destination flagged
by the incoming-link check — Restaurant, Cafe, Promotional and the Sizes
category respectively.

## Group 2 — Sizes (6) — **completed**

All six were rewritten rather than patched. The inherited copy scored 7.3% on
word-overlap similarity but was templated structurally — every page ran
"[Size] Burger Sleeves That Keep …" followed by "[Size] Sleeves That …
Stations/Orders …", and four of six carried a near-identical "size mapping"
subsection. A heading-shape check was added to the audit to catch this class of
duplication, which plain word similarity cannot see.

| SKU | Product | Words (was → now) | FAQs | Links | Status |
| --- | --- | --- | ---: | ---: | --- |
| TBS-023 | Small Burger Sleeves | 1,416 → 1,289 | 12 | 3 | completed |
| TBS-024 | Medium Burger Sleeves | 1,178 → 1,252 | 12 | 3 | completed |
| TBS-025 | Large Burger Sleeves | 1,372 → 1,222 | 12 | 3 | completed |
| TBS-026 | Jumbo Burger Sleeves | 1,151 → 1,235 | 12 | 3 | completed |
| TBS-027 | Slider Burger Sleeves | 1,481 → 1,238 | 12 | 3 | completed |
| TBS-028 | Double Patty Burger Sleeves | 1,315 → 1,222 | 12 | 3 | completed |

Angles: Small measures a bun that spreads and treats portion as pricing; Medium
is a tolerance problem across a menu range; Large is what added weight demands
of the board; Jumbo makes height the limit and rigidity the answer; Slider is a
multiples problem of trays, batches and tiny artwork; Double Patty is grease
volume and settling compression.


## Group 3 — Special Uses (6) — **completed**

Same structural template as the Sizes group ("[Use] Burger Sleeves For/That …"
then "[Use] Sleeves That …"), so all six were rewritten rather than patched.

| SKU | Product | Words (was → now) | FAQs | Links | Status |
| --- | --- | --- | ---: | ---: | --- |
| TBS-035 | Restaurant Burger Sleeves | 1,368 → 1,284 | 12 | 3 | completed |
| TBS-036 | Food Truck Burger Sleeves | 1,326 → 1,205 | 12 | 3 | completed |
| TBS-037 | Cafe Burger Sleeves | 1,200 → 1,220 | 12 | 3 | completed |
| TBS-038 | Street Food Burger Sleeves | 1,076 → 1,201 | 13 | 3 | completed |
| TBS-039 | Promotional Burger Sleeves | 1,102 → 1,267 | 12 | 3 | completed |
| TBS-040 | Event Burger Sleeves | 935 → 1,221 | 13 | 3 | completed |

Angles: Restaurant is pass-to-table flow, order identification and multi-site
consistency; Food Truck is cubic storage, hatch assembly and weather; Cafe is a
hot menu inside a drinks business and matching an existing counter set; Street
Food is eating standing up with sauce as the dominant constraint; Promotional
is a campaign with an end date, QR mechanics and artwork zoning; Event is guest
counting, sponsor marks, multi-station splits and leftovers.


## Group 4 — Customized (8) — **completed**

Seven pages had no long-form copy at all; TBS-016 Printed already carried 1,491
usable words and was **kept**, with only its two templated H2s reworded away
from the "[Product] Sleeves That …" shape shared with the other groups.

| SKU | Product | Words (was → now) | FAQs | Links | Status |
| --- | --- | --- | ---: | ---: | --- |
| TBS-015 | Custom Burger Sleeves | 0 → 1,327 | 13 | 4 | completed |
| TBS-016 | Printed Burger Sleeves | 1,492 → 1,491 | 15 | 4 | completed (copy preserved; 2 headings reworded) |
| TBS-017 | Branded Burger Sleeves | 0 → 1,267 | 12 | 4 | completed |
| TBS-018 | Logo Printed Burger Sleeves | 0 → 1,330 | 12 | 4 | completed |
| TBS-019 | Full Color Burger Sleeves | 0 → 1,272 | 12 | 3 | completed |
| TBS-020 | Black Printed Burger Sleeves | 0 → 1,252 | 12 | 4 | completed |
| TBS-021 | White Printed Burger Sleeves | 0 → 1,218 | 12 | 3 | completed |
| TBS-022 | Minimal Design Burger Sleeves | 0 → 1,327 | 12 | 4 | completed |

### Cannibalization boundaries

Eight pages sharing the root "printed / custom" intent is the highest
cannibalization risk in the catalogue, so each page owns one question and is
not allowed to answer another page's:

| Page | Owns | Explicitly does not cover |
| --- | --- | --- |
| Custom | the *specification* decision — dimensions, structure, board, barrier, prototyping, reordering | ink, coverage, artwork craft |
| Printed | the *production* relationship — how ink, board and press interact, coverage cost | brand systems, structure |
| Branded | the *system* — a sleeve as one item in a set, consistency across sites, brand change | print mechanics |
| Logo Printed | one *element* — panel choice, clear space, minimum size, contrast, reversing | full layouts, colour management |
| Full Color | *process colour* — separations, heavy coverage, colour matching, registration, proofing | single-ink work |
| Black Printed | *one ink on light board* — no registration, board show-through, cost case | multi-colour, white ink |
| White Printed | *white stock as a printing base* — brightness, barrier, marking, keeping white consistent | ink colour theory |
| Minimal Design | *restraint* — what the panel is for, fewer inks, legibility, scale, testing | production mechanics |

Highest within-group pair similarity after writing: **1.3 %** (Logo Printed ↔
Black Printed). No repeated headings inside the group. Each page carries a
different table type: decision matrix, ink/board grid, brand-element register,
minimum-size guide, coverage cost bands, single-ink board comparison, white-stock
handling table, and an element-count table.

### "Black Printed" and "White Printed" — verified, not assumed

Both product names are ambiguous in English and were resolved from the migrated
data rather than guessed:

- **TBS-020 Black Printed** — verified as *black ink printed onto light board*,
  not black board. Its 15-row specification table lists the stock as kraft /
  white paperboard and the print as one-colour black. Copy is written on that
  basis, and one FAQ answers the ambiguity directly ("Is a black printed sleeve
  made from black board?").
- **TBS-021 White Printed** — verified from its **five product images** and its
  specification table as *coloured artwork printed on a white stock*. The
  migrated short description claims "white ink on dark kraft", which every image
  and the spec table contradict. The short description was **not changed** (the
  brief forbids altering it) and the long copy follows the images and the spec
  table. Raised for the client in `CONTENT_AUDIT.md` § Client decisions.

## Group 5 — Materials (6) — **completed**

| SKU | Product | Words (was → now) | FAQs | Links | Status |
| --- | --- | --- | ---: | ---: | --- |
| TBS-001 | Kraft Burger Sleeves | 855 → 1,516 | 12 | 4 | completed |
| TBS-002 | Cardboard Burger Sleeves | 927 → 1,397 | 12 | 4 | completed |
| TBS-003 | Paper Burger Sleeves | 1,198 → 1,409 | 12 | 3 | completed (restructured, lists preserved) |
| TBS-004 | Corrugated Burger Sleeves | 1,005 → 1,395 | 12 | 3 | completed (construction unverified — see below) |
| TBS-005 | Recycled Burger Sleeves | 1,096 → 1,353 | 12 | 4 | completed |
| TBS-006 | Eco Friendly Burger Sleeves | 928 → 1,348 | 12 | 3 | completed |

### The inherited copy was mostly not about materials

The instruction was to preserve accurate inherited content. Measured first, most
of it did not qualify. Across the six pages the copy was overwhelmingly generic
wrap-station routine — folding, bagging, stacking, staff training — with tables
whose cells read `Storage | Flat stack behavior | Quick picking | Prep lines |
Smooth release`. It also repeated itself across the cluster:

- **11 table rows appeared on more than one page**, three of them on three pages
- **7 sentences appeared on two pages each**
- Cardboard ↔ Corrugated measured **11.8 %** similar, the highest pair on the site

So the station-routine filler was replaced and the genuinely specific material
content kept. TBS-003 Paper kept the most, including both of its step-by-step
lists, which are concrete and useful; only its templated headings, its
duplicated filler tables and its "lightweight flexible paper" framing changed.

### Construction verification — what the data actually supports

| Question asked | Finding |
| --- | --- |
| Is Corrugated genuinely fluted? | **Not verifiable.** The spec table documents E flute, F flute, single-face and stiffer grades. None of the five product images shows fluting — all show smooth printed board, two carrying third-party branding (White Castle, "Burger Brother") and one a stock mockup template. Flute options are named as quotable options; no thickness, insulation or thermal claim is made |
| How does Paper differ from Cardboard? | **Materially overlapping.** Paper's own spec reads "Paperboard sleeve structure… medium to heavy calipers"; Cardboard's reads "White SBS board, kraft board… 250–450 GSM". Both are solid paperboard across overlapping ranges. Differentiated honestly by the question each answers — Cardboard by stiffness selection, Paper by format and contact setup — not by an invented weight distinction |
| Is Recycled content verified? | **No percentage and no post-consumer split is documented.** The spec says only "built using recycled content where suitable for sleeve board". Neither figure is claimed on the page |
| What does Eco Friendly offer? | **Nothing environmental is documented** beyond "designed around responsible packaging preferences" plus kraft and recycled board. Written as a material-selection and waste-reduction framework rather than a green-claims page |
| Kraft (material) vs Kraft Brown (style)? | **Real but narrow.** TBS-001's spec uniquely carries absorbent/barrier builds and a 250–400 GSM band; TBS-029 covers the brown surface and printing on it. TBS-001 is written as a stock decision and links to TBS-029 for the appearance question rather than repeating it |

### Unique table per page

Kraft: build options and what each commits you to · Cardboard: board and weight
against the failure being fixed · Paper: formats and what each asks of the line ·
Corrugated: documented flute options and what to establish for each · Recycled:
what to ask a supplier and what a usable answer looks like · Eco Friendly:
lower-impact decisions and what each requires from you.

No invented GSM, caliper, flute, coating, recycling or thermal figures. Every
number on these pages comes from the products' own specification tables.

## Group 6 — Usage (8) — **completed**

### Verified SKU → name → URL mapping

Read from `src/data/products.json` and `PRODUCT_CONTENT_INVENTORY.csv`, not
inferred from SKU order. All eight carry 0 long-form words and need writing from
scratch; all eight sit in the `Burger Sleeves Usage` category.

| SKU | Product name | URL | H1 | Images |
| --- | --- | --- | --- | ---: |
| TBS-007 | Burger Sleeves | `/product/burger-sleeves/` | Burger Sleeves | 5 |
| TBS-008 | Hamburger Sleeves | `/product/hamburger-sleeves/` | Hamburger Sleeves | 5 |
| TBS-009 | Cheeseburger Sleeves | `/product/cheeseburger-sleeves/` | Cheeseburger Sleeves | 4 |
| TBS-010 | Fast Food Burger Sleeves | `/product/fast-food-burger-sleeves/` | Fast Food Burger Sleeves | 5 |
| TBS-011 | Takeaway Burger Sleeves | `/product/takeaway-burger-sleeves/` | Takeaway Burger Sleeves | 5 |
| TBS-012 | Disposable Burger Sleeves | `/product/disposable-burger-sleeves/` | Disposable Burger Sleeves | **0** |
| TBS-013 | Grease Resistant Burger Sleeves | `/product/grease-resistant-burger-sleeves/` | Grease Resistant Burger Sleeves | 5 |
| TBS-014 | Food Grade Burger Sleeves | `/product/food-grade-burger-sleeves/` | Food Grade Burger Sleeves | 1 |

### The group splits into two families

The specification tables make the split visible. TBS-007 to TBS-010 share a
five-column `board / finish / use` shape and describe the same sleeve against
different burgers or different volumes. TBS-011 to TBS-014 share a six-column
`Feature | Details | Material | Size Range | Printing | Notes` shape and describe
service models and material properties. That is the axis the pages are separated
along.

### Cannibalization plan — one owned question per page

| SKU | Primary intent | Buyer problem | Owned characteristic (from its spec) | Must not target |
| --- | --- | --- | --- | --- |
| TBS-007 | `burger sleeves` — the head term | "What is this and which one do I need?" | Baseline: outer sleeve for a wrapped burger | Throughput, specific burger types |
| TBS-008 | `hamburger sleeves` | "Will it fit a plain, standard build?" | "Classic Fit — sized for standard hamburger builds" | Moisture, cheese, volume |
| TBS-009 | `cheeseburger sleeves` | "Melted cheese makes a mess of my wrap" | "Moisture Response — reduce softening from melted cheese"; thicker wraps | Generic sizing, barrier engineering |
| TBS-010 | `fast food burger sleeves` | "My line is too slow at peak" | "Speed Packing", "Stack Handling", mixed size range | What a sleeve is; food contact |
| TBS-011 | `takeaway burger sleeves` | "Will it survive the journey home?" | "Walk-and-eat"; open-end or half-wrap; **label space for order marking** | Single-use economics, hygiene |
| TBS-012 | `disposable burger sleeves` | "Cost and hygiene per unit, no washing" | **Absorbent** paper; "Easy pull from stack"; single-use format | Barrier engineering, carry |
| TBS-013 | `grease resistant burger sleeves` | "Oil is reaching hands and staining" | **Barrier** layer; low-absorb inner liner; no inner print; fold integrity under oil | Disposal, cost per unit |
| TBS-014 | `food grade burger sleeves` | "Is this safe against food?" | Low-migration inks; ink kept off the food side; odour neutrality | Grease performance, speed |

The two sharpest pairs are handled explicitly. **TBS-012 and TBS-013 are the
absorbent and barrier answers to the same problem** — 012 lets paper take up
surface oil, 013 stops oil moving through a liner — and each page states the
other is the alternative rather than restating it. **TBS-008 and TBS-009** split
on dimension versus moisture: the plain build's predictable footprint against
what melt spread does to width and wrap adhesion.

### TBS-011 / TBS-012 differentiation

These two carried a **duplicate `metaDescription`**, and TBS-012's copy was
plainly wrong — it described takeaway sleeves on the disposable page, a
copy-paste error inherited from WordPress. Differentiated on every axis:

| | TBS-011 Takeaway | TBS-012 Disposable |
| --- | --- | --- |
| Intent | the journey after handoff | single-use economics and hygiene |
| Oil approach | optional inner barrier | absorbent paper takes up surface oil |
| Unique spec content | fold style, label space for stamps and order marks | pull-from-stack dispensing, single-use format |
| Table | the journey in stages | absorbent against barrier, and dispensing |
| Meta description | unchanged | **rewritten** — it described the wrong product |

### Internal-link allocation

Implemented the outstanding Group 6 debts: materials category, sizes category,
medium, kraft, paper, large, special-uses category, street food, corrugated and
recycled all receive a link from this group. Sibling links inside the group were
used deliberately so that every Usage page ends with at least one incoming
contextual link.

### Result

| SKU | Product | Words | FAQs | Links out | Links in |
| --- | --- | ---: | ---: | ---: | ---: |
| TBS-007 | Burger Sleeves | 1,225 | 12 | 4 | 1 |
| TBS-008 | Hamburger Sleeves | 1,257 | 12 | 3 | 1 |
| TBS-009 | Cheeseburger Sleeves | 1,203 | 12 | 4 | 1 |
| TBS-010 | Fast Food Burger Sleeves | 1,308 | 12 | 3 | 1 |
| TBS-011 | Takeaway Burger Sleeves | 1,204 | 12 | 3 | 1 |
| TBS-012 | Disposable Burger Sleeves | 1,313 | 12 | 3 | 1 |
| TBS-013 | Grease Resistant Burger Sleeves | 1,340 | 12 | 4 | 2 |
| TBS-014 | Food Grade Burger Sleeves | 1,331 | 12 | 3 | 1 |

Group totals: **10,181 words, 96 FAQs, 27 contextual links out.** Highest
within-group pair similarity **1.88 %** (Hamburger ↔ Cheeseburger); no repeated
headings inside the group; every page carries its exact keyword in one H2.

TBS-014's inherited short description claims the product "meets strict FDA
regulations" and uses "certified safe materials". Nothing in the supplied data
supports either claim. It is flagged in `CONTENT_AUDIT.md` and the page copy
says the opposite — that suitability must be confirmed in writing for the
finished construction.

## Group 7 — Combo (4) — pending

All four need writing from scratch: TBS-041 Burger and Fries,
TBS-042 Burger Wrapping, TBS-043 Burger Sandwich,
TBS-044 Fast Food Sleeves Packaging.

---

## Carried-over defects still to clear

| Defect | Where | Cleared by |
| --- | --- | --- |
| ~~Duplicate FAQ "how do i choose the right sleeve size?"~~ | cleared — TBS-037 rewritten, TBS-032 reworded to a matte-specific question | done |
| ~~Duplicate FAQ "…for my menu?"~~ | cleared — TBS-036 rewritten | done |
| Identical `category+product+product+product` link shape | 8 pages not yet rewritten (was 19) | each owning group |
| Duplicate `metaDescription` | TBS-011 Takeaway and TBS-012 Disposable share one description, inherited from WordPress | Group 6 — Usage |
| 8 products with zero contextual incoming links | all eight are Group 6 / 7 pages, not yet written | Groups 6–7 |
| Thin incoming support on 10 destinations | see `INTERNAL_LINK_PRESERVATION_REPORT.csv`, incoming rows | Groups 6–7 (12 pages, ~36 links still to allocate) |
| 39 unsupported environmental claims in inherited fields | short descriptions, image alt text and one product name; protected by the migration brief so flagged, not deleted | client decision |
| ~~1 repeated paragraph, 1 reused anchor~~ | cleared | done |

## Link allocation owed by the remaining groups

The incoming-link check (`node scripts/link-report.mjs`) still flags eight
destinations below 70 % of their pre-upgrade incoming links. Groups 5–7 add 18
pages carrying roughly 54 contextual links; these destinations get first call on
them, and the check must come back clean before the final checkpoint.

| Destination | Baseline → now | Owed from |
| --- | --- | --- |
| `/product-category/burger-sleeves-materials/` | 6 → 2 | Usage, Combo |
| `/product-category/special-sleeves-uses/` | 6 → 2 | Usage, Combo |
| `/product/large-burger-sleeves/` | 5 → 2 | Usage |
| `/product/medium-burger-sleeves/` | 5 → 3 | Usage |
| `/product/kraft-burger-sleeves/` | 5 → 3 | Usage |
| `/product/event-burger-sleeves/` | 4 → 2 | Combo |
| `/product/recycled-burger-sleeves/` | 3 → 1 | Combo |
| `/product/street-food-burger-sleeves/` | 3 → 2 | Usage |
| `/product/corrugated-burger-sleeves/` | 2 → 1 | Usage |
| `/product/paper-burger-sleeves/` | 4 → 1 | Usage |

Eight products still have zero contextual incoming links; all eight are Group 6
and Group 7 pages that have not been written yet. Every page that already
carries upgraded copy has at least one incoming contextual link.

## Invariants that must hold at every checkpoint

- `npm run build` succeeds and `npm run validate` passes
- 61 indexable URLs, unchanged
- No product URL, slug, SKU, image, short description, category or metadata altered
- Every product keeps exactly 15 spec rows / images / gallery as migrated
- FAQ schema regenerated from the visible FAQs (one source of truth in `products.json`)
- Every upgraded page sits inside the 1,200–1,600 word target. **Read the count
  from `PRODUCT_CONTENT_INVENTORY.csv`, never from a running tally** — the
  Group 1 figures were recorded by hand and were wrong by up to 390 words
- `node scripts/link-report.mjs` regenerates both link CSVs and re-runs the
  incoming-link check. `OLD_INTERNAL_LINK_BASELINE.csv` is its input and must
  never be regenerated from current content
- `node scripts/claim-scan.mjs` must report **BLOCK 0**. It exits non-zero on any
  unqualified environmental, certification or performance claim in authored copy,
  and separately lists inherited claims for a human decision rather than deleting
  them
- The duplication audit compares headings, paragraphs, **list items and table
  rows**. Comparing only headings and paragraphs hid 11 shared table rows across
  the Materials cluster; do not narrow the corpus again
