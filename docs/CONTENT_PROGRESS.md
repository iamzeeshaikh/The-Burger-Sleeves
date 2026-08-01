# Product Content Upgrade — Progress

State file for a multi-turn job. **On resuming: read this first, then continue
from the first product not marked `completed`.** Do not redo completed products.

Authored copy lives in `scripts/content/*.mjs` and is merged by
`node scripts/apply-content.mjs`, which refuses to write if any editorial rule
fails. Never hand-edit `src/data/product-content.json` for authored groups —
edit the group file and re-run the merge.

Last updated: 2026-08-01 · Styles, Sizes and Special Uses complete (18 of 44 products).

## Status legend

`pending` not started · `in-progress` partially written · `completed` written and merged ·
`validated` passed the sitewide audit at the end of the run

---

## Group 1 — Styles (6) — **completed**

| SKU | Product | Words | FAQs | Links | Status |
| --- | --- | ---: | ---: | ---: | --- |
| TBS-031 | Black Burger Sleeves | 1,286 | 12 | 3 | completed |
| TBS-030 | White Burger Sleeves | 1,178 | 13 | 3 | completed |
| TBS-029 | Kraft Brown Burger Sleeves | 1,262 | 12 | 4 | completed |
| TBS-033 | Gloss Finish Burger Sleeves | 1,201 | 12 | 3 | completed |
| TBS-034 | Die Cut Burger Sleeves | 1,247 | 14 | 3 | completed |
| TBS-032 | Matte Finish Burger Sleeves | 1,800 | 15 | 4 | completed (kept existing copy; 3 mis-targeted anchors rewritten) |

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


## Group 4 — Customized (8) — pending

| SKU | Product | Current words | Action |
| --- | --- | ---: | --- |
| TBS-015 | Custom Burger Sleeves | 0 | write from scratch |
| TBS-016 | Printed Burger Sleeves | 1,492 | keep copy, rewrite link set |
| TBS-017 | Branded Burger Sleeves | 0 | write from scratch |
| TBS-018 | Logo Printed Burger Sleeves | 0 | write from scratch |
| TBS-019 | Full Color Burger Sleeves | 0 | write from scratch |
| TBS-020 | Black Printed Burger Sleeves | 0 | write from scratch |
| TBS-021 | White Printed Burger Sleeves | 0 | write from scratch |
| TBS-022 | Minimal Design Burger Sleeves | 0 | write from scratch |

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
| ~~1 repeated paragraph, 1 reused anchor~~ | cleared | done |

## Invariants that must hold at every checkpoint

- `npm run build` succeeds and `npm run validate` passes
- 61 indexable URLs, unchanged
- No product URL, slug, SKU, image, short description, category or metadata altered
- Every product keeps exactly 15 spec rows / images / gallery as migrated
- FAQ schema regenerated from the visible FAQs (one source of truth in `products.json`)
