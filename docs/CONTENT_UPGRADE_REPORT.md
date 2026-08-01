# Content Upgrade Report

Running report. Updated at each group checkpoint.
Status: **4 of 7 groups complete (26 of 44 products).**
See `CONTENT_PROGRESS.md` for per-product state.

## Totals so far

| Metric | Value |
| --- | ---: |
| Products audited | 44 / 44 |
| Products with long-form copy now | 32 / 44 |
| Products upgraded in this run | 26 |
| Products still needing copy written from scratch | 12 |
| Products needing expansion to target | 6 (all Group 5 — Materials) |
| Upgraded pages inside the 1,200–1,600 word target | 25 / 26 |
| Total long-form words on site | 39,331 |
| New FAQs written in this run | 313 |
| Total FAQs on site | 594 |
| Duplicate FAQ questions sitewide | 0 |
| Highest page-pair similarity | 7.3 % |

### Internal links

Measured against `OLD_INTERNAL_LINK_BASELINE.csv`, the frozen pre-upgrade
snapshot taken at commit `57aa049`. That file is read-only; `link-report.mjs`
regenerates the other two CSVs from it and from current content.

| Outcome | Count |
| --- | ---: |
| Existing contextual links preserved unchanged | 28 |
| Existing links kept with the anchor rewritten | 11 |
| Existing links removed (sentence no longer exists after rewrite) | 41 |
| New contextual links added | 75 |
| Contextual links on the site now | 113 across 32 pages |
| Mis-targeted links corrected | 5 |
| Broken internal links | 0 |
| Self-links | 0 |
| Reused anchors sitewide | 0 |
| Sections carrying more than one contextual link | 0 |

## Group 4 — Customized (8) — complete

| Product | Words (was → now) | FAQs | Links | Work done |
| --- | --- | ---: | ---: | --- |
| Custom Burger Sleeves | 0 → 1,327 | 13 | 4 | written from scratch |
| Printed Burger Sleeves | 1,492 → 1,491 | 15 | 4 | **copy preserved**; 2 templated headings reworded |
| Branded Burger Sleeves | 0 → 1,267 | 12 | 4 | written from scratch |
| Logo Printed Burger Sleeves | 0 → 1,330 | 12 | 4 | written from scratch |
| Full Color Burger Sleeves | 0 → 1,272 | 12 | 3 | written from scratch |
| Black Printed Burger Sleeves | 0 → 1,252 | 12 | 4 | written from scratch |
| White Printed Burger Sleeves | 0 → 1,218 | 12 | 3 | written from scratch |
| Minimal Design Burger Sleeves | 0 → 1,327 | 12 | 4 | written from scratch |

Group totals: **10,484 words, 100 FAQs, 30 contextual links.**

Eight pages sharing a "printed / custom" root intent is the sharpest
cannibalization risk in the catalogue. Each page was assigned one question it
owns and forbidden from answering another page's — the boundary table is in
`CONTENT_PROGRESS.md`. Result: **highest within-group pair similarity 1.3 %**
(Logo Printed ↔ Black Printed), no repeated headings, and a different table
type on every page.

### Two ambiguous product names, resolved from data rather than guessed

- **Black Printed** — the 15-row specification table lists a light kraft or
  white board printed one-colour black. The name means *black ink*, not black
  board. An FAQ answers that directly instead of leaving it implied.
- **White Printed** — resolved from the five product images plus the
  specification table as *coloured artwork on a white stock*. The migrated short
  description says "white ink on dark kraft", which the images and the spec
  table both contradict. The short description was left untouched (protected by
  the brief) and raised as client decision #1 in `CONTENT_AUDIT.md`.

## Incoming-link check (added at Group 4)

Removals alone understate risk: a page can survive every individual removal and
still end up with far less contextual support than it had. Every destination is
now compared against the frozen baseline, and the result is written into
`INTERNAL_LINK_PRESERVATION_REPORT.csv` as `(all pages)` rows.

**41 destinations checked. 8 flagged with a reduction over 30 %.** All eight
were inspected. Four other destinations were flagged on the first pass and
**links were restored** rather than explained away:

| Destination | Before → after | Action |
| --- | --- | --- |
| `/product-category/special-sleeves-uses/` | 6 → 0 → **1** | restored from Logo Printed, "Checking The Mark In Use, Not On A Bench" |
| `/product/street-food-burger-sleeves/` | 3 → 0 → **1** | restored from Black Printed, "Menus Where One Ink Is The Right Answer" |
| `/product/food-truck-burger-sleeves/` | 2 → 0 → **1** | restored from Branded, "Holding A Brand Together Across Locations" |
| `/product-category/burger-sleeves-sizes/` | 4 → 1 → **3** | restored from Custom and Die Cut |
| `/product/printed-burger-sleeves/` | 0 → **1** | had upgraded copy but no contextual support; linked from Minimal Design |
| `/product/cafe-burger-sleeves/` | 3 → 1 → **3** | restored from Kraft Brown |
| `/product/promotional-burger-sleeves/` | 2 → 1 → **2** | restored from Gloss Finish |
| `/product/restaurant-burger-sleeves/` | 4 → 1 → **2** | partially restored from White |

