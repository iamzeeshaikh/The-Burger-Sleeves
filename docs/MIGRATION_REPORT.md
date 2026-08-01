# The Burger Sleeves — WordPress → Astro Migration Report

**Source:** `https://theburgersleeves.com` (WordPress 6.x + WooCommerce 10.9.4 + Elementor Pro 4.1.1, Hello Elementor theme, Yoast SEO)
**Target:** Astro 7.1.6 static site + one serverless function, in `astro-site/`
**Status:** Built, validated and QA'd locally. **Not deployed.**
**Date:** 2026-07-31

---

## 1. Headline numbers

| Metric | Count |
| --- | ---: |
| Indexable URLs on the live site (Yoast sitemap) | **61** |
| Indexable URLs rebuilt and returning 200 | **61** (100%) |
| Live indexable URLs that changed | **0** |
| 301 redirects introduced | 5 rules (sitemap paths + category pagination) |
| Total pages built | **67** (61 indexable + 4 paginated archives + `/thank-you/` + `404.html`) |
| Products migrated | **44** of 44 |
| Product categories migrated | **7** of 7 |
| Brand archive migrated | 1 |
| Standard + policy pages migrated | **9** |
| Images downloaded and served locally | **151** of 151 |
| Images still hotlinked from WordPress | **0** |
| Product specification tables migrated | **44** |
| Product FAQs migrated | **660** (15 × 44) |
| Site-wide FAQs migrated | **10** |
| Forms implemented | **3** variants (hero/sidebar, contact, full quote) |
| Metadata fallbacks authored | **14** descriptions (see §6) |
| JavaScript shipped, whole site | **3.7 KB** (uncompressed, 3 files) |
| Unresolved issues | **2** (see §11) |

---

## 2. Phase 1 — what the source material turned out to be

Every file in the supplied folder was parsed. Filenames were ignored; content
decided what each file was.

### Elementor JSON exports

| File | Declared `title` / `type` | What it actually is |
| --- | --- | --- |
| `elementor-310-…json` | Footer CTA / `section` | The "Ready to Elevate Your Burger Packaging?" band reused on the homepage, product, category, About and Contact pages |
| `elementor-337-…json` | Header / `header` | Announcement bar + logo + nav + "Call Us Now" |
| `elementor-343-…json` | Footer / `footer` | Four-column footer + black copyright bar |
| `elementor-350-…json` | Category template / `product-archive` | The `product_cat` archive layout (red band, 70/30 grid + quote form, FAQ, CTA) |
| `elementor-361-…json` | Single Product / `product` | The product template (three equal columns, tabs, related, CTA) |
| `elementor-421-…json` | popup / `popup` | A modal containing the same compact quote form as the hero |
| `elementor-572-…json` | Homepage / `page` | The 10-section homepage |

### Other sources

- **`localhost.sql`** (13.8 MB) — read for options and evidence only. Key findings: `active_plugins` (12, no payment gateway), `lqx_wc_orders` **0 rows**, `lqx_woocommerce_payment_tokens` **0 rows**, `lqx_e_submissions` 7 rows. No content was taken from it that was not also in the XML/CSV.
- **`theburgersleeves.WordPress.2026-07-30.xml`** (2.3 MB) — 44 products, 13 pages, 153 attachments, 22 nav menu items, 7 Elementor templates. Source of truth for **slugs** and **nav structure**.
- **`theburgersleeves.WordPress.2026-07-30 (1).xml`** — attachments only (153); merged for alt text.
- **`wc-product-export-…csv`** — 44 simple products. Source of truth for SKU, category, short description, specifications, FAQs, image order and Yoast title/description.
- **Screenshots** — used for visual comparison only. Both were captured while logged into WP admin, so the admin bar and the SG AI Studio floating buttons in them are **not** part of the public site and were not reproduced.

### Live-site audit

