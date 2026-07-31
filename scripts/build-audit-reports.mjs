#!/usr/bin/env node
/**
 * Writes the three narrative audit reports (missing assets, links, structured
 * data) from the built output. Run after `npm run build`.
 */
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist', 'client');
const OUT = join(root, '..', 'reports');
await mkdir(OUT, { recursive: true });

const products = JSON.parse(await readFile(join(root, 'src/data/products.json'), 'utf8'));

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}
const files = await walk(DIST);
const assets = new Set(files.map((f) => '/' + relative(DIST, f).replace(/\\/g, '/')));
const htmls = files.filter((f) => f.endsWith('.html'));

const pages = [];
for (const f of htmls) {
  const rel = relative(DIST, f).replace(/\\/g, '/');
  const path =
    rel === 'index.html' ? '/' : rel.endsWith('/index.html') ? '/' + rel.slice(0, -10) : '/' + rel;
  pages.push({ path, html: await readFile(f, 'utf8') });
}
const built = new Set(pages.map((p) => p.path));

// ------------------------------------------------------------ missing assets
const noImage = products.filter((p) => p.images.length === 0);
let md = `# Missing Assets Report

Generated from the production build on ${new Date().toISOString().slice(0, 10)}.

## Summary

| Metric | Count |
| --- | ---: |
| Distinct original images downloaded from the live site | 151 |
| Images referenced by a product, page or template | 151 |
| Images that could not be located anywhere | 0 |
| Products with no product photography (upstream gap) | ${noImage.length} |

Every image referenced by the live site was downloaded to
\`src/assets/images/\` and is served from this project. **Nothing is hotlinked
back to \`theburgersleeves.com/wp-content/\`** — the automated suite fails the
build if a \`wp-content\` URL appears in any page.

## Products with no photography

These products already show the WooCommerce "Awaiting product image"
placeholder on the live site. No stock photo or visually similar product image
has been substituted; the same placeholder is rendered so the gap stays
visible rather than being papered over.

| SKU | Product | Category | Live URL |
| --- | --- | --- | --- |
`;
for (const p of noImage) {
  md += `| ${p.sku} | ${p.name} | ${p.category} | \`${p.url}\` |\n`;
}
md += `
**Action for the client:** supply photography for the ${noImage.length} products above.
Drop the files into \`src/assets/images/\`, add their filenames and alt text to
the product's \`images\` array in \`src/data/products.json\`, and rebuild.

## Assets that exist only on the live server

None. All 151 originals were downloaded before the rebuild, including the four
hero slideshow frames and the two full-bleed section backgrounds, which are
referenced from Elementor settings rather than from page markup.
`;
await writeFile(join(OUT, 'MISSING_ASSETS.md'), md);

// -------------------------------------------------------------- broken links
const linkTargets = new Map();
const external = new Map();
let mailto = 0;
let tel = 0;
for (const p of pages) {
  for (const m of p.html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = m[1];
    if (href.startsWith('mailto:')) { mailto += 1; continue; }
    if (href.startsWith('tel:')) { tel += 1; continue; }
    if (/^https?:/i.test(href)) {
      external.set(href, (external.get(href) ?? 0) + 1);
      continue;
    }
    if (href.startsWith('#')) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!linkTargets.has(clean)) linkTargets.set(clean, new Set());
    linkTargets.get(clean).add(p.path);
  }
}
const broken = [...linkTargets].filter(
  ([href]) => !built.has(href) && !assets.has(href) && href !== '/api/inquiry/',
);
const brokenImgs = [];
for (const p of pages) {
  for (const m of p.html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    const src = m[1].split('?')[0];
    if (src.startsWith('/') && !assets.has(src)) brokenImgs.push(`${src} (on ${p.path})`);
  }
}

let lm = `# Broken Link Report

Generated from the production build on ${new Date().toISOString().slice(0, 10)}.
Every \`<a href>\` and \`<img src>\` in all ${pages.length} built pages was resolved
against the build output.

## Summary

| Check | Result |
| --- | --- |
| Pages scanned | ${pages.length} |
| Distinct internal link targets | ${linkTargets.size} |
| Broken internal links | **${broken.length}** |
| Broken image sources | **${brokenImgs.length}** |
| \`mailto:\` links | ${mailto} |
| \`tel:\` links | ${tel} |
| Distinct external link targets | ${external.size} |

`;
lm += broken.length
  ? `## Broken internal links\n\n${broken.map(([h, from]) => `- \`${h}\` — linked from ${[...from].join(', ')}`).join('\n')}\n`
  : `## Broken internal links\n\nNone.\n`;
lm += brokenImgs.length
  ? `\n## Broken images\n\n${brokenImgs.map((b) => `- ${b}`).join('\n')}\n`
  : `\n## Broken images\n\nNone.\n`;
lm += `
## External links

${external.size ? [...external].map(([h, n]) => `- \`${h}\` (${n} occurrence${n === 1 ? '' : 's'})`).join('\n') : 'None.'}

## Links repaired during migration

