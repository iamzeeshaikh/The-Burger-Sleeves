import type { APIRoute } from 'astro';

/**
 * WordPress served RSS at /feed/ and the Astro rebuild has no feed. Redirecting
 * it to the homepage is a soft 404: the content is gone, not moved, and Google
 * treats a 200 homepage served for a removed URL as a quality signal against the
 * site. 410 states plainly that the resource is gone for good.
 *
 * Server-rendered because a static build cannot emit a status code.
 */
export const prerender = false;

const BODY =
  'Gone. This site no longer publishes an RSS feed. See https://theburgersleeves.com/sitemap.xml for the current page list.\n';

export const GET: APIRoute = () =>
  new Response(BODY, {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  });

export const ALL: APIRoute = () => new Response(BODY, { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
