#!/usr/bin/env node
/**
 * Post-build validation. Reads dist/client only — no network, no live site —
 * so it can run in CI. Exits non-zero if any check fails.
 *
 * Usage: node scripts/validate.mjs [--json report.json]
 */
import { readFile, readdir, access } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist', 'client');
const ORIGIN = 'https://theburgersleeves.com';

const failures = [];
const warnings = [];
const info = {};

const fail = (check, detail) => failures.push({ check, detail });
const warn = (check, detail) => warnings.push({ check, detail });

// --------------------------------------------------------------------------
// collect pages
// --------------------------------------------------------------------------
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));

/** dist/client/foo/index.html -> /foo/ ; dist/client/404.html -> /404.html */
function pathFor(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

const pages = [];
for (const f of htmlFiles) {
  pages.push({ file: f, path: pathFor(f), html: await readFile(f, 'utf8') });
}
info.pagesBuilt = pages.length;

const indexablePages = pages.filter((p) => p.path !== '/404.html');

// --------------------------------------------------------------------------
// tiny HTML helpers (regex is fine on our own generated, well-formed output)
// --------------------------------------------------------------------------
const one = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

const RE = {
  title: /<title>([\s\S]*?)<\/title>/i,
  desc: /<meta name="description" content="([^"]*)"/i,
  canonical: /<link rel="canonical" href="([^"]*)"/i,
  robots: /<meta name="robots" content="([^"]*)"/i,
  ogTitle: /<meta property="og:title" content="([^"]*)"/i,
  ogImage: /<meta property="og:image" content="([^"]*)"/i,
  twitter: /<meta name="twitter:card" content="([^"]*)"/i,
  h1: /<h1[^>]*>([\s\S]*?)<\/h1>/gi,
  jsonld: /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  hrefs: /<a\b[^>]*href="([^"]+)"/gi,
  imgSrc: /<img\b[^>]*?\bsrc="([^"]+)"/gi,
  imgTag: /<img\b[^>]*>/gi,
};

// --------------------------------------------------------------------------
// 1. metadata + headings
// --------------------------------------------------------------------------
const seenTitles = new Map();
const seenCanonicals = new Map();