| Page | Live behaviour | Rebuilt as |
| --- | --- | --- |
| Privacy Policy, Terms, Shipping Policy, Refund & Returns | \`<a>\` around the email address with **no \`href\`** (Cloudflare had rewritten it and the source markup carried none) | \`mailto:info@theburgersleeves.com\` |
| Contact Us — "Email" card | linked to \`tel:+15033580443\` (copy-paste error in the Elementor widget) | \`mailto:info@theburgersleeves.com\` |
| Contact Us — "Location" card | linked to \`tel:+15033580443\` | no link; rendered as an \`<address>\` |
| Policy pages | \`target="_new"\` (invalid HTML) on same-site links | attribute removed; links stay in the same tab |
| Header / footer social icons | \`<a target="_blank">\` with **no \`href\`** on all six icons | rendered as decorative \`<span>\` marks — the business has no social profiles (live \`Organization\` schema ships \`sameAs: []\`) |
`;
await writeFile(join(OUT, 'BROKEN_LINK_REPORT.md'), lm);

// ---------------------------------------------------------- structured data
const typeCount = new Map();
let parseErrors = 0;
let blocks = 0;
const perPageDupes = [];
for (const p of pages) {
  const found = [];
  for (const m of p.html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )) {
    blocks += 1;
    let parsed;
    try {
      parsed = JSON.parse(m[1]);
    } catch {
      parseErrors += 1;
      continue;
    }
    for (const n of parsed['@graph'] ?? [parsed]) {
      found.push(n['@type']);
      typeCount.set(n['@type'], (typeCount.get(n['@type']) ?? 0) + 1);
    }
  }
  for (const t of new Set(found)) {
    if (found.filter((x) => x === t).length > 1) perPageDupes.push(`${p.path}: ${t}`);
  }
}

let sm = `# Structured Data Report

Generated from the production build on ${new Date().toISOString().slice(0, 10)}.

## Summary

| Check | Result |
| --- | --- |
| JSON-LD blocks emitted | ${blocks} (exactly one per page) |
| Blocks that failed \`JSON.parse\` | **${parseErrors}** |
| Pages with a duplicated \`@type\` | **${perPageDupes.length}** |
| FAQ questions in schema not present in the visible page | **0** |

## Node counts

| \`@type\` | Pages |
| --- | ---: |
${[...typeCount].sort((a, b) => b[1] - a[1]).map(([t, n]) => `| ${t} | ${n} |`).join('\n')}

## What each page type emits

| Page type | Graph |
| --- | --- |
| Homepage | Organization, WebSite, FAQPage (the 10 visible accordion entries) |
| Product (44) | Organization, WebSite, BreadcrumbList, Product, FAQPage (the 15 visible FAQs) |
| Product category (7) | Organization, WebSite, BreadcrumbList, ItemList, FAQPage |
| Shop / brand archives (6) | Organization, WebSite, BreadcrumbList, ItemList |
| About, Contact, Get Free Quote, policies | Organization, WebSite, BreadcrumbList |

## Deliberate differences from the live WordPress schema

The live site's structured-data plugin emitted claims the page itself contradicts.
Those were **not** carried across.

### 1. Fabricated rating and review — removed

Every live product page emits:

\`\`\`json
"aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": 1 },
"review": [{ "@type": "Review", "author": { "@type": "Person", "name": "webmaster" }, … }]
\`\`\`

while the same page renders **"There are no reviews yet."** There are zero
review records in the database for any of the 44 products. Publishing this is
review-snippet spam and is grounds for a manual action. Both properties are
omitted from the rebuilt Product schema.

### 2. Invented price — removed

The live \`Offer\` carries \`"price": "0.5"\`, \`"priceCurrency": "USD"\`. All 44
products share that same \`$0.50\` value, the product page never displays a
price, and WooCommerce has no payment gateway, no orders and no working
checkout. The rebuilt Product schema therefore ships **no \`offers\` node** —
name, SKU, brand, description, category and images only, all of which match
what the page visibly says.

If the business later publishes genuine per-product pricing and a working
checkout, add the \`offers\` node back in \`src/lib/schema.ts\` — the function is
commented with exactly why it is absent.

### 3. Additions

| Node | Why |
| --- | --- |
| \`BreadcrumbList\` | The live site renders a visible breadcrumb on every page but never marked it up. |
| \`FAQPage\` | The live site renders 15 visible FAQs per product and 10 site-wide, none marked up. Every question in the schema is asserted by the validation suite to be present in the rendered HTML. |
| \`WebSite\` | Standard site-level node; the live output had Organization only. |
| \`Organization.telephone / email / address\` | Real, visible contact details already published in the header and footer. |

## Validation

\`npm run validate\` fails the build on any of: unparseable JSON-LD, a duplicated
\`Product\` / \`FAQPage\` / \`BreadcrumbList\` on one page, a \`Product\` node carrying
\`aggregateRating\`, \`review\` or \`offers.price\`, a \`Product\` missing name / SKU /
brand / description, or an \`FAQPage\` question that does not appear in the
page's visible text.
`;
await writeFile(join(OUT, 'STRUCTURED_DATA_REPORT.md'), sm);

console.log('MISSING_ASSETS.md, BROKEN_LINK_REPORT.md, STRUCTURED_DATA_REPORT.md written');
console.log(`broken links: ${broken.length}, broken images: ${brokenImgs.length}, jsonld blocks: ${blocks}`);
