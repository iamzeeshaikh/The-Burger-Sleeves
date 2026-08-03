# Media Rescue and Licensing Audit

Generated 2026-08-03. Companion data: `docs/PRODUCT_IMAGE_INVENTORY.csv` (162
rows). Applied by `scripts/media-audit.mjs`, checked by
`scripts/validate-images.mjs`.

## The four products the audit was asked about

| SKU | Product name | URL | Images before | Images after |
| --- | --- | --- | ---: | --- |
| TBS-002 | Cardboard Burger Sleeves | `/product/cardboard-burger-sleeves/` | 0 | temporary placeholder |
| TBS-004 | Corrugated Burger Sleeves | `/product/corrugated-burger-sleeves/` | 5 | temporary placeholder (all 5 excluded) |
| TBS-012 | Disposable Burger Sleeves | `/product/disposable-burger-sleeves/` | 0 | temporary placeholder |
| TBS-020 | Black Printed Burger Sleeves | `/product/black-printed-burger-sleeves/` | 0 | temporary placeholder |

## Recovery attempt — all eight sources

For TBS-002, TBS-012 and TBS-020 there is nothing to recover.

| Source | Result |
| --- | --- |
| Astro project assets | No file matching any of the three products |
| `wp-content/uploads` (migrated set) | No matching attachment |
| WooCommerce CSV `Images` column | **Empty** for all three; populated only for TBS-004 |
| WordPress XML attachments | No attachment references any of the three slugs |
| SQL attachment metadata | Only files belonging to *other* products (`Cardboard-Large-Burger-Sleeve.jpg`, `Cardboard-Double-Patty-Burger-Sleeve.jpg`, `Disposable-Hamburger-Sleeve.jpg`, `Disposable-Corrugated-Burger-Sleeve.jpg`). Reusing those would misrepresent the product, so they were not taken |
| Elementor JSON exports | No product gallery data |
| Original migration folders | Nothing further |
| **Live WordPress product pages** | Fetched all three. Each renders `png-1.png` — **the company's own logo, 268×141** — where a product image should be, plus 300×300 thumbnails of unrelated products in the related-products strip. The live site has no photography for these three either |

Nothing was hotlinked from WordPress and nothing was downloaded, because there
was no genuine product asset to download.

## The audit found a much larger problem

Every one of the 148 referenced images was reviewed as a contact sheet, and each
flagged file was then re-opened at full size. **42 distinct files, covering 44
product image slots, carry branding this business does not own.**

### Registered brands of other companies

| What is visible | File |
| --- | --- |
| **Burger King WHOPPER®** wrap — "Flame Grilled™", "America's Favorite Burger®", **plus a "Designed by Turner Duckworth" agency credit watermark** | `Custom-Kraft-Brown-Burger-Sleeve.jpg` |
| **White Castle** branded packaging | `Corrugated-Burger-Sleeve.jpg`, `Slider-Burger-Sleeve.jpg`, `Matte-Burger-Sleeve.jpg` |
| **KRAFT** (Kraft Heinz) burger cheese advertising | `Grease-Resistant-Burger-Sleeves.jpg` |

### Other third-party restaurant identities

JB's Burgers, Lumi Fast Food, Burger House, burger time, Burger Palace, Bayette
Boutique Restaurant, Downtowner (×3), Hamburgesa (×3), Mazza Food (×2), Munch,
Klay by Karak House (×2), Crave, Burger Station, Culto Kebab, Hoffy, Good Food
Burger, Delicious Dessert, What The Duck, Burger Brother, and several unnamed
printed identities — 30 files in total.

### Templates, watermarks and stock overlays

| Issue | File |
| --- | --- |
| "burger holder" free-mockup template with provider credit | `Disposable-Corrugated-Burger-Sleeve.jpg`, `Jumbo-Burger-Sleeves.jpg` |
| "SANDWICH PACKAGING mockup" watermark across the frame | `Food-Grade-Recycled-Burger-Sleeve.jpg` |
| "Fast Sleeve Printing — Get yours printed today!" advert | `Burger-Wrapping-Sleeves.jpg` |
| "100 PACK" retail sticker composited onto a listing photo | `custom-fast-food-sleeve.jpg` |

### Wrong product entirely

`Premium-Mattle-Burger-Sleeve.jpg` and `Restaurant-Burger-Sleeves-With-Logo.jpg`
both show **hot dog** packaging, not burger sleeves.

## What was done, and what was deliberately not done

**No watermark or logo was removed from any image.** Editing a third-party
copyrighted photograph to disguise its origin would be worse than leaving it in
place. Each whole file was excluded instead.

De-referencing the images from the product data turned out not to be enough.
Astro's `import.meta.glob` in `src/lib/images.ts` eagerly processes every file in
`src/assets/images/`, so the originals were still being emitted to `/_astro/`
and were **publicly downloadable** even with no page linking to them — verified
live: the Burger King image returned HTTP 200 at its hashed URL. All 42 files
were therefore moved to `quarantine/third-party-images/`, outside the glob, with
a README explaining why they must not be "cleaned" and reused. After the move,
**0 variants of any quarantined file appear in the build**.