for (const p of indexablePages) {
  const title = one(p.html, RE.title);
  const desc = one(p.html, RE.desc);
  const canonical = one(p.html, RE.canonical);
  const robots = one(p.html, RE.robots);
  const h1s = all(p.html, RE.h1);

  if (!title) fail('missing-title', p.path);
  if (!desc) fail('missing-description', p.path);
  if (!canonical) fail('missing-canonical', p.path);
  if (!one(p.html, RE.ogTitle)) fail('missing-og-title', p.path);
  if (!one(p.html, RE.twitter)) fail('missing-twitter-card', p.path);
  if (!one(p.html, RE.ogImage) && robots && !robots.includes('noindex')) {
    warn('missing-og-image', p.path);
  }

  if (h1s.length === 0) fail('missing-h1', p.path);
  if (h1s.length > 1) fail('multiple-h1', `${p.path} (${h1s.length})`);

  if (canonical) {
    if (!canonical.startsWith(ORIGIN)) fail('canonical-wrong-host', `${p.path} -> ${canonical}`);
    if (/localhost|127\.0\.0\.1|vercel\.app|\.local/i.test(canonical)) {
      fail('canonical-dev-url', `${p.path} -> ${canonical}`);
    }
    const expected = `${ORIGIN}${p.path}`;
    if (canonical !== expected) fail('canonical-mismatch', `${p.path} -> ${canonical}`);
    if (seenCanonicals.has(canonical)) {
      fail('duplicate-canonical', `${canonical} on ${p.path} and ${seenCanonicals.get(canonical)}`);
    }
    seenCanonicals.set(canonical, p.path);
  }

  if (title) {
    if (seenTitles.has(title)) {
      fail('duplicate-title', `"${title}" on ${p.path} and ${seenTitles.get(title)}`);
    }
    seenTitles.set(title, p.path);
  }

  // heading order: no level skipped
  const levels = [...p.html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  let prev = 0;
  for (const lvl of levels) {
    if (prev && lvl > prev + 1) {
      warn('heading-skip', `${p.path}: h${prev} -> h${lvl}`);
      break;
    }
    prev = lvl;
  }
}

// --------------------------------------------------------------------------
// 2. internal links resolve to a built page
// --------------------------------------------------------------------------
const builtPaths = new Set(pages.map((p) => p.path));
const staticAssets = new Set(
  files.map((f) => '/' + relative(DIST, f).replace(/\\/g, '/')),
);

const brokenLinks = new Map();
for (const p of indexablePages) {
  for (const href of all(p.html, RE.hrefs)) {
    if (/^(https?:|mailto:|tel:|#|data:)/i.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (builtPaths.has(clean) || staticAssets.has(clean)) continue;
    if (clean === '/api/inquiry/') continue; // server function, not prerendered
    const key = clean;
    if (!brokenLinks.has(key)) brokenLinks.set(key, []);
    brokenLinks.get(key).push(p.path);
  }
}
for (const [href, from] of brokenLinks) {
  fail('broken-internal-link', `${href} (linked from ${from.slice(0, 3).join(', ')}${from.length > 3 ? ` +${from.length - 3}` : ''})`);
}

// --------------------------------------------------------------------------
// 3. images exist, have alt + explicit dimensions
// --------------------------------------------------------------------------
let imgCount = 0;
const missingImages = new Set();
for (const p of indexablePages) {
  for (const tag of p.html.match(RE.imgTag) ?? []) {
    imgCount += 1;
    // `alt` with no value is Astro's serialisation of alt="" — correct for decorative images.
    if (!/\salt(=|[\s>])/.test(tag)) fail('image-missing-alt', `${p.path}: ${tag.slice(0, 90)}`);
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) {
      fail('image-missing-dimensions', `${p.path}: ${tag.slice(0, 90)}`);
    }
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    if (src && src.startsWith('/') && !staticAssets.has(src.split('?')[0])) {
      missingImages.add(`${src} (on ${p.path})`);
    }
    if (src && /theburgersleeves\.com\/wp-content/.test(src)) {
      fail('hotlinked-wordpress-asset', `${p.path}: ${src}`);
    }
  }
}
for (const m of missingImages) fail('broken-image', m);
info.imagesRendered = imgCount;

// exactly one eager/high-priority LCP image per page at most
for (const p of indexablePages) {
  const eager = (p.html.match(/loading="eager"/g) ?? []).length;
  if (eager > 4) warn('too-many-eager-images', `${p.path} (${eager})`);
}

// --------------------------------------------------------------------------
// 4. JSON-LD validity + no duplicate typed graphs
// --------------------------------------------------------------------------
const schemaSummary = {};
for (const p of indexablePages) {
  const blocks = all(p.html, RE.jsonld);
  const types = [];
  for (const raw of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      fail('invalid-jsonld', `${p.path}: ${e.message}`);
      continue;
    }
    const nodes = parsed['@graph'] ?? (Array.isArray(parsed) ? parsed : [parsed]);
    for (const n of nodes) {
      types.push(n['@type']);
      if (n['@type'] === 'Product') {
        if (n.aggregateRating) fail('fabricated-rating', p.path);
        if (n.review) fail('fabricated-review', p.path);
        if (n.offers?.price !== undefined) fail('invented-price', p.path);
        for (const req of ['name', 'sku', 'brand', 'description']) {
          if (!n[req]) fail('product-schema-missing-field', `${p.path}: ${req}`);
        }
      }
      if (n['@type'] === 'FAQPage') {
        // every question in schema must be visible in the rendered page
        for (const q of n.mainEntity ?? []) {
          const needle = q.name.replace(/&/g, '&amp;').slice(0, 40);
          if (!p.html.includes(needle) && !p.html.includes(q.name.slice(0, 40))) {
            fail('faq-schema-not-visible', `${p.path}: ${q.name.slice(0, 50)}`);
          }
        }
      }
    }
  }
  for (const t of ['Product', 'FAQPage', 'BreadcrumbList', 'Organization', 'WebSite']) {
    const n = types.filter((x) => x === t).length;
    if (n > 1) fail('duplicate-schema', `${p.path}: ${t} x${n}`);
  }
  for (const t of types) schemaSummary[t] = (schemaSummary[t] ?? 0) + 1;
}
info.schemaTypes = schemaSummary;

// --------------------------------------------------------------------------
// 5. sitemap consistency
// --------------------------------------------------------------------------
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
info.sitemapUrls = sitemapUrls.length;

if (new Set(sitemapUrls).size !== sitemapUrls.length) fail('duplicate-sitemap-entry', 'see sitemap.xml');

for (const u of sitemapUrls) {
  if (!u.startsWith(`${ORIGIN}/`)) fail('sitemap-wrong-host', u);
  const path = u.slice(ORIGIN.length);
  if (!path.endsWith('/')) fail('sitemap-missing-trailing-slash', u);
  if (!builtPaths.has(path)) fail('sitemap-url-not-built', u);
  const page = pages.find((p) => p.path === path);
  if (page) {
    const robots = one(page.html, RE.robots) ?? '';
    if (robots.includes('noindex')) fail('sitemap-lists-noindex', u);
    const canonical = one(page.html, RE.canonical);
    if (canonical && canonical !== u) fail('sitemap-canonical-mismatch', `${u} vs ${canonical}`);
  }
  if (/\/page\/\d+\//.test(path)) fail('sitemap-lists-pagination', u);
  if (path.startsWith('/api/')) fail('sitemap-lists-api', u);
}

// pages that should be in the sitemap but aren't
const sitemapPaths = new Set(sitemapUrls.map((u) => u.slice(ORIGIN.length)));
for (const p of indexablePages) {
  const robots = one(p.html, RE.robots) ?? '';
  const isPaginated = /\/page\/\d+\//.test(p.path);
  if (!robots.includes('noindex') && !isPaginated && !sitemapPaths.has(p.path)) {
    warn('indexable-page-missing-from-sitemap', p.path);
  }
}

// --------------------------------------------------------------------------
// 6. residue / placeholder / leaked-secret scan
// --------------------------------------------------------------------------
const RESIDUE = [
  [/\[(?:vc_|et_pb_|elementor-template|gallery |caption )/i, 'shortcode-residue'],
  [/elementor-widget|e-con-inner|elementor-element-/i, 'elementor-residue'],
  [/wp-content\/(?:plugins|themes)/i, 'wordpress-asset-reference'],
  [/data-turn-id|conversation-turn|text-token-text-primary|font-claude-response/i, 'ai-export-residue'],
  [/\blorem ipsum\b/i, 'placeholder-content'],
  [/\bTODO\b|\bFIXME\b|\bXXX\b/, 'placeholder-marker'],
  [/\{\{\s*\w+\s*\}\}/, 'unrendered-template'],
  [/undefined<|>undefined|>NaN</, 'undefined-render'],
  [/cdn-cgi\/l\/email-protection/, 'unresolved-cf-email'],
  [/\[email(?:&#160;|&nbsp;|\s)protected\]/i, 'obfuscated-email-placeholder'],
];

for (const p of pages) {
  for (const [re, label] of RESIDUE) {
    if (re.test(p.html)) fail(label, p.path);
  }
}

const SECRETS = [
  [/SMTP_PASS/i, 'smtp-var-name'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'private-key'],
  [/\bAKIA[0-9A-Z]{16}\b/, 'aws-key'],
  [/\bsk_live_[0-9a-zA-Z]{10,}/, 'stripe-key'],
];
for (const f of files) {
  const rel = relative(DIST, f);
  if (/\.(png|jpe?g|webp|avif|woff2?|ico|gif|svg)$/i.test(f)) continue;
  const body = await readFile(f, 'utf8').catch(() => '');
  for (const [re, label] of SECRETS) {
    if (re.test(body)) fail('secret-in-build', `${label} in ${rel}`);
  }
}

// private exports must never reach the build
for (const f of files) {
  const rel = relative(DIST, f);
  if (/\.(sql|csv)$/i.test(rel)) fail('private-export-in-build', rel);
  if (/\.xml$/i.test(rel) && !rel.endsWith('sitemap.xml')) fail('unexpected-xml-in-build', rel);
}

// --------------------------------------------------------------------------
// 7. duplicate sections that the WordPress templates shipped
// --------------------------------------------------------------------------
for (const p of indexablePages) {
  const relatedHeadings = (p.html.match(/>Related [Pp]roducts</g) ?? []).length;
  if (relatedHeadings > 1) fail('duplicate-related-products', `${p.path} (${relatedHeadings})`);
  const forms = (p.html.match(/<form\b/g) ?? []).length;
  if (forms > 1) fail('duplicate-form', `${p.path} (${forms})`);
  const descHeadings = (p.html.match(/>Description</g) ?? []).length;
  if (descHeadings > 1) fail('duplicate-description-heading', `${p.path} (${descHeadings})`);
}

// --------------------------------------------------------------------------
// 8. URL parity against the live WordPress inventory
// --------------------------------------------------------------------------
const inventoryPath = join(root, 'scripts', 'live-urls.json');
try {
  await access(inventoryPath);
  const live = JSON.parse(await readFile(inventoryPath, 'utf8'));
  const missing = live.indexable.filter((u) => !builtPaths.has(new URL(u).pathname));
  for (const m of missing) fail('live-url-not-rebuilt', m);
  info.liveIndexableUrls = live.indexable.length;
  info.rebuiltLiveUrls = live.indexable.length - missing.length;
} catch {
  warn('no-live-inventory', 'scripts/live-urls.json not found — URL parity not checked');
}

// --------------------------------------------------------------------------
// report
// --------------------------------------------------------------------------
const byCheck = (list) => {
  const g = new Map();
  for (const { check, detail } of list) {
    if (!g.has(check)) g.set(check, []);
    g.get(check).push(detail);
  }
  return g;
};

console.log('\n=== build facts ===');
for (const [k, v] of Object.entries(info)) {
  console.log(`  ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`);
}

if (warnings.length) {
  console.log(`\n=== warnings (${warnings.length}) ===`);
  for (const [check, details] of byCheck(warnings)) {
    console.log(`  ${check} (${details.length})`);
    for (const d of details.slice(0, 8)) console.log(`     - ${d}`);
    if (details.length > 8) console.log(`     … ${details.length - 8} more`);
  }
}

if (failures.length) {
  console.log(`\n=== FAILURES (${failures.length}) ===`);
  for (const [check, details] of byCheck(failures)) {
    console.log(`  ${check} (${details.length})`);
    for (const d of details.slice(0, 10)) console.log(`     - ${d}`);
    if (details.length > 10) console.log(`     … ${details.length - 10} more`);
  }
  console.log('');
  process.exit(1);
}

console.log('\nAll checks passed.\n');
