import type { APIRoute } from 'astro';
import { INDEXABLE_ROUTES } from '../lib/routes';
import { SITE } from '../data/site';

/**
 * Hand-rolled so the sitemap lives at /sitemap.xml — the exact path the live
 * robots.txt advertises — and so exclusions are driven by the same route table
 * the validation suite checks. Absolute HTTPS URLs on the canonical host,
 * trailing slashes preserved, no duplicates, no redirects, no noindex pages.
 */
export const prerender = true;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = INDEXABLE_ROUTES.map((r) => {
    const loc = new URL(r.path, SITE.origin).href;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>weekly</changefreq>`,
      `    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n');
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