The eight still flagged are size- and use-cluster pages. Their baseline links
were **reciprocal sibling links inside one cluster** — each size page linked to
its neighbours and up to its own category, so the cluster pointed only at
itself. Those were replaced with cross-cluster links that answer a different
question. The reduction is deliberate, but it is not finished: Groups 5–7 add
18 more pages carrying roughly 54 further links, and those are allocated to
these destinations.

No page that has upgraded copy is left with zero contextual incoming links. The
nine products still at zero are all Group 6 Usage pages that have not been
written yet.

## Correction to earlier reporting

The word counts recorded for the Styles group in `CONTENT_PROGRESS.md` at
checkpoint 1 were **wrong** — inflated by roughly 200–390 words each. Checked
against the committed data at `ea4db83`, `4e592eb` and `cdce3f8`, nothing had
been lost: the pages had always been that length and the figures were
mis-measured when written down.

| Page | Reported | Actual | After remediation |
| --- | ---: | ---: | ---: |
| White Burger Sleeves | 1,178 | 886 | 1,211 |
| Gloss Finish Burger Sleeves | 1,201 | 815 | 1,235 |
| Kraft Brown Burger Sleeves | 1,262 | 1,012 | 1,239 |
| Die Cut Burger Sleeves | 1,247 | 1,017 | 1,268 |

All four were expanded with new sections in this checkpoint, and each expansion
carries one of the restored links above. Every upgraded page now sits inside
the 1,200–1,600 word target except Matte Finish at 1,809, which is inherited
copy that was deliberately kept.

## Validation at this checkpoint

| Check | Result |
| --- | --- |
| `npm run build` | pass — 67 pages, 766 images |
| `npm run validate` (30+ SEO/schema/link checks) | all passed, 0 warnings |
| Indexable URLs | 61, unchanged |
| Editorial rule gate (`apply-content.mjs`) | passed for all 24 authored products |
| Highest page-pair similarity | 7.3 % |
| Repeated headings sitewide | 0 |
| Repeated paragraphs | 0 |
| Reused anchors | 0 |
| Near-duplicate introductions | 0 |
| Templated heading shapes | 0 |
| Duplicate FAQ questions | 0 |
| Duplicate `metaTitle` / `name` / `slug` | 0 |
| Duplicate `metaDescription` | 1 pair (TBS-011 / TBS-012, both unwritten, inherited from WordPress) |
| FAQ schema matches visible FAQs | pass on all 44 products |

## Rule violations the gate caught in my own drafts

The merge script has now refused to write nine times across four groups:

- banned words: "discover" / "discovering" (Black), "aesthetic" (Kraft Brown),
  "exceptional" (Die Cut), "not only" (Custom)
- only 2 contextual links where 3–6 are required (Gloss)
- two contextual links inside one paragraph (Restaurant)
- an anchor reused on a second page (Food Truck)
- a FAQ answer over the 110-word ceiling (Full Color)
- FAQ text visible on the page not matching the JSON-LD, caused by a double
  quote rendering as `&quot;` in HTML and `\"` in JSON-LD (Black Printed). Fixed
  by rephrasing the question **and** teaching `validate.mjs` to decode entities
  before comparing, so the check cannot be fooled by escaping again.

## Unresolved

- 12 products still have no long-form copy; 6 more sit below the word target
- 8 pages still share the `category+product+product+product` link shape
- 8 destinations remain below 70 % of their baseline incoming links, scheduled
  for Groups 5–7
- TBS-011 and TBS-012 share a `metaDescription`; owned by Group 6
- TBS-021's short description contradicts its own images — client decision
- Brand red `#FF0000` still fails WCAG AA contrast at 3.998:1 (inherited)
- TBS-002, TBS-012 and TBS-020 have no product photography

## Next

**Group 5 — Materials (6):** TBS-001 Kraft (855w), TBS-002 Cardboard (927w),
TBS-003 Paper (1,198w), TBS-004 Corrugated (1,005w), TBS-005 Recycled (1,096w),
TBS-006 Eco Friendly (932w). All six carry usable inherited copy and need
expansion rather than replacement, plus link-set rework and the incoming-link
allocations listed above.
