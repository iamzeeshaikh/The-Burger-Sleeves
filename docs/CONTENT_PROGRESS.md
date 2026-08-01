# Product Content Upgrade — Progress

State file for a multi-turn job. **On resuming: read this first, then continue
from the first product not marked `completed`.** Do not redo completed products.

Authored copy lives in `scripts/content/*.mjs` and is merged by
`node scripts/apply-content.mjs`, which refuses to write if any editorial rule
fails. Never hand-edit `src/data/product-content.json` for authored groups —
edit the group file and re-run the merge.

Last updated: 2026-08-01 · Styles, Sizes, Special Uses and Customized complete (26 of 44 products).

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

## Group 5 — Materials (6) — pending

| SKU | Product | Current words | Action |
| --- | --- | ---: | --- |
| TBS-001 | Kraft Burger Sleeves | 855 | expand to target |
| TBS-002 | Cardboard Burger Sleeves | 927 | expand to target |
| TBS-003 | Paper Burger Sleeves | 1,198 | expand slightly |
| TBS-004 | Corrugated Burger Sleeves | 1,005 | expand to target |
| TBS-005 | Recycled Burger Sleeves | 1,096 | expand to target |
| TBS-006 | Eco Friendly Burger Sleeves | 928 | expand to target; duplicate destination already fixed |

## Group 6 — Usage (8) — pending

All eight need writing from scratch: TBS-007 Burger Sleeves, TBS-008 Hamburger,
TBS-009 Cheeseburger, TBS-010 Fast Food Burger, TBS-011 Takeaway,
TBS-012 Disposable, TBS-013 Grease Resistant, TBS-014 Food Grade.

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
| 9 products with zero contextual incoming links | all nine are Group 6 Usage pages, not yet written | Groups 5–7 |
| Thin incoming support on 11 destinations | see `INTERNAL_LINK_PRESERVATION_REPORT.csv`, incoming rows | Groups 5–7 (18 pages, ~54 links still to allocate) |
| ~~1 repeated paragraph, 1 reused anchor~~ | cleared | done |

## Link allocation owed by the remaining groups

The incoming-link check (`node scripts/link-report.mjs`) still flags eight
destinations below 70 % of their pre-upgrade incoming links. Groups 5–7 add 18
pages carrying roughly 54 contextual links; these destinations get first call on
them, and the check must come back clean before the final checkpoint.

| Destination | Baseline → now | Owed from |
| --- | --- | --- |
| `/product/large-burger-sleeves/` | 5 → 1 | Materials, Usage |
| `/product/medium-burger-sleeves/` | 5 → 2 | Materials, Usage |
| `/product-category/special-sleeves-uses/` | 6 → 1 | Usage, Combo |
| `/product/event-burger-sleeves/` | 4 → 1 | Combo |
| `/product/slider-burger-sleeves/` | 4 → 2 | Usage |
| `/product/restaurant-burger-sleeves/` | 4 → 2 | Usage |
| `/product/street-food-burger-sleeves/` | 3 → 1 | Usage |
| `/product/food-truck-burger-sleeves/` | 2 → 1 | Usage |

Nine products still have zero contextual incoming links; all nine are Group 6
Usage pages that have not been written yet.

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
