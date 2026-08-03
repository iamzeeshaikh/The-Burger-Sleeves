# Quarantined product imagery — do not ship

These 42 files were removed from `src/assets/images/` because they carry
branding, trademarks or template watermarks that The Burger Sleeves does not
own. They are kept here as the audit record, deliberately **outside** the
`src/assets/images/*` glob in `src/lib/images.ts`, so Astro never processes them
and they are never emitted to `/_astro/` or served.

They were originally left in place and simply de-referenced from the product
data. That was not enough: Astro's eager glob still processed every file in the
directory, so the images stayed publicly downloadable at their hashed `/_astro/`
URLs even though no page linked to them. Moving them out of the glob is what
actually stops them being served.

**Do not "clean" these by editing out a logo or watermark and reusing the
image.** Altering a third-party copyrighted photograph to disguise its origin is
worse than leaving it alone. They need replacing with owned or properly licensed
photography.

What is in each file, and which product referenced it, is recorded in
`docs/PRODUCT_IMAGE_INVENTORY.csv` (rows with `role=excluded`) and summarised in
`docs/MEDIA_AUDIT_REPORT.md`.