### Sitewide imagery was contaminated too

Five references outside the product data were found and replaced with unbranded
photographs already in the library:

| Where | Was | Now |
| --- | --- | --- |
| Homepage hero slides (×2) | White Castle clamshell | `Unbleached-Kraft-Burger-Sleeve.jpg` |
| Homepage hero slide | third-party striped box | `Custom-Jumbo-Burger-Sleeves.jpg` |
| Homepage intro | Downtowner branded box | `Kraft-Medium-Burger-Sleeve.jpg` |
| Homepage printing section | Hamburgesa branded wrap | `Custom-Double-Patty-Burger-Sleeve.jpg` |
| Homepage section image | free-mockup template | `Paper-Double-Patty-Burger-Sleeves.jpg` |
| About page panel | White Castle clamshell | `Matte-Burger-Sandwich-Sleeve.jpg` |
| **Sitewide CTA banner background** — homepage, every product, every category, about and contact | BURGER HOUSE branded box | `Natural-Kraft-Brown-Burger-Sleeve.jpg` |

The CTA banner was the widest exposure of all: one branded file appearing near
the foot of almost every page on the site.

## Temporary placeholder

`src/assets/images/Artwork-Preview-Coming-Soon.jpg` — 1080×1080, generated
in-project, owned outright. Neutral grey card, a plain outline sleeve glyph, the
words "Artwork Preview Coming Soon", a line saying photography is being prepared,
and the business name. **It makes no product claim** — no material, no coating,
no certification, no structure — so it cannot mislead and needs no `noindex`
treatment of its own.

Ten products currently show it:

| SKU | Product | Why |
| --- | --- | --- |
| TBS-001 | Kraft Burger Sleeves | only image was "burger time" branded |
| TBS-002 | Cardboard Burger Sleeves | never had photography |
| TBS-004 | Corrugated Burger Sleeves | all five images third-party or template |
| TBS-012 | Disposable Burger Sleeves | never had photography |
| TBS-016 | Printed Burger Sleeves | its only image is another product's main |
| TBS-017 | Branded Burger Sleeves | its only image is another product's main |
| TBS-020 | Black Printed Burger Sleeves | never had photography |
| TBS-023 | Small Burger Sleeves | all three images third-party branded |
| TBS-042 | Burger Wrapping Sleeves | only image was a template advert |
| TBS-044 | Fast Food Sleeves Packaging | all five images third-party or template |

No two products share a main image. Where excluding a file left a product whose
only remaining photo was already another product's main, the file was assigned
to whichever product name it matches and the other took the placeholder — using
one photograph as the main image of two products misrepresents at least one.

## Automated validation

`node scripts/validate-images.mjs` — run on all 44 products, fails the build on
any error.

| Check | Result |
| --- | --- |
| Missing main image | 0 |
| Broken / missing file on disk | 0 |
| Zero-byte file | 0 |
| Image under 300×300 | 0 |
| Missing dimensions | 0 |
| External image URL / WordPress hotlink | 0 |
| Duplicate main image across products | 0 |
| Missing or empty alt text | 0 |
| Suspicious brand or stock word in filename | 0 |
| Suspicious brand or stock word in alt text | 0 |

Alt text was corrected in the earlier claim pass and re-checked here: it
describes what is visible and asserts no material, coating, certification or
printing technique.

## Visual QA

Captured at 1440 and 375 with proper device emulation, for the four named SKUs
and four unaffected products (White, Medium, Cheeseburger, Minimal Design).

- Correct main image on every page
- Gallery thumbnails render and switch on the unaffected products
- No third-party branding visible anywhere
- No broken layout, no stretched or pixelated image
- Placeholder reads cleanly at both sizes and does not distort
- Responsive sweep unchanged: 12 pages × 5 widths, no horizontal overflow

## Still outstanding — needs client assets

Ten products are on a placeholder and cannot be resolved from any available
source. Real photography is the only fix. In priority order by likely traffic:

1. TBS-001 Kraft Burger Sleeves
2. TBS-004 Corrugated Burger Sleeves
3. TBS-023 Small Burger Sleeves
4. TBS-016 Printed Burger Sleeves
5. TBS-044 Fast Food Sleeves Packaging
6. TBS-017 Branded Burger Sleeves
7. TBS-042 Burger Wrapping Sleeves
8. TBS-002 Cardboard Burger Sleeves
9. TBS-012 Disposable Burger Sleeves
10. TBS-020 Black Printed Burger Sleeves

The 108 permanent images that remain were reviewed and show no third-party mark.
They are unbranded product photography, and no ownership documentation exists
for them in the project either — the audit can only report that nothing
identifying appears in frame, not that a licence is on file. Confirming their
provenance with whoever supplied the original site is worth doing separately.
