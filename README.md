# The Burger Sleeves — Astro

Static rebuild of `https://theburgersleeves.com`, migrated off WordPress +
WooCommerce + Elementor. Astro 7, TypeScript, one serverless function for the
enquiry forms.

See [`docs/MIGRATION_REPORT.md`](docs/MIGRATION_REPORT.md) for what changed and why,
and `docs/` for the URL, metadata, asset, link and schema audits.

---

## Quick start

```bash
cd "The Burger Sleeves/astro-site"
npm install
cp .env.example .env      # fill in SMTP credentials
npm run dev               # http://localhost:4321 — forms work here
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server. **The only mode where `/api/inquiry/` runs**, so use this to test forms. |
| `npm run build` | Regenerates OG images, then builds to `dist/`. |
| `npm run preview` | Serves `dist/client` at `http://127.0.0.1:8733` the way Vercel will — trailing slashes, real 404, production security headers. API routes are not served here. |
| `npm run validate` | 30+ post-build checks (URL parity, SEO, schema, links, residue, leaked secrets). Exits non-zero on failure. |
| `npm run check` | `astro check` — TypeScript across `.astro` and `.ts`. |
| `npm run reports` | Regenerates the CSV and Markdown audits in `docs/`. |
| `npm run og` | Rebuilds `public/og/*.jpg` social previews. |

**Local preview URL:** `http://127.0.0.1:8733/`

### Before every deploy

```bash
npm run build && npm run validate && npm run check && npm audit
```

All four must be clean.

---

## Layout

```
astro-site/
├── src/
│   ├── assets/images/       151 originals downloaded from the live site
│   ├── components/          Header, Footer, forms, gallery, tabs, cards, schema…
│   ├── config/              canonical origin
│   ├── data/                products, categories, homepage, about, policies,
│   │                        site chrome, page metadata  (generated once, committed)
│   ├── layouts/BaseLayout   <head>, header, footer, JSON-LD
│   ├── lib/                 catalog, routes, images, og, schema helpers
│   ├── pages/               file-based routes (see below)
│   └── styles/              design tokens + self-hosted Poppins
├── public/                  fonts, favicon, robots.txt, og/ (generated)
├── scripts/                 build-og-images · validate · preview · reports
└── vercel.json              redirects, security headers, cache policy
```

### Routes

| File | URLs |
| --- | --- |
| `pages/index.astro` | `/` |
| `pages/product/[slug].astro` | 44 × `/product/<slug>/` |
| `pages/product-category/[slug].astro` | 7 × `/product-category/<slug>/` |
| `pages/shop/[...page].astro` | `/shop/`, `/shop/page/2/`, `/shop/page/3/` |
| `pages/brand/the-burger-sleeves/[...page].astro` | `/brand/the-burger-sleeves/` + 2 pages |
| `pages/[policy].astro` | privacy, terms, shipping, refund_returns |
| `pages/about-us` · `contact-us` · `get-free-quote` · `thank-you` · `404` | one each |
| `pages/sitemap.xml.ts` | `/sitemap.xml` |
| `pages/api/inquiry.ts` | `POST /api/inquiry/` — the only server route |

### Editing content

Product copy, specifications, FAQs, images and metadata live in
`src/data/products.json`. Categories in `categories.json`, homepage sections in
`homepage.json`, policy copy in `policies.json`, nav and contact details in
`site.ts`, page titles and descriptions in `pages.ts`. Change the data, rebuild.
There is no CMS and no database.

Adding a product: append to `products.json`, add its images to
`src/assets/images/`, run `npm run og`, rebuild. The route, sitemap entry,
breadcrumb, schema and category listing all follow automatically.

---

## Environment variables

Server-side only; never exposed to the browser.

| Variable | Example |
| --- | --- |
| `SMTP_HOST` | `smtp.hostinger.com` |
| `SMTP_PORT` | `465` (implicit TLS) or `587` (STARTTLS) |
| `SMTP_USER` | `no-reply@theburgersleeves.com` |
| `SMTP_PASS` | *(mailbox password)* |
| `SMTP_TO` | `info@theburgersleeves.com` |
| `SMTP_FROM_NAME` | `The Burger Sleeves` |
| `SMTP_FROM_EMAIL` | `no-reply@theburgersleeves.com` |

`SMTP_FROM_EMAIL` must be a mailbox on a domain whose SPF/DKIM you control,
otherwise enquiries will land in spam. If any variable is missing the endpoint
returns 502 with a "please email or call us" message — **it never reports a
false success.**

---

## Deploying to Vercel

> Nothing has been deployed yet. DNS is untouched, the live WordPress site is
> untouched, and no sitemap has been submitted. Work through these steps in
> order and stop at step 6 until you have signed off on the preview.

### 1. The repository

The repo is rooted at this directory (`astro-site/`), **not** at the parent
folder — the WordPress SQL dump and XML/CSV exports live one level up and are
therefore outside the repository entirely. `.gitignore` additionally blocks
`.env`, `*.sql`, `*.xml`, `*.csv` (except the `docs/` audit CSVs) and
`public/og/`.

Always check before pushing:

```bash
git status --porcelain | grep -Ei '\.env$|\.sql|localhost|WordPress|wc-product'
# must print nothing
```

### 2. Import into Vercel

