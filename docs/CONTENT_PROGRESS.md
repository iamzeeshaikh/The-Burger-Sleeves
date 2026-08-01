# Product Content Upgrade — Progress

State file for a multi-turn job. **On resuming: read this first, then continue
from the first product not marked `completed`.** Do not redo completed products.

Authored copy lives in `scripts/content/*.mjs` and is merged by
`node scripts/apply-content.mjs`, which refuses to write if any editorial rule
fails. Never hand-edit `src/data/product-content.json` for authored groups —
edit the group file and re-run the merge.

Last updated: 2026-08-01 · Styles group complete.

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

## Group 2 — Sizes (6) — pending

| SKU | Product | Current words | Action |
| --- | --- | ---: | --- |
| TBS-023 | Small Burger Sleeves | 1,416 | keep copy, rewrite link set + dedupe FAQs |
| TBS-024 | Medium Burger Sleeves | 1,178 | expand to target, rewrite link set |
| TBS-025 | Large Burger Sleeves | 1,368 | keep copy, link already corrected |
| TBS-026 | Jumbo Burger Sleeves | 1,151 | expand to target, rewrite link set |
| TBS-027 | Slider Burger Sleeves | 1,481 | keep copy, rewrite link set |
| TBS-028 | Double Patty Burger Sleeves | 1,315 | keep copy, rewrite link set |

## Group 3 — Special Uses (6) — pending

| SKU | Product | Current words | Action |
| --- | --- | ---: | --- |
| TBS-035 | Restaurant Burger Sleeves | 1,368 | keep copy, rewrite link set |
| TBS-036 | Food Truck Burger Sleeves | 1,326 | keep copy, dedupe FAQ |
| TBS-037 | Cafe Burger Sleeves | 1,200 | keep copy, dedupe FAQ |
| TBS-038 | Street Food Burger Sleeves | 1,076 | expand to target |
| TBS-039 | Promotional Burger Sleeves | 1,102 | expand to target |
| TBS-040 | Event Burger Sleeves | 935 | expand to target |

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
| Duplicate FAQ "how do i choose the right sleeve size?" | TBS-041, TBS-032, TBS-037 | groups 3 and 7 |
| Duplicate FAQ "…for my menu?" | TBS-044, TBS-036 | groups 3 and 7 |
| Identical `category+product+product+product` link shape | 19 pages not yet rewritten | each owning group |
| 1 repeated paragraph, 1 reused anchor | pages not yet rewritten | flagged in CONTENT_DUPLICATION_REPORT.md |

## Invariants that must hold at every checkpoint

- `npm run build` succeeds and `npm run validate` passes
- 61 indexable URLs, unchanged
- No product URL, slug, SKU, image, short description, category or metadata altered
- Every product keeps exactly 15 spec rows / images / gallery as migrated
- FAQ schema regenerated from the visible FAQs (one source of truth in `products.json`)
