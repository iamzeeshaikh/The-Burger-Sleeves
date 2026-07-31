# Broken Link Report

Generated from the production build on 2026-07-31.
Every `<a href>` and `<img src>` in all 67 built pages was resolved
against the build output.

## Summary

| Check | Result |
| --- | --- |
| Pages scanned | 67 |
| Distinct internal link targets | 65 |
| Broken internal links | **0** |
| Broken image sources | **0** |
| `mailto:` links | 193 |
| `tel:` links | 256 |
| Distinct external link targets | 28 |

## Broken internal links

None.

## Broken images

None.

## External links

- `https://theburgersleeves.com/product-category/special-sleeves-uses/` (6 occurrences)
- `https://theburgersleeves.com/product/restaurant-burger-sleeves/` (4 occurrences)
- `https://theburgersleeves.com/product/food-truck-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/event-burger-sleeves/` (4 occurrences)
- `https://theburgersleeves.com/product-category/burger-sleeves-materials/` (6 occurrences)
- `https://theburgersleeves.com/product/corrugated-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/kraft-burger-sleeves/` (6 occurrences)
- `https://theburgersleeves.com/product/paper-burger-sleeves/` (4 occurrences)
- `https://theburgersleeves.com/product/cardboard-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product-category/burger-sleeves-sizes/` (4 occurrences)
- `https://theburgersleeves.com/product/jumbo-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/large-burger-sleeves/` (5 occurrences)
- `https://theburgersleeves.com/product/medium-burger-sleeves/` (5 occurrences)
- `https://theburgersleeves.com/product/recycled-burger-sleeves/` (3 occurrences)
- `https://theburgersleeves.com/product/street-food-burger-sleeves/` (3 occurrences)
- `https://theburgersleeves.com/product/promotional-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/cafe-burger-sleeves/` (3 occurrences)
- `https://theburgersleeves.com/product/double-patty-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/slider-burger-sleeves/` (4 occurrences)
- `https://theburgersleeves.com/product-category/burger-sleeves-styles/` (1 occurrence)
- `https://theburgersleeves.com/product/white-burger-sleeves/` (1 occurrence)
- `https://theburgersleeves.com/product/branded-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product/black-burger-sleeves/` (1 occurrence)
- `https://theburgersleeves.com/product/small-burger-sleeves/` (2 occurrences)
- `https://theburgersleeves.com/product-category/customized-burger-sleeves/` (1 occurrence)
- `https://theburgersleeves.com/product/logo-printed-burger-sleeves/` (1 occurrence)
- `https://theburgersleeves.com/product/full-color-burger-sleeves/` (1 occurrence)
- `https://theburgersleeves.com/product/eco-friendly-burger-sleeves/` (1 occurrence)

## Links repaired during migration

| Page | Live behaviour | Rebuilt as |
| --- | --- | --- |
| Privacy Policy, Terms, Shipping Policy, Refund & Returns | `<a>` around the email address with **no `href`** (Cloudflare had rewritten it and the source markup carried none) | `mailto:info@theburgersleeves.com` |
| Contact Us — "Email" card | linked to `tel:+15033580443` (copy-paste error in the Elementor widget) | `mailto:info@theburgersleeves.com` |
| Contact Us — "Location" card | linked to `tel:+15033580443` | no link; rendered as an `<address>` |
| Policy pages | `target="_new"` (invalid HTML) on same-site links | attribute removed; links stay in the same tab |
| Header / footer social icons | `<a target="_blank">` with **no `href`** on all six icons | rendered as decorative `<span>` marks — the business has no social profiles (live `Organization` schema ships `sameAs: []`) |
