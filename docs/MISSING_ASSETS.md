# Missing Assets Report

Generated from the production build on 2026-07-31.

## Summary

| Metric | Count |
| --- | ---: |
| Distinct original images downloaded from the live site | 151 |
| Images referenced by a product, page or template | 151 |
| Images that could not be located anywhere | 0 |
| Products with no product photography (upstream gap) | 3 |

Every image referenced by the live site was downloaded to
`src/assets/images/` and is served from this project. **Nothing is hotlinked
back to `theburgersleeves.com/wp-content/`** — the automated suite fails the
build if a `wp-content` URL appears in any page.

## Products with no photography

These products already show the WooCommerce "Awaiting product image"
placeholder on the live site. No stock photo or visually similar product image
has been substituted; the same placeholder is rendered so the gap stays
visible rather than being papered over.

| SKU | Product | Category | Live URL |
| --- | --- | --- | --- |
| TBS-002 | Cardboard Burger Sleeves | Burger Sleeves Materials | `/product/cardboard-burger-sleeves/` |
| TBS-012 | Disposable Burger Sleeves | Burger Sleeves Usage | `/product/disposable-burger-sleeves/` |
| TBS-020 | Black Printed Burger Sleeves | Customized Burger Sleeves | `/product/black-printed-burger-sleeves/` |

**Action for the client:** supply photography for the 3 products above.
Drop the files into `src/assets/images/`, add their filenames and alt text to
the product's `images` array in `src/data/products.json`, and rebuild.

## Assets that exist only on the live server

None. All 151 originals were downloaded before the rebuild, including the four
hero slideshow frames and the two full-bleed section backgrounds, which are
referenced from Elementor settings rather than from page markup.
