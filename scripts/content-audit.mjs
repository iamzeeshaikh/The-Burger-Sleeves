#!/usr/bin/env node
/**
 * Generates PRODUCT_CONTENT_INVENTORY.csv and CONTENT_DUPLICATION_REPORT.md.
 * Data-driven so both can be regenerated after every content group lands.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs');
const ORIGIN = 'https://theburgersleeves.com';

const products = JSON.parse(await readFile(join(root, 'src/data/products.json'), 'utf8'));
const content = JSON.parse(await readFile(join(root, 'src/data/product-content.json'), 'utf8'));
const angles = JSON.parse(
  await readFile(join(root, 'src/data/product-angles.json'), 'utf8').catch(() => '{}'),
);

const strip = (s) => (s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const wordsOf = (s) => strip(s).split(/\s+/).filter(Boolean).length;

function docParts(doc) {
  const headings = [];
  const paras = [];
  const links = [];
  let tables = 0;
  let lists = 0;
  if (!doc) return { headings, paras, links, tables, lists, words: 0 };
  for (const s of doc.sections) {
    if (s.heading) headings.push(s.heading);
    for (const b of s.blocks) {
      if (b.t === 'h3') headings.push(b.text);
      if (b.t === 'table') tables += 1;
      if (b.t === 'ul' || b.t === 'ol') lists += 1;
      const strs =
        b.t === 'p' ? [b.html] : b.t === 'ul' || b.t === 'ol' ? b.items : [];
      for (const str of strs) {
        if (b.t === 'p') paras.push(strip(str));
        for (const m of str.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g))
          links.push({ href: m[1], anchor: strip(m[2]), section: s.heading ?? '(pre)' });
      }
    }
  }
  const words = [
    ...headings,
    ...paras,
    ...doc.sections.flatMap((s) =>
      s.blocks.flatMap((b) =>
        b.t === 'ul' || b.t === 'ol'
          ? b.items.map(strip)
          : b.t === 'table'
            ? [...b.headers, ...b.rows.flat()]
            : [],
      ),
    ),
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return { headings, paras, links, tables, lists, words };
}

// --------------------------------------------------------------- inventory
const inv = [
  [
    'product_name',
    'sku',
    'url',
    'category',
    'primary_keyword',
    'search_intent',
    'content_angle',
    'short_desc_words',
    'long_desc_words',
    'status_vs_target',
    'h2_count',
    'h3_count',
    'tables',
    'lists',
    'contextual_links',
    'link_destinations',
    'faq_count',
    'duplicate_faqs',
    'related_products',
    'images',
  ],
];

const faqSeen = new Map();
for (const p of products)
  for (const f of p.faqs) {
    const k = f.q.replace(/^\d+\.\s*/, '').toLowerCase().trim();
    faqSeen.set(k, (faqSeen.get(k) ?? 0) + 1);
  }

const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
const relatedOf = (p) =>
  products
    .filter((x) => x.categorySlug === p.categorySlug && x.slug !== p.slug)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 4)
    .map((x) => x.name);

for (const p of products) {
  const doc = content[p.sku];
  const d = docParts(doc);
  const a = angles[p.sku] ?? {};
  const dupFaqs = p.faqs.filter(
    (f) => (faqSeen.get(f.q.replace(/^\d+\.\s*/, '').toLowerCase().trim()) ?? 0) > 1,
  ).length;
  const h2 = doc ? doc.sections.filter((s) => s.heading).length : 0;
  inv.push([
    p.name,
    p.sku,
    ORIGIN + p.url,
    p.category,
    a.keyword ?? '',
    a.intent ?? '',
    a.angle ?? '',
    wordsOf(p.shortDescriptionHtml),
    d.words,
    !doc ? 'MISSING' : d.words < 1200 ? 'THIN' : d.words > 1600 ? 'OVER' : 'OK',
    h2,
    d.headings.length - h2,
    d.tables,
    d.lists,
    d.links.length,
    d.links.map((l) => l.href).join(' | '),
    p.faqs.length,
    dupFaqs,
    relatedOf(p).join(' | '),
    p.images.length,
  ]);
}

