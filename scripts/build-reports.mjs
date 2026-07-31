#!/usr/bin/env node
/**
 * Generates the migration CSV deliverables by diffing the built site against
 * the metadata captured from the live WordPress pages before the cut-over.
 *
 *   node scripts/build-reports.mjs
 *
 * Writes into ../reports/ (outside the Astro build, never published).
 */
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist', 'client');
const OUT = join(root, '..', 'reports');
const ORIGIN = 'https://theburgersleeves.com';

await mkdir(OUT, { recursive: true });

const live = JSON.parse(await readFile(join(root, 'scripts', 'live-meta.json'), 'utf8'));

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const pages = new Map();
for (const f of files) {
  const rel = relative(DIST, f).replace(/\\/g, '/');
  let path;
  if (rel === 'index.html') path = '/';
  else if (rel.endsWith('/index.html')) path = '/' + rel.slice(0, -'index.html'.length);
  else path = '/' + rel;
  pages.set(path, await readFile(f, 'utf8'));
}

const grab = (html, re) => (html.match(re)?.[1] ?? '').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
const T = /<title>([\s\S]*?)<\/title>/i;
const D = /<meta name="description" content="([^"]*)"/i;
const C = /<link rel="canonical" href="([^"]*)"/i;
const R = /<meta name="robots" content="([^"]*)"/i;
const H1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i;

const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

function csv(rows) {
  const esc = (v) => {
    const s = v === undefined || v === null ? '' : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return rows.map((r) => r.map(esc).join(',')).join('\n') + '\n';
}

const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
const inSitemap = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(ORIGIN.length)),
);

// ---------------------------------------------------------------- inventory
const inventory = [
  [
    'url',
    'path',
    'type',
    'http_status',
    'in_sitemap',
    'robots',
    'title',
    'title_length',
    'meta_description',
    'description_length',
    'canonical',
    'h1',
    'h2_count',
    'h3_count',
    'image_count',
    'internal_links',
    'jsonld_types',
    'faq_count',
  ],
];

const kindOf = (p) => {
  if (p === '/') return 'homepage';
  if (p.startsWith('/product/')) return 'product';
  if (p.startsWith('/product-category/')) return 'product-category';
  if (p.startsWith('/brand/')) return 'brand-archive';
  if (p.startsWith('/shop/')) return 'shop-archive';
  if (/^\/(privacy-policy|terms-and-conditions|shipping-policy|refund_returns)\//.test(p))
    return 'policy';
  if (p === '/404.html') return '404';
  return 'page';
};

for (const [path, html] of [...pages].sort()) {
  const types = [...html.matchAll(/"@type":"([^"]+)"/g)].map((m) => m[1]);
  inventory.push([
    ORIGIN + path,
    path,
    kindOf(path),
    path === '/404.html' ? 404 : 200,
    inSitemap.has(path) ? 'yes' : 'no',
    grab(html, R),
    strip(grab(html, T)),
    strip(grab(html, T)).length,
    grab(html, D),
    grab(html, D).length,
    grab(html, C),
    strip(grab(html, H1)),
    (html.match(/<h2\b/g) ?? []).length,
    (html.match(/<h3\b/g) ?? []).length,
    (html.match(/<img\b/g) ?? []).length,
    new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1])).size,
    [...new Set(types)].join(' '),
    (html.match(/"@type":"Question"/g) ?? []).length,
  ]);
}
await writeFile(join(OUT, 'URL_INVENTORY.csv'), csv(inventory));

