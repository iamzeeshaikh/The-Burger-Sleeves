# Deployment Report

Generated 2026-08-03.

## Status

| | |
| --- | --- |
| Vercel project | `the-burger-sleeves` (`prj_TfjXx7SU9NQINIpwwV4xX36c2Oo3`), existing — no duplicate created |
| Preview deployment | https://the-burger-sleeves-l894al4hj-iamzeeshaikhs-projects.vercel.app |
| Production deployment | https://the-burger-sleeves.vercel.app |
| Commit deployed | see `git log` — the checkpoint tagged in CONTENT_UPGRADE_REPORT.md |
| `https://theburgersleeves.com/` | **still served by WordPress.** See "The domain has not been cut over" below. |

## The domain has not been cut over

`theburgersleeves.com` resolves to Cloudflare (`172.67.191.175`, `104.21.68.77`,
nameservers `olivia`/`corey.ns.cloudflare.com`) and Cloudflare is proxying the
existing WordPress install — the response carries `x-httpd-modphp` and
`wp-json` link headers. The domain is **not attached to any Vercel project**;
`vercel domains ls` does not list it.

So deploying to the Vercel production project does not change what a visitor to
`https://theburgersleeves.com/` sees, and verification of that URL shows the
old WordPress site because that is what is still serving it.

Cutting over means pointing the Cloudflare DNS records at Vercel, which
**replaces the live site**. That is a one-way, outward-facing change to a
running business site, so it has been left for an explicit go-ahead rather than
performed as part of a deployment task. The steps are:

1. Add `theburgersleeves.com` and `www.theburgersleeves.com` to the
   `the-burger-sleeves` Vercel project.
2. In Cloudflare DNS, replace the proxied A records for the apex with Vercel's
   target, and point `www` at Vercel. Nameservers do not need to change —
   Cloudflare stays the DNS host.
3. Set `www` to redirect to the apex (or the reverse) so one hostname is
   canonical, matching the `https://theburgersleeves.com/` canonicals already
   in the HTML.
4. Re-run the live verification below against the real domain.

Until then, `www`/non-www behaviour, HTTP→HTTPS on the apex and 410/404
behaviour on the live domain remain governed by Cloudflare and WordPress, not
by this build.

### Rollback

Nothing about the live site has been changed, so no rollback is required for the
current state. After a cutover, rollback is: restore the previous Cloudflare DNS
records for the apex and `www`. Vercel-side rollback is
`vercel rollback <previous-deployment-url>` or promoting the prior deployment
from the project's Deployments tab.

## Verification performed on the Vercel production deployment

| Check | Result |
| --- | --- |
| All 61 indexable URLs | 61/61 return 200 |
| All 44 product pages | 44/44 return 200 |
| Trailing slashes | preserved; `/feed` → 308 → `/feed/` |
| Canonicals | all `https://theburgersleeves.com/...` |
| Production indexable | `index, follow, max-image-preview:large, …` |
| Preview noindex | `noindex, nofollow` — verified on the preview URL |
| `/sitemap.xml` | 200, 61 canonical trailing-slash URLs, no WordPress paths |
| `/robots.txt` | 200, references the sitemap, disallows wp-admin / wp-login / wp-json / `?s=` / add-to-cart / api |
| Unknown URL | genuine 404 |
| Removed RSS feed | 410 Gone with `X-Robots-Tag: noindex` (was a 302 to the homepage, a soft 404) |
| Redirect chains / loops | none; 4 redirects remain, all 301 |
| Security headers | CSP, HSTS (2 years, preload), X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP all present |
| Schema on product pages | Organization, WebSite, BreadcrumbList, Product, FAQPage — no offers, ratings or reviews |
| FAQ schema parity | 12 schema FAQs = 12 visible FAQs, 0 mismatches on the page sampled |

## Forms

Tested against the deployed serverless function, not a local mock.