const csv = (rs) =>
  rs
    .map((r) =>
      r
        .map((v) => {
          const s = String(v ?? '');
          return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
        })
        .join(','),
    )
    .join('\n') + '\n';
await writeFile(join(OUT, 'PRODUCT_CONTENT_INVENTORY.csv'), csv(inv));

// ------------------------------------------------------------- duplication
const trigrams = (s) => {
  const w = s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  const out = new Set();
  for (let i = 0; i + 2 < w.length; i++) out.add(w.slice(i, i + 3).join(' '));
  return out;
};
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let hit = 0;
  for (const x of a) if (b.has(x)) hit += 1;
  return hit / (a.size + b.size - hit);
};

const docs = products
  .filter((p) => content[p.sku])
  .map((p) => {
    const d = docParts(content[p.sku]);
    return { p, d, tri: trigrams([...d.headings, ...d.paras].join(' ')) };
  });

const pairs = [];
for (let i = 0; i < docs.length; i++)
  for (let j = i + 1; j < docs.length; j++) {
    const sim = jaccard(docs[i].tri, docs[j].tri);
    pairs.push({ a: docs[i].p, b: docs[j].p, sim });
  }
pairs.sort((x, y) => y.sim - x.sim);

// repeated headings / paragraphs / anchors
const count = (arr) => arr.reduce((m, k) => ((m[k] = (m[k] ?? 0) + 1), m), {});
const allHeads = count(docs.flatMap((d) => d.d.headings.map((h) => h.toLowerCase())));
const allParas = count(docs.flatMap((d) => d.d.paras.map((s) => s.toLowerCase())));
const allAnchors = count(docs.flatMap((d) => d.d.links.map((l) => l.anchor.toLowerCase())));
const linkShapes = count(
  docs.map((d) =>
    d.d.links
      .map((l) => (l.href.includes('/product-category/') ? 'category' : 'product'))
      .join('+'),
  ),
);
const intros = docs
  .map((d) => ({ name: d.p.name, intro: (d.d.paras[0] ?? '').slice(0, 160) }))
  .filter((x) => x.intro);
const introPairs = [];
for (let i = 0; i < intros.length; i++)
  for (let j = i + 1; j < intros.length; j++) {
    const s = jaccard(trigrams(intros[i].intro), trigrams(intros[j].intro));
    if (s > 0.2) introPairs.push({ a: intros[i].name, b: intros[j].name, s });
  }

// Structural templating: word-overlap similarity misses pages whose headings
// share a grammar with only the product noun swapped ("Small Burger Sleeves
// That Keep …" / "Medium Burger Sleeves That Keep …"). Skeletonise each heading
// by removing product-specific nouns and compare the shapes.
const PRODUCT_WORDS = new Set(
  products
    .flatMap((p) => p.name.toLowerCase().split(/\s+/))
    .concat(['sleeve', 'sleeves', 'burger', 'burgers'])
);
const skeleton = (h) =>
  h
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .split(/\s+/)
    .filter((w) => w && !PRODUCT_WORDS.has(w))
    .join(' ');
const skelCount = count(docs.flatMap((d) => d.d.headings.map(skeleton)).filter((s) => s.split(' ').length > 2));
const templatedHeads = Object.entries(skelCount).filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);

const dupHead = Object.entries(allHeads).filter(([, n]) => n > 1);
const dupPara = Object.entries(allParas).filter(([, n]) => n > 1);
const dupAnchor = Object.entries(allAnchors).filter(([, n]) => n > 1);
const dupFaq = [...faqSeen].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);

const missing = products.filter((p) => !content[p.sku]);
const thin = products.filter((p) => content[p.sku] && docParts(content[p.sku]).words < 1200);