- New Project → import the repo
- **Root Directory:** `./` (the repo root *is* the Astro project)
- Framework: Astro (auto-detected)
- Build command: `npm run build` · Output: `dist` — both auto-detected
- Node.js version: **24** (the adapter warns on 25 locally; Vercel pins 24)

### 3. Add the environment variables

Project → Settings → Environment Variables → add all seven, for **Production**
and **Preview**.

### 4. Deploy to the preview URL

Deploy. You get `…vercel.app`. **Do not attach the production domain yet.**

### 5. Verify on the preview URL

```bash
BASE=https://<your-preview>.vercel.app

# every indexable URL returns 200
node -e "
const u=require('./scripts/live-urls.json').indexable;
(async()=>{let bad=0;for(const x of u){const p=new URL(x).pathname;
const r=await fetch(process.env.BASE+p,{redirect:'manual'});
if(r.status!==200){console.log(r.status,p);bad++}}
console.log(bad?bad+' FAILED':'all '+u.length+' OK')})()"

curl -sI $BASE/nope/            | head -1   # expect 404
curl -sI $BASE/about-us         | head -2   # expect 308 → /about-us/
curl -s  $BASE/sitemap.xml      | grep -c '<loc>'   # expect 61
curl -s  $BASE/robots.txt
curl -sI $BASE/ | grep -i 'content-security-policy\|strict-transport'
```

Then, in a browser: submit each of the three forms and confirm the mail
arrives; check the mobile menu, the product gallery, the FAQ accordions and the
product tabs; run Lighthouse on the homepage and a product page.

Canonicals on the preview deliberately point at `https://theburgersleeves.com`,
not the preview host — that is correct and prevents the preview being indexed.

### 6. Attach the domain — the cut-over

Only after sign-off.

1. Vercel → Settings → Domains → add **`theburgersleeves.com`** *and* **`www.theburgersleeves.com`**.
2. Set `www` to **redirect to** `theburgersleeves.com` (301). The apex is canonical, matching WordPress.
3. Update DNS at the registrar to the A / CNAME records Vercel shows. **Lower the TTL to 300s a day beforehand** so rollback is fast.
4. Wait for the certificate to issue; confirm HTTP → HTTPS redirects.
5. **Do not delete the WordPress hosting.** Keep it running, unlinked, for at least 30 days.

### 7. Post-deployment checks

Run on the live domain, in order:

- [ ] `https://theburgersleeves.com/` returns **200** over HTTPS
- [ ] `http://theburgersleeves.com/` **301s** to HTTPS
- [ ] `https://www.theburgersleeves.com/` **301s** to the apex
- [ ] All 61 sitemap URLs return **200** (script in step 5, with `BASE` changed)
- [ ] `/nope/` returns a real **404**, not a redirect to `/`
- [ ] `/cart/`, `/checkout/`, `/my-account/` return **404** (intended — all were `noindex`)
- [ ] `/sitemap_index.xml` **301s** to `/sitemap.xml`
- [ ] `/sitemap.xml` lists **61** URLs, all HTTPS on the apex, all trailing-slashed
- [ ] `/robots.txt` references `https://theburgersleeves.com/sitemap.xml`
- [ ] Spot-check 5 product pages: title, description and canonical match `docs/METADATA_COMPARISON.csv`
- [ ] Submit all three forms from a real browser; confirm delivery **and** that the reply-to is the enquirer
- [ ] Confirm the enquiry email contains the product name and source URL
- [ ] Google Rich Results Test on a product page and the homepage
- [ ] Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO
- [ ] Search Console: confirm the property, **then** submit `/sitemap.xml`
- [ ] Search Console → Removals: nothing outstanding
- [ ] Watch Coverage and Core Web Vitals daily for the first week

### 8. Rollback to WordPress

The WordPress installation is untouched by this migration, so rollback is a DNS
change and nothing more.

**If a problem appears within minutes (DNS still cached):**

1. Vercel → Settings → Domains → **remove** `theburgersleeves.com` and `www`.
2. Restore the original A / CNAME records at the registrar (record them **before** step 6).
3. With TTL at 300s, traffic returns to WordPress within ~5 minutes.
4. Confirm `https://theburgersleeves.com/` serves WordPress again and forms submit.

**If a problem appears later, or hosting has been touched:**

1. Restore the DNS records as above.
2. If WordPress files were changed, restore from the host's backup or from `localhost.sql` plus the `wp-content` directory.
3. Import `localhost.sql` into the WordPress database (`mysql -u <user> -p <db> < localhost.sql`).
4. Flush the LiteSpeed cache and re-save permalinks (Settings → Permalinks → Save) so `/product/` and `/product-category/` rewrites regenerate.
5. Verify `/sitemap_index.xml` responds and re-submit it in Search Console.

**Do not delete the WordPress hosting for at least 30 days** after cut-over.

---

## Known items

Two open questions and three minor notes are recorded in §11 of
`docs/MIGRATION_REPORT.md`. The headline one: brand red `#FF0000` scores 3.998:1
against white and fails WCAG AA for normal text. It is inherited from the live
design and was deliberately left alone. Changing `--red` to `#ee0000` in
`src/styles/global.css` scores 4.53:1 and is visually indistinguishable — a
one-line change once the client approves it.
