/**
 * Responsive QA without adding a dependency.
 *
 * Launches the installed Chrome with remote debugging and drives it over the
 * DevTools Protocol using Node's built-in WebSocket, so there is no Playwright
 * or Puppeteer in the tree. For each page and width it reports the real
 * documentElement.scrollWidth against the viewport, plus any element that
 * actually sticks out — which is the only reliable way to find horizontal
 * overflow, since a screenshot just shows the result and not the cause.
 *
 * Usage: node scripts/responsive-qa.mjs [baseUrl]
 */
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const BASE = process.argv[2] ?? 'http://127.0.0.1:8733';
const WIDTHS = [320, 375, 768, 1024, 1440];
const PAGES = [
  ['home', '/'],
  ['product (materials)', '/product/kraft-burger-sleeves/'],
  ['product (sizes)', '/product/jumbo-burger-sleeves/'],
  ['product (usage)', '/product/food-grade-burger-sleeves/'],
  ['product (combo)', '/product/fast-food-sleeves-packaging/'],
  ['category', '/product-category/burger-sleeves-materials/'],
  ['shop', '/shop/'],
  ['about', '/about-us/'],
  ['contact', '/contact-us/'],
  ['quote form', '/get-free-quote/'],
  ['policy', '/privacy-policy/'],
  ['404', '/this-page-does-not-exist/'],
];

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9222 + Math.floor(Math.random() * 500);

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  '--user-data-dir=/tmp/tbs-qa-profile',
  'about:blank',
], { stdio: 'ignore' });

const cleanup = () => { try { chrome.kill(); } catch {} };
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(1); });

/** Wait for the debugger endpoint to answer. */
let wsUrl;
for (let i = 0; i < 60; i++) {
  try {
    const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
    wsUrl = (await r.json()).webSocketDebuggerUrl;
    break;
  } catch { await sleep(250); }
}
if (!wsUrl) { cleanup(); throw new Error('Chrome debugger did not start'); }

const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
};
const send = (method, params = {}, sessionId) =>
  new Promise((resolve) => {
    const n = ++id;
    pending.set(n, resolve);
    ws.send(JSON.stringify({ id: n, method, params, sessionId }));
  });

const { result: target } = await send('Target.createTarget', { url: 'about:blank' });
const { result: attach } = await send('Target.attachToTarget', { targetId: target.targetId, flatten: true });
const session = attach.sessionId;
await send('Page.enable', {}, session);
await send('Runtime.enable', {}, session);

const MEASURE = `(() => {
  const de = document.documentElement;
  const vw = de.clientWidth;
  const over = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right > vw + 1) {
      const cs = getComputedStyle(el);
      let p = el.parentElement, clipped = false;
      while (p) { const pc = getComputedStyle(p); if (pc.overflowX === 'auto' || pc.overflowX === 'scroll' || pc.overflowX === 'hidden') { clipped = true; break; } p = p.parentElement; }
      if (clipped) continue;
      over.push({
        sel: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0,2).join('.') : ''),
        right: Math.round(r.right), w: Math.round(r.width),
      });
    }
  }
  const seen = new Set(); const uniq = [];
  for (const o of over) { if (seen.has(o.sel)) continue; seen.add(o.sel); uniq.push(o); }
  return JSON.stringify({ vw, scrollW: de.scrollWidth, bodyScrollW: document.body.scrollWidth, over: uniq.slice(0, 5) });
})()`;

let failures = 0;
console.log(`responsive QA against ${BASE}\n`);
for (const [label, path] of PAGES) {
  const rows = [];
  for (const w of WIDTHS) {
    await send('Emulation.setDeviceMetricsOverride',
      { width: w, height: 900, deviceScaleFactor: 1, mobile: w < 768 }, session);
    await send('Page.navigate', { url: BASE + path }, session);
    await sleep(700);
    const { result } = await send('Runtime.evaluate', { expression: MEASURE, returnByValue: true }, session);
    const d = JSON.parse(result.result.value);
    const overflow = d.scrollW - d.vw;
    rows.push({ w, overflow, over: d.over });
    if (overflow > 1) failures++;
  }
  const worst = rows.filter((r) => r.overflow > 1);
  const flag = worst.length ? 'OVERFLOW' : 'ok      ';
  console.log(`${flag} ${label.padEnd(22)} ${rows.map((r) => `${r.w}:${r.overflow > 1 ? '+' + r.overflow : 'ok'}`).join('  ')}`);
  for (const r of worst) {
    for (const o of r.over) console.log(`         ${r.w}px  ${o.sel}  right=${o.right} width=${o.w}`);
  }
}

console.log(`\n${failures ? failures + ' width/page combination(s) overflow' : 'no horizontal overflow at any tested width'}`);
ws.close();
cleanup();
process.exit(failures ? 1 : 0);