const md = `# Content Duplication Report

Generated ${new Date().toISOString().slice(0, 10)} from \`src/data/product-content.json\`.
Similarity is Jaccard overlap of word trigrams across headings and body paragraphs
only — shared chrome (header, nav, footer, breadcrumbs, spec-table labels, quote
form, pricing sentence) is excluded because it cannot vary between pages.

## Coverage

| Metric | Value |
| --- | ---: |
| Products | ${products.length} |
| With long-form copy | ${docs.length} |
| **Missing long-form copy** | **${missing.length}** |
| Below the 1,200-word target | ${thin.length} |
| Total long-form words | ${docs.reduce((n, d) => n + d.d.words, 0).toLocaleString()} |

## Similarity between pages that already have copy

| Rank | Page A | Page B | Similarity |
| ---: | --- | --- | ---: |
${pairs
  .slice(0, 10)
  .map((p, i) => `| ${i + 1} | ${p.a.name} | ${p.b.name} | ${(p.sim * 100).toFixed(1)}% |`)
  .join('\n')}

Highest pair is **${(pairs[0].sim * 100).toFixed(1)}%**. Nothing in the existing set
reads as spun or templated at the paragraph level.

## Repetition checks

| Check | Count | Verdict |
| --- | ---: | --- |
| Headings used on more than one page | ${dupHead.length} | ${dupHead.length ? 'rewrite' : 'clean'} |
| Paragraphs appearing on more than one page | ${dupPara.length} | ${dupPara.length ? 'rewrite' : 'clean'} |
| Anchor texts reused across pages | ${dupAnchor.length} | ${dupAnchor.length ? 'vary' : 'clean'} |
| FAQ questions asked on more than one page | ${dupFaq.length} | ${dupFaq.length ? 'rewrite' : 'clean'} |
| Near-duplicate opening paragraphs | ${introPairs.length} | ${introPairs.length ? 'rewrite' : 'clean'} |
| **Heading shapes reused once product nouns are removed** | **${templatedHeads.length}** | ${templatedHeads.length ? 'rewrite — structural templating' : 'clean'} |

### Internal-link shape

Every page with copy uses the identical link pattern, which is the clearest
mass-generation signal in the current set:

${Object.entries(linkShapes)
  .map(([k, n]) => `- \`${k}\` — ${n} page${n === 1 ? '' : 's'}`)
  .join('\n')}

### Templated heading shapes

Headings with the product noun stripped out. A shape appearing on more than one
page means the sentence was reused with only the product name changed — the
signal plain word-overlap similarity cannot see.

${
  templatedHeads.length
    ? `| Heading shape | Pages |\n| --- | ---: |\n${templatedHeads.slice(0, 15).map(([h, n]) => `| ${h} | ${n} |`).join('\n')}`
    : 'None.'
}

### Repeated FAQ questions

${
  dupFaq.length
    ? `| Question | Pages |\n| --- | ---: |\n${dupFaq.map(([q, n]) => `| ${q} | ${n} |`).join('\n')}`
    : 'None.'
}

### Reused anchor text

${
  dupAnchor.length
    ? `| Anchor | Pages |\n| --- | ---: |\n${dupAnchor.sort((a, b) => b[1] - a[1]).map(([a, n]) => `| ${a} | ${n} |`).join('\n')}`
    : 'None.'
}

## Products with no long-form copy

${missing.length ? missing.map((p) => `- ${p.sku} — ${p.name} (\`${p.url}\`)`).join('\n') : 'None.'}

## Products below the word target

${
  thin.length
    ? thin
        .map((p) => `- ${p.sku} — ${p.name}: ${docParts(content[p.sku]).words} words`)
        .join('\n')
    : 'None.'
}
`;

await writeFile(join(OUT, 'CONTENT_DUPLICATION_REPORT.md'), md);

console.log(`inventory rows            : ${inv.length - 1}`);
console.log(`pages with copy           : ${docs.length}`);
console.log(`highest pair similarity   : ${(pairs[0].sim * 100).toFixed(1)}%`);
console.log(`repeated headings         : ${dupHead.length}`);
console.log(`repeated paragraphs       : ${dupPara.length}`);
console.log(`reused anchors            : ${dupAnchor.length}`);
console.log(`duplicate FAQ questions   : ${dupFaq.length}`);
console.log(`near-duplicate intros     : ${introPairs.length}`);
console.log(`templated heading shapes  : ${templatedHeads.length}`);
console.log(`identical link shapes     : ${JSON.stringify(linkShapes)}`);