| Test | Result |
| --- | --- |
| `GET /api/inquiry/` | 405 Method Not Allowed |
| Cross-origin POST | 403 — Astro's origin check rejects it |
| Missing required fields | 303 back to the form with a readable error in the query string |
| Invalid email | 303 back with "Please enter a valid email address." |
| `.exe` upload | rejected — "That file type is not accepted. Send a PDF, AI, EPS, PNG, JPG, SVG or ZIP." |
| Honeypot filled | silently redirected to `/thank-you/`; no mail sent |
| Rate limiting | triggered after 5 posts in the 10-minute window, with a clear message |
| Valid submission with PDF artwork | **303 → `/thank-you/`**, which the endpoint only issues after nodemailer confirms delivery |
| Product preselect | product pages render `value="Kraft Burger Sleeves" readonly required` |
| Page URL captured | included in the email body as "Submitted from" |
| Required-field semantics | `required` + `aria-required="true"` on email and product |
| SMTP secrets | not present in any client or server bundle; `.env` untracked; `.env.example` holds names only |

## Responsive QA

`node scripts/responsive-qa.mjs` drives the installed Chrome over the DevTools
Protocol using Node's built-in WebSocket — no Playwright or Puppeteer was added.
It measures real `scrollWidth` against the viewport at each width and names any
element that sticks out.

12 pages × 5 widths (320, 375, 768, 1024, 1440): **no horizontal overflow at any
width**. Pages covered: homepage, one product from each of the four content
groups, a category page, shop, about, contact, the quote form, a policy page and
the 404.

An initial pass with plain `--headless --window-size` appeared to show overflow
at 320px and 375px. That was an artefact: old headless mode does not apply
mobile viewport emulation, so the page laid out at desktop width and the
screenshot cropped it. Measuring with proper device metrics showed zero
overflow.

## Open items needing client assets

None of these is a false claim — those are all resolved — but each is a real gap
a buyer can see.

| Item | Products | Needed |
| --- | --- | --- |
| No product photography at all | TBS-002 Cardboard, TBS-012 Disposable, TBS-020 Black Printed | Real photographs; placeholder shown, no lookalike substituted |
| Photography does not show the product | TBS-004 Corrugated — five images show smooth board, two carry third-party branding (a White Castle clamshell, a "Burger Brother" tray), one is a stock mockup template | Photographs of the actual fluted construction |
| Photography shows a different product | TBS-005 Recycled — "Speckled Recycled" is foil-lined bags holding a hot dog | Replacement image; the alt text has been corrected to describe what is visible |
| Shared/mislabelled imagery | TBS-044 reuses TBS-042's image | Distinct photography |
| Product name carries a claim | TBS-006 "Eco Friendly Burger Sleeves" | A rename would break URL parity, so the name stands. Everything under it is corrected. A business decision, not a content defect |
| Possible catalogue duplication | TBS-003 Paper and TBS-002 Cardboard | Confirm whether these are two products; both URLs preserved meanwhile |

## Recommended GSC URL Inspection after cutover

Submit these first — they are the pages whose content or metadata changed most,
plus the hubs that distribute crawl:

1. `https://theburgersleeves.com/` — homepage claims changed
2. `https://theburgersleeves.com/product/food-grade-burger-sleeves/` — FDA claim removed
3. `https://theburgersleeves.com/product/eco-friendly-burger-sleeves/` — compostable/biodegradable claims removed
4. `https://theburgersleeves.com/product/burger-and-fries-sleeves/` — structural claim removed
5. `https://theburgersleeves.com/product/white-printed-burger-sleeves/` — product description corrected
6. `https://theburgersleeves.com/product/disposable-burger-sleeves/` — meta description was describing a different product
7. `https://theburgersleeves.com/product/jumbo-burger-sleeves/` — specification table claims requalified
8. `https://theburgersleeves.com/shop/` — links to all 44 products
9. `https://theburgersleeves.com/product-category/burger-sleeves-materials/` — category meta description changed
10. `https://theburgersleeves.com/sitemap.xml` — resubmit so the 61 URLs recrawl

Do not submit `/feed/`; it is intentionally 410.
