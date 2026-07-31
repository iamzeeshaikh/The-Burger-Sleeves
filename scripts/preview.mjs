#!/usr/bin/env node
/**
 * Static preview of the production build.
 *
 * `astro preview` refuses to run with the Vercel adapter (the site is static
 * plus one serverless function), so this serves dist/client the way Vercel
 * will: directory index files, trailing slashes enforced, a real 404, and the
 * same security headers declared in vercel.json.
 *
 * The /api/inquiry endpoint is NOT served here — use `npm run dev` to exercise
 * the form end to end.
 *
 *   node scripts/preview.mjs [--port 8733]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, dirname, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist', 'client');

const portArg = process.argv.indexOf('--port');
const PORT = portArg > -1 ? Number(process.argv[portArg + 1]) : 8733;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

const vercel = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
const globalHeaders = Object.fromEntries(
  (vercel.headers?.find((h) => h.source === '/(.*)')?.headers ?? []).map((h) => [h.key, h.value]),
);

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {
    /* miss */
  }
  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith('/api/')) {
    res.writeHead(501, { 'content-type': 'text/plain' });
    res.end('API routes are not served by the static preview. Use `npm run dev`.');
    return;
  }

  // Guard against path traversal before touching the filesystem.
  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  let file = null;

  if (safe.endsWith('/')) {
    file = await tryFile(join(DIST, safe, 'index.html'));
  } else {
    file = await tryFile(join(DIST, safe));
    if (!file && (await tryFile(join(DIST, safe, 'index.html')))) {
      // trailingSlash: 'always' — redirect, don't silently serve.
      res.writeHead(308, { location: `${safe}/${url.search}` });
      res.end();
      return;
    }
  }

  if (!file) {
    const notFound = await readFile(join(DIST, '404.html'), 'utf8').catch(() => 'Not found');
    res.writeHead(404, { ...globalHeaders, 'content-type': 'text/html; charset=utf-8' });
    res.end(notFound);
    return;
  }

  const body = await readFile(file);
  res.writeHead(200, {
    ...globalHeaders,
    'content-type': TYPES[extname(file)] ?? 'application/octet-stream',
    'content-length': body.length,
  });
  res.end(body);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Static preview of dist/client → http://127.0.0.1:${PORT}/`);
});