All 61 sitemap URLs plus `/thank-you/`, `/cart/`, `/checkout/`, `/my-account/`
and the paginated archives were crawled and stored before any code was written.
Metadata, headings, JSON-LD, images and internal links were extracted from the
**rendered live HTML**, which is the highest-priority source in the brief's
conflict order.

---

## 3. URL parity

**No indexed URL changed.** `trailingSlash: 'always'`, canonical host
`https://theburgersleeves.com` (apex, HTTPS), directory-format output.

| URL group | Live | Rebuilt | Status |
| --- | ---: | ---: | --- |
| Homepage | 1 | 1 | unchanged, 200 |
| Products `/product/<slug>/` | 44 | 44 | unchanged, 200 |
| Categories `/product-category/<slug>/` | 7 | 7 | unchanged, 200 |
| Brand `/brand/the-burger-sleeves/` | 1 | 1 | unchanged, 200 |
| Shop `/shop/` | 1 | 1 | unchanged, 200 |
| Standard pages | 3 | 3 | unchanged, 200 |
| Policy pages | 4 | 4 | unchanged, 200 |
| Paginated archives (`/page/2/`, `/page/3/`) | 4 | 4 | unchanged, 200, excluded from sitemap exactly as Yoast did |
| `/thank-you/` | 1 | 1 | unchanged, 200, `noindex, nofollow` preserved |

`/refund_returns/` keeps its underscore. `/product/` and `/product-category/`
prefixes are untouched. Unknown URLs return a genuine 404 — nothing is
redirected to the homepage.

Full detail: `reports/URL_INVENTORY.csv`, `reports/URL_COMPARISON.csv`.

### Redirects (5 rules, `astro-site/vercel.json`)

| Source | Destination | Code | Why |
| --- | --- | --- | --- |
| `/sitemap_index.xml` | `/sitemap.xml` | 301 | Yoast index consolidated into one sitemap |
| `/{page,post,product,product_cat,product_brand,category}-sitemap*.xml` | `/sitemap.xml` | 301 | Yoast child sitemaps |
| `/product-category/:slug/page/:n` | `/product-category/:slug/` | 301 | WordPress served thin duplicate pages here; no category has more than 16 products |
| `/feed` | `/` | 302 | No blog content; temporary while the client decides |
| HTTP → HTTPS, `www` → apex | | 301 | HTTP is automatic on Vercel; **`www` must be configured in the Vercel dashboard** (see §13) |

No chains, no loops: every redirect lands on a URL that returns 200 directly.

### Retired URLs (404, deliberately not redirected)

`/cart/`, `/checkout/`, `/my-account/`. All three are `noindex, nofollow` on
the live site, so there is no ranking to preserve, and there is no relevant
replacement to 301 to. See §5 for the evidence behind retiring the cart.

---

## 4. Content parity

Every piece of visible content was migrated. Nothing was rewritten, shortened,
expanded or replaced.

| Content | Migrated |
| --- | --- |
| Homepage sections | 10 of 10, in order |
| Product short descriptions | 44 |
| Product long descriptions | 20 of 44 carry one (855–1,800 words); the other 24 are empty in WooCommerce. All 20 migrated with zero words lost. **An earlier revision of this report wrongly said all 44 were empty — that generalised from a single product and has been corrected.** Note these descriptions were never rendered on the live site: the Elementor product template has no description widget. |
| Specification tables | 44 (5–6 columns each, header rows preserved verbatim) |
| Product FAQs | 660, numbering (`1.`, `2.` …) preserved exactly |
| Site-wide FAQ accordion | 10 entries, on homepage and all 7 category pages |
| Policy page copy | 4 pages, headings, lists and paragraph order intact |
| About Us panels | 2 (both preserved — see §11) |
| Header / footer content | verbatim, including the shipping blurb and `@ 2026 TheBurgerSleeves. All rights reserved.` |
| Internal links | all preserved; destinations unchanged |