// --------------------------------------------------------------- comparison
const comparison = [
  ['live_url', 'live_status', 'new_path', 'new_status', 'action', 'in_new_sitemap', 'notes'],
];
for (const [path, meta] of Object.entries(live)) {
  const built = pages.has(path);
  comparison.push([
    ORIGIN + path,
    meta.status ?? 200,
    built ? path : '',
    built ? 200 : 404,
    built ? 'unchanged (200)' : 'MISSING',
    inSitemap.has(path) ? 'yes' : 'no',
    meta.note ?? '',
  ]);
}
// URLs intentionally retired
for (const [p, note] of [
  ['/cart/', 'WooCommerce cart — noindex on live, no orders or payment gateway ever configured; retired, returns 404'],
  ['/checkout/', 'WooCommerce checkout — noindex on live, no payment gateway; retired, returns 404'],
  ['/my-account/', 'WooCommerce account — noindex on live, no customer accounts; retired, returns 404'],
  ['/sitemap_index.xml', 'Yoast sitemap index — 301 to /sitemap.xml'],
  ['/page-sitemap.xml', 'Yoast child sitemap — 301 to /sitemap.xml'],
  ['/product-sitemap.xml', 'Yoast child sitemap — 301 to /sitemap.xml'],
  ['/product_cat-sitemap.xml', 'Yoast child sitemap — 301 to /sitemap.xml'],
  ['/product_brand-sitemap.xml', 'Yoast child sitemap — 301 to /sitemap.xml'],
]) {
  const redirect = p.endsWith('.xml');
  comparison.push([
    ORIGIN + p,
    200,
    redirect ? '/sitemap.xml' : '',
    redirect ? 301 : 404,
    redirect ? '301 redirect' : '410-equivalent (404)',
    'no',
    note,
  ]);
}
await writeFile(join(OUT, 'URL_COMPARISON.csv'), csv(comparison));

// ------------------------------------------------------------------ metadata
const metadata = [
  [
    'path',
    'live_title',
    'new_title',
    'title_match',
    'live_description',
    'new_description',
    'description_source',
    'live_canonical',
    'new_canonical',
    'canonical_match',
    'live_h1',
    'new_h1',
    'h1_change',
  ],
];
for (const [path, meta] of Object.entries(live)) {
  const html = pages.get(path);
  if (!html) continue;
  const nt = strip(grab(html, T));
  const nd = grab(html, D);
  const nc = grab(html, C);
  const nh = strip(grab(html, H1));
  metadata.push([
    path,
    meta.title ?? '',
    nt,
    meta.title === nt ? 'exact' : 'DIFFERS',
    meta.description ?? '',
    nd,
    meta.description ? 'preserved from live' : 'authored fallback (live had none)',
    meta.canonical ?? '',
    nc,
    meta.canonical === nc ? 'exact' : 'DIFFERS',
    meta.h1 ?? '(none on live)',
    nh,
    meta.h1 ? (meta.h1 === nh ? 'unchanged' : 'DIFFERS') : 'added (live page had no H1)',
  ]);
}
await writeFile(join(OUT, 'METADATA_COMPARISON.csv'), csv(metadata));

// ------------------------------------------------------------------ redirects
const redirects = [['source', 'destination', 'status', 'reason']];
for (const p of [
  '/sitemap_index.xml',
  '/page-sitemap.xml',
  '/product-sitemap.xml',
  '/product_cat-sitemap.xml',
  '/product_brand-sitemap.xml',
]) {
  redirects.push([p, '/sitemap.xml', 301, 'Yoast sitemap paths consolidated into a single sitemap']);
}
redirects.push([
  '/product-category/:slug/page/:n',
  '/product-category/:slug/',
  301,
  'WordPress served thin paginated category URLs that were never in the sitemap; no category exceeds one page of 16',
]);
redirects.push(['/feed', '/', 302, 'RSS feed retired; no blog content on this site']);
redirects.push([
  'http://theburgersleeves.com/*',
  'https://theburgersleeves.com/*',
  301,
  'HTTP to HTTPS (Vercel automatic)',
]);
redirects.push([
  'https://www.theburgersleeves.com/*',
  'https://theburgersleeves.com/*',
  301,
  'www to apex, matching the live canonical host (configure in Vercel domain settings)',
]);
redirects.push([
  '/:path (no trailing slash)',
  '/:path/',
  308,
  'trailingSlash: always — matches the live URL shape',
]);
await writeFile(join(OUT, 'REDIRECT_MAP.csv'), csv(redirects));

console.log(`URL_INVENTORY.csv        ${inventory.length - 1} rows`);
console.log(`URL_COMPARISON.csv       ${comparison.length - 1} rows`);
console.log(`METADATA_COMPARISON.csv  ${metadata.length - 1} rows`);
console.log(`REDIRECT_MAP.csv         ${redirects.length - 1} rows`);
console.log(`written to ${OUT}`);
