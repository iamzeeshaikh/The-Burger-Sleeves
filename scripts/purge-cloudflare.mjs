/**
 * Purges the Cloudflare edge cache for theburgersleeves.com.
 *
 * Why this is needed: the quarantined third-party images are gone from Vercel
 * (they 404 at origin), but they were served with
 * `Cache-Control: public, max-age=31536000, immutable`. Cloudflare holds those
 * edge copies for a year and will not revalidate, so an origin change alone
 * does not remove them. Only a purge does.
 *
 * Usage:
 *   CF_API_TOKEN=xxxxx node scripts/purge-cloudflare.mjs            # purge everything
 *   CF_API_TOKEN=xxxxx node scripts/purge-cloudflare.mjs --verify   # purge, then re-check
 *
 * The token needs the "Zone.Cache Purge" permission on this zone. Create one at
 * Cloudflare → My Profile → API Tokens → Create Token → "Purge Cache" template.
 *
 * If you would rather not create a token: Cloudflare dashboard →
 * theburgersleeves.com → Caching → Configuration → Purge Everything.
 */
const TOKEN = process.env.CF_API_TOKEN;
const ZONE_NAME = 'theburgersleeves.com';

if (!TOKEN) {
  console.error('CF_API_TOKEN is not set. See the header of this file for how to get one.');
  process.exit(1);
}

const api = async (path, init = {}) => {
  const r = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
  const j = await r.json();
  if (!j.success) {
    console.error(`Cloudflare API error on ${path}:`);
    for (const e of j.errors ?? []) console.error(`  ${e.code}: ${e.message}`);
    process.exit(1);
  }
  return j.result;
};

const zones = await api(`/zones?name=${ZONE_NAME}`);
if (!zones.length) {
  console.error(`Zone ${ZONE_NAME} is not visible to this token.`);
  process.exit(1);
}
const zone = zones[0];
console.log(`zone: ${zone.name} (${zone.id})`);

await api(`/zones/${zone.id}/purge_cache`, { method: 'POST', body: JSON.stringify({ purge_everything: true }) });
console.log('cache purged.');

if (process.argv.includes('--verify')) {
  // The one asset worth confirming by name: the Burger King WHOPPER image.
  const url = 'https://theburgersleeves.com/_astro/Custom-Kraft-Brown-Burger-Sleeve.C8NNeY4Y.jpg';
  await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(url, { redirect: 'manual' });
  console.log(`\nverify ${url}`);
  console.log(`  status: ${res.status} (want 404)`);
  console.log(`  cf-cache-status: ${res.headers.get('cf-cache-status')}`);
  if (res.status !== 404) {
    console.error('  still served — the purge may need a moment, or the edge kept a variant.');
    process.exit(1);
  }
  console.log('  gone.');
}