### Markup residue cleaned

The WooCommerce product meta had been pasted out of an AI chat interface. The
raw fields carried the chat UI's own markup:

```html
<article class="text-token-text-primary w-full focus:outline-none [--shadow-height:45px] …"
         data-turn-id="2ce45647-…" data-testid="conversation-turn-66" data-turn="assistant">
  <div class="text-base my-auto mx-auto [--thread-content-margin:--spacing(4)] …">
```

…wrapped around every product's FAQ block, and `class="font-claude-response-body
break-words whitespace-normal leading-[1.7]"` on every short-description
paragraph. All of it was stripped; the `<h3>`/`<p>` pairs and paragraph text
inside were kept byte-for-byte. Also removed: `data-start` / `data-end`
editor attributes, WordPress/Elementor shortcode remnants, empty elements, and
Cloudflare's `__cf_email__` obfuscation (decoded back to
`info@theburgersleeves.com`).

The automated suite fails the build if any of these patterns reappear.

### Heading structure

One `<h1>` per page, verified across all 66 indexable pages.

Four live pages ship **no `<h1>` at all** — the Elementor page-title widget was
set to `h2`. Those are `/about-us/`, `/contact-us/`, `/get-free-quote/` and
`/thank-you/`. The rebuild promotes the existing visible title to `<h1>`. **No
text was added or changed** — only the element level. Every other page's H1
text is byte-identical to the live page (`reports/METADATA_COMPARISON.csv`,
column `h1_change`).

---

## 5. Commerce vs. quotation — the cart decision

The brief asks whether this is a real store or a quotation site, and to retain
"Add to Cart" only if there is "a genuine, complete, required checkout
process." The evidence says there is not:

| Evidence | Finding |
| --- | --- |
| Product prices | **All 44 products are priced `$0.50`** — a placeholder, identical across kraft, printed, jumbo and slider sleeves |
| Price on the product page | **Not displayed.** The product template has no price widget; `$0.50` appears only on loop cards |
| Homepage product grid | Price and Add-to-cart button are set to `font-size: 0px` in `post-271.css` — the live design already hides them |
| Payment gateways | **None active.** `active_plugins` lists no Stripe/PayPal/WooPayments plugin, and `/checkout/` renders with zero payment methods |
| Orders placed, ever | **0** (`lqx_wc_orders`) |
| Stored payment tokens | **0** (`lqx_woocommerce_payment_tokens`) |
| Cart/checkout/account pages | `noindex, nofollow`, absent from the sitemap |
| Primary CTA on every page | "Get Free Quote" / "Request Free Quote" / "Call Us Now" |
| Dedicated quote page | `/get-free-quote/` with a full spec form (size, unit, colours, three quantity tiers, artwork upload) |
| Form submissions on record | 7 (`lqx_e_submissions`) |

**Conclusion: this is a lead-generation site with a non-functional WooCommerce
shell on top.** Accordingly:

- The product page's `[qty] [Add to cart]` block is replaced by a **"Get Free
  Quote"** button in the same position with the same button styling; it jumps
  to the quote form already on the page.
- On `/shop/` and `/brand/`, the `$0.50` line and grey "Add to cart" button are
  replaced by a **"Get Free Quote"** link in the same slot. Grid, spacing,
  typography and card dimensions are unchanged.
- On the homepage and related-products grids nothing changes visually, because
  the live CSS already hid the price and button there.
- `/cart/`, `/checkout/` and `/my-account/` are not rebuilt.
- `Product` JSON-LD carries **no `offers` node** (see §8).

If genuine per-product pricing and a payment gateway are introduced later,
this is reversible: re-add the price to `products.json`, restore the `offers`
node in `src/lib/schema.ts` (the function documents exactly what to put back),
and swap the quote button for a cart form.

---

## 6. SEO parity

### Titles and canonicals

| Check | Result |
| --- | --- |
| Titles byte-identical to live | **66 / 66** |
| Canonicals byte-identical to live | **65 / 66** |
| H1 text changed | **0** |
| Duplicate titles | 0 |
| Duplicate canonicals | 0 |
| Canonicals on a dev/preview host | 0 |

The one canonical difference is `/thank-you/`, which had **no** canonical on the
live site; the rebuild adds a self-canonical. The page stays `noindex, nofollow`,
so this changes nothing for search.

Product titles and descriptions come from the Yoast fields in the WooCommerce
export (source priority 1) and were verified character-for-character against
the rendered live pages. **No existing metadata was replaced with generated
text.**

### Metadata fallbacks — 14 authored descriptions

These pages ship **no `<meta name="description">` at all** on the live site
(Yoast was never filled in). Descriptions were authored at 120–130 characters,
no keyword stuffing, and are marked `descriptionSource: 'authored'` in
`src/data/pages.ts`:

| Page | Chars |
| --- | ---: |
| `/shop/` (+ 2 paginated) | 120 |
| `/brand/the-burger-sleeves/` (+ 2 paginated) | 126 |
| `/about-us/` | 121 |
| `/contact-us/` | 116 |
| `/get-free-quote/` | 118 |
| `/privacy-policy/` | 126 |
| `/terms-and-conditions/` | 116 |
| `/shipping-policy/` | 126 |
| `/refund_returns/` | 128 |
| `/thank-you/` | 62 (noindex) |

All 44 products and all 7 categories already had Yoast descriptions; those are
preserved unchanged.

### Open Graph and Twitter

`og:locale`, `og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`,
`og:image` and `twitter:card` on every page. The live site was missing
`og:image` on 19 pages; the rebuild supplies one on every page from the page's
own primary photograph, served from stable `/og/<name>.jpg` URLs (1200px JPEG,
regenerated by `npm run og`) so the URL does not churn between builds.

### Sitemap and robots

`/sitemap.xml` — the exact path the live `robots.txt` advertises — with all **61**
indexable URLs, absolute HTTPS on the canonical host, trailing slashes intact,
no duplicates, no redirects, no `noindex` pages, no API routes, no paginated
archives (matching Yoast). `robots.txt` allows everything, references the
sitemap, and disallows only genuinely dead WordPress paths. CSS, JS, images and
fonts are all crawlable.

---

## 7. Visual parity

Rebuilt from the live Elementor stylesheets (`post-133/271/337/343/350/361/310/395/365/387/482.css`),
the live rendered DOM, and the supplied screenshots. Exact values carried over:

- Container widths **1140px** (kit default) and **1300px** (header, footer, most sections)
- Body **Poppins 17px** (15px ≤1024px), self-hosted, `font-display: swap`
- Section titles **40px / 500 / 1.2** (32px ≤1024, 30px ≤767)
- Brand red **`#FF0000`**, text/heading black **`#000000`**
- Buttons 17px / 500, padding 13px 20px; header CTA has a 2px red border
- Feature cards: 1px `#E3E3E3`, radius 10px, shadow `0 0 10px rgba(0,0,0,.07)`, padding 20px; grid 3→2→1 at 30px/20px gap
- WooCommerce loop cards: `#F1F1F1` on `#F5F5F5`, radius 5px, padding 10px, 20px gap, title 18px
- Red page-title band: 50px padding, centred white breadcrumb 17px/500 + centred white H1 40px/500
- Product hero: three equal 33% columns in a 1300px container; title 24px/600
- Category archive: 70% / 30% split, grid gaps 35px / 30px
- Footer `#F1F1F1` with a black copyright bar; headings 22px/600; list items 17px
- Hero background: the same 4-photo slideshow, 5s fade, Ken Burns zoom, 0.7 black overlay — rebuilt as a **CSS-only crossfade** with `prefers-reduced-motion` support, so no slider library ships

Screenshots were compared side by side against the live site at **1440px** and
**375px** for the homepage, a product page, a category page, the shop and the
contact page, and the layout re-checked at **320px**, **768px** and **1024px**.
Full-page heights now differ from the live site by 1–3% on desktop.

### Interaction differences (all deliberate)

| Live | Rebuilt | Why |
| --- | --- | --- |
| Hero "Get Free Quote" opens an Elementor modal containing the compact form | Links to `/get-free-quote/` | The same compact form is already visible beside the button; the modal duplicated it and required a JS modal library. `/get-free-quote/` is the fuller, indexable destination. |
| Product tabs: **Reviews (0)** \| Specifications \| Faqs, Reviews open by default | Specifications \| Faqs, Specifications open by default | Zero reviews exist on any product, and the tab's WordPress comment form has no backend once WordPress is gone. Shipping a form that cannot submit would violate "do not report success unless delivery succeeds." |
| Product page shows "Related Products" **and** the widget's own "Related products" `<h2>` | One heading | Template duplication; the automated suite now fails the build if it recurs. |
| `/shop/` has a "Default sorting" `<select>` | Omitted | It posted back to a WordPress query that no longer exists. |
| Header/footer social icons are `<a target="_blank">` with no `href` | Decorative `<span>` marks | No social profiles exist (live `Organization` schema ships `sameAs: []`). |
| Parent nav item stays black when you are on one of its products | Turns red | Standard wayfinding; a one-property change in `Header.astro` if you would rather it match exactly. |
| Compact enquiry forms have Name / Email / Product / Message | Adds an **optional Phone** field | Required by the brief's forms specification. One extra row, identically styled. |

---

## 8. Structured data

One JSON-LD block per page, 65 total. Full detail in
`reports/STRUCTURED_DATA_REPORT.md`. The two removals worth repeating here:

**Fabricated reviews removed.** Every live product page emitted
`aggregateRating: { ratingValue: "5", reviewCount: 1 }` and a `review` by
"webmaster", while the same page rendered *"There are no reviews yet."* There
are no review records in the database. This is review-snippet spam and a manual
action risk. It is gone.

**Invented price removed.** The live `Offer` published `"price": "0.5"` — the
placeholder shared by all 44 products, never shown on the product page, not
purchasable. The rebuilt `Product` node ships name, SKU, brand, description,
category and images only.

Added, because the content is visibly on the page and was never marked up:
`BreadcrumbList` (all 64 pages with a breadcrumb), `FAQPage` (52 pages),
`WebSite`, and real `telephone` / `email` / `address` on `Organization`.

---

## 9. Forms

Three variants of one component, posting to a single serverless endpoint
(`/api/inquiry/`) — the only non-static route on the site.

| Variant | Where | Fields |
| --- | --- | --- |
| `compact` | Homepage hero, product sidebar, category sidebar | Name, Email\*, **Phone**, Product\* (auto-filled and locked to the product being viewed), Message |
| `contact` | `/contact-us/` | Name, Email\*, **Phone**, Subject\*, Product\*, Message |
| `quote` | `/get-free-quote/` | Name, Email\*, **Phone**, Company\*, Product\*, Width\*, Height\*, Length\*, Unit\*, Colour\*, Quantity 1\*/2/3, Message, Artwork upload |

Every email includes the product name and the **full URL of the page the
enquiry came from**.

### Verified behaviour

| Test | Result |
| --- | --- |
| Valid submission | 200, mail delivered, `Reply-To` set to the enquirer |
| Works with JavaScript disabled | 303 → `/thank-you/`, matching the live Elementor flow |
| Honeypot filled | 200 to the bot, **no mail sent** |
| Invalid email | 400 with a field-level message |
| Missing required field | 400 |
| Contact variant without subject | 400 |
| Header injection (`CRLF` + `Bcc:` in the name) | Neutralised — no extra header created |
| Rate limit (6th request in 10 min from one IP) | 429 |
| `.php.jpg` declared as `application/x-php` | 415 rejected |
| `../../evil.php.jpg` declared as `image/jpeg` | Accepted but stored as `evil_php.jpg` — path stripped, inner dot collapsed, no double extension |
| 11 MB upload | 413 rejected |
| SMTP unreachable | **502 with an error message — never a false success** |
| `GET /api/inquiry/` | 405 |
| Cross-site POST | 403 (Astro's built-in CSRF origin check) |

Client-side validation mirrors the server, moves focus to the first bad field,
and announces status through an `aria-live` region. A no-JS failure returns
with `?error=` and the message is surfaced on arrival.

Credentials come from `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
`SMTP_TO`, `SMTP_FROM_NAME`, `SMTP_FROM_EMAIL` — server-side only, never in the
browser bundle. `.env.example` lists the names with no values; `.env` is
git-ignored and the build is scanned for leaked secrets.

---

## 10. Performance, accessibility and security

### Performance

Measured with Playwright, cold load, 1440×900.

| Page | Requests (live → new) | Transfer (live → new) | LCP (live → new) |
| --- | --- | --- | --- |
| Homepage | 91 → **36** | 2652 KB → **580 KB** | 8404 ms → **144 ms** |
| Product | 96 → **28** | 555 KB → **215 KB** | 1336 ms → **64 ms** |
| Category | 71 → **20** | 676 KB → **153 KB** | 828 ms → **52 ms** |
| Shop | 67 → **21** | 131 KB → **220 KB** | 768 ms → **56 ms** |

CLS is **≤ 0.0002** on every page (live: up to 0.031) because every image ships
explicit `width`/`height`. Shop transfers more than live only because live
serves 16 raw JPEGs lazily off-screen while the rebuild eagerly loads the first
row as optimised WebP.

*(New-site timings are from a local server, so latency is not comparable —
request counts, transfer sizes and CLS are.)*

No jQuery, no Elementor frontend bundle, no Swiper, no PhotoSwipe, no
WooCommerce scripts. Total JavaScript for the whole site: **3.7 KB** across
three files (nav, tabs, form). Fonts are self-hosted WOFF2 (Poppins, SIL OFL),
subsetted to latin + latin-ext, preloaded, `font-display: swap`.

### Accessibility

axe-core (`wcag2a`, `wcag2aa`, `wcag21aa`, `wcag22aa`, best-practice) at 1440px
and 375px across 8 representative pages. Fixed during QA: desktop nav caret was
an under-sized focus target (now a CSS pseudo-element; the real button only
exists on mobile) and the mobile materials table was a scroll region with no
keyboard access (now `tabindex="0"` with a labelled region).

Remaining, both discussed in §11: inherited brand-red contrast, and
`image-redundant-alt` (minor, caused by preserving WordPress alt text verbatim
as the brief requires).

Also implemented: semantic landmarks, skip link, keyboard-operable dropdowns
(hover **and** `:focus-within` **and** an explicit mobile control), `Escape` to
close, native `<details>` FAQ accordions, ARIA tabs with arrow-key support, a
gallery that switches with radio inputs so it works without JavaScript, visible
focus styles, labelled fields, and `prefers-reduced-motion` honoured by the
hero slideshow.

### Security

- CSP with `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'self'`, no `unsafe-eval`, no `unsafe-inline` on scripts (`frame-src` allows only Google Maps, for the contact-page embed)
- `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`, HSTS with preload, `Cross-Origin-Opener-Policy`
- Server-side validation, sanitisation and header-injection stripping on every field
- Upload MIME + extension allow-list, 10 MB cap, filename sanitisation, executables blocked
- Rate limiting and honeypot
- `npm audit`: **0 vulnerabilities** (a transitive `path-to-regexp` ReDoS advisory in the Vercel adapter is resolved with a pinned override in `package.json`)
- `.gitignore` blocks `.env`, `*.sql`, `*.xml`, `*.csv` and `_migration-work/`; the build output is scanned for credentials and private exports on every validation run

### Source safety

The supplied JSON, XML, CSV, SQL and screenshots were **read only**. Nothing was
modified, renamed, moved or deleted. Verify with:

```bash
ls -la "The Burger Sleeves"/*.{json,xml,csv,sql,png}   # timestamps unchanged
```

No database content, user record, email address from the DB, password hash or
private export is present in `astro-site/dist/`.

---

## 11. Unresolved issues

Both need a client decision. Neither blocks deployment.

### 1. Brand red fails WCAG AA contrast — needs sign-off

`#FF0000` on white is **3.998:1**; WCAG 2.2 AA requires 4.5:1 for normal text.
This affects white-on-red text in the announcement bar and buttons, and red
product titles on `/shop/`. **It is inherited from the live site**, and the
brief forbids introducing a new colour palette, so nothing was changed.

The fix is one line — `--red: #ee0000` in `src/styles/global.css`, which scores
**4.53:1** and is visually indistinguishable side by side. It is not applied
because it repaints every red pixel on the site and that is a brand decision.

### 2. Duplicated copy on `/about-us/` — flagged, not changed

The About page renders the *same* three paragraphs twice, in two alternating
panels with different photographs. Both panels are visible on every breakpoint
on the live site, so both were preserved — removing one would break visual
parity and delete indexed content. Worth rewriting the second panel, but that
is a content decision, not a migration one.

### Minor, noted only

- **`image-redundant-alt`** (axe, minor): product image alt text matches the adjacent link text. The alt strings come straight from WordPress and the brief requires preserving them, so they were left alone.
- **3 products have no photography** — `Cardboard Burger Sleeves` (TBS-002), `Disposable Burger Sleeves` (TBS-012), `Black Printed Burger Sleeves` (TBS-020). They already show the WooCommerce placeholder on the live site. No similar-looking substitute was assigned. See `reports/MISSING_ASSETS.md`.
- **Related products are deterministic** (same category, alphabetical, first four) rather than WooCommerce's per-request shuffle, so the block is stable across builds.

---

## 12. Automated validation

`npm run validate` reads `dist/client` and exits non-zero on any failure. It
currently passes clean:

```
pagesBuilt: 67
imagesRendered: 766
schemaTypes: {"Organization":65,"WebSite":65,"BreadcrumbList":64,"ItemList":13,"FAQPage":52,"Product":44}
sitemapUrls: 61
liveIndexableUrls: 61
rebuiltLiveUrls: 61

All checks passed.
```

Checks: every live indexable URL rebuilt · missing/duplicate titles ·
missing descriptions · missing/multiple H1 · heading-level skips · canonical
host, dev-host and self-consistency · duplicate canonicals · broken internal
links · broken images · missing alt · missing image dimensions · hotlinked
WordPress assets · unparseable JSON-LD · duplicate `Product`/`FAQPage`/
`BreadcrumbList` graphs · fabricated ratings, reviews and prices · FAQ schema
that is not visible on the page · sitemap host, trailing slashes, duplicates,
404s, `noindex` entries, pagination and API routes · sitemap/canonical
agreement · shortcode, Elementor and AI-export residue · placeholder content ·
unresolved Cloudflare email obfuscation · duplicate Related Products, forms and
Description headings · credentials or private exports in the build output.

Other gates: `npm run build` (clean), `npx astro check` (0 errors, 0 warnings,
0 hints), `npm audit` (0 vulnerabilities).

---

## 13. Deployment — see `astro-site/README.md`

Nothing has been deployed. DNS is untouched, the live WordPress site is
untouched, no sitemap has been submitted, and nothing has been pushed to
GitHub. `astro-site/README.md` contains the exact Vercel steps, the
post-deployment checks, and the WordPress rollback procedure.
