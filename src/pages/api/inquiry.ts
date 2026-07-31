import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { SITE } from '../../data/site';

// The only server-rendered route on the site.
export const prerender = false;

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const MAX_FIELD_LEN = 4000;

const ALLOWED_UPLOADS: Record<string, string[]> = {
  'application/pdf': ['pdf'],
  'application/postscript': ['ai', 'eps', 'ps'],
  'application/illustrator': ['ai'],
  'image/png': ['png'],
  'image/jpeg': ['jpg', 'jpeg'],
  'image/svg+xml': ['svg'],
  'application/zip': ['zip'],
  'application/x-zip-compressed': ['zip'],
  'application/octet-stream': ['ai', 'eps', 'zip'], // browsers often send this for .ai/.eps
};

/** Simple fixed-window limiter. Per-instance only — good enough to blunt bursts. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

/** Strip control characters and header-injection payloads, then clamp length. */
function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, MAX_FIELD_LEN);
}

function cleanMultiline(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .trim()
    .slice(0, MAX_FIELD_LEN);
}

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Keep only a safe basename: no paths, no double extensions, no executables. */
function safeFilename(raw: string): string | null {
  const base = raw.split(/[\\/]/).pop() ?? '';
  const cleaned = base
    .normalize('NFKD')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/_{2,}/g, '_')
    .replace(/^\.+/, '')
    .slice(0, 120);
  if (!cleaned || !cleaned.includes('.')) return null;
  const parts = cleaned.split('.');
  const ext = parts.pop()!.toLowerCase();
  const stem = parts.join('_'); // collapse any inner dots — blocks "art.php.jpg"
  const allowed = new Set(Object.values(ALLOWED_UPLOADS).flat());
  if (!allowed.has(ext)) return null;
  return `${stem}.${ext}`;
}

type Reply = { ok: boolean; error?: string };

function respond(status: number, body: Reply, wantsJson: boolean) {
  if (wantsJson) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  // No-JS fallback: success goes to the same Thank You page the live form used.
  const location = body.ok ? '/thank-you/' : `/get-free-quote/?error=${encodeURIComponent(body.error ?? 'failed')}`;
  return new Response(null, { status: 303, headers: { location, 'cache-control': 'no-store' } });
}

export const POST: APIRoute = async ({ request }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const fail = (status: number, error: string) => respond(status, { ok: false, error }, wantsJson);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'We could not read that submission. Please try again.');
  }

  // Honeypot: a real person never fills a field they cannot see. Answer 200 so
  // bots get no signal, but send nothing.
  if (clean(form.get('website'))) {
    return respond(200, { ok: true }, wantsJson);
  }

  if (rateLimited(clientIp(request))) {
    return fail(429, 'Too many messages from this connection. Please try again in a few minutes.');
  }

  const variant = clean(form.get('form_variant')) || 'compact';
  const sourcePath = clean(form.get('source_url')) || '/';

  const name = clean(form.get('name'));
  const email = clean(form.get('email')).toLowerCase();
  const phone = clean(form.get('phone'));
  const subject = clean(form.get('subject'));
  const company = clean(form.get('company'));
  const product = clean(form.get('product'));
  const message = cleanMultiline(form.get('message'));

  if (!EMAIL_RE.test(email)) return fail(400, 'Please enter a valid email address.');
  if (!product) return fail(400, 'Please tell us which product you are asking about.');
  if (variant === 'contact' && !subject) return fail(400, 'Please add a subject.');

  const quoteFields =
    variant === 'quote'
      ? {
          Company: company,
          Width: clean(form.get('width')),
          Height: clean(form.get('height')),
          Length: clean(form.get('length')),
          Unit: clean(form.get('unit')),
          'Color option': clean(form.get('color')),
          'Quantity 1': clean(form.get('qty1')),
          'Quantity 2': clean(form.get('qty2')),
          'Quantity 3': clean(form.get('qty3')),
        }
      : {};

  // --- attachment ---------------------------------------------------------
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  const upload = form.get('artwork');
  if (upload instanceof File && upload.size > 0) {
    if (upload.size > MAX_UPLOAD_BYTES) {
      return fail(413, 'That file is larger than 10 MB. Please send a smaller file.');
    }
    const filename = safeFilename(upload.name);
    const allowedForType = ALLOWED_UPLOADS[upload.type];
    if (!filename || !allowedForType || !allowedForType.includes(filename.split('.').pop()!)) {
      return fail(415, 'That file type is not accepted. Send a PDF, AI, EPS, PNG, JPG, SVG or ZIP.');
    }
    attachments.push({
      filename,
      content: Buffer.from(await upload.arrayBuffer()),
      // Never echo the browser-supplied type back for SVG/HTML-ish payloads.
      contentType: upload.type === 'image/svg+xml' ? 'application/octet-stream' : upload.type,
    });
  }

  // --- transport ----------------------------------------------------------
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_TO,
    SMTP_FROM_NAME,
    SMTP_FROM_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_TO || !SMTP_FROM_EMAIL) {
    console.error('inquiry: SMTP environment variables are not configured');
    return fail(
      500,
      `We could not send your message right now. Please email ${SITE.email} or call ${SITE.phone}.`,
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const pageUrl = new URL(sourcePath, SITE.origin).href;
  const rows: [string, string][] = [
    ['Name', name || '—'],
    ['Email', email],
    ['Phone', phone || '—'],
    ...(subject ? ([['Subject', subject]] as [string, string][]) : []),
    ['Product', product],
    ...(Object.entries(quoteFields).filter(([, v]) => v) as [string, string][]),
    ['Message', message || '—'],
    ['Submitted from', pageUrl],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><th align="left" style="padding:6px 14px 6px 0;vertical-align:top;white-space:nowrap">${escapeHtml(
          k,
        )}</th><td style="padding:6px 0;vertical-align:top">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')}</table>`;

  const label =
    variant === 'quote' ? 'Quote request' : variant === 'contact' ? 'Contact form' : 'Product enquiry';

  try {
    await transporter.sendMail({
      from: `"${SMTP_FROM_NAME || SITE.name}" <${SMTP_FROM_EMAIL}>`,
      to: SMTP_TO,
      replyTo: name ? `"${name.replace(/"/g, '')}" <${email}>` : email,
      subject: `${label}: ${product}`,
      text,
      html,
      attachments,
    });
  } catch (err) {
    // Never claim success on a delivery failure.
    console.error('inquiry: send failed', err);
    return fail(
      502,
      `We could not send your message. Please email ${SITE.email} or call ${SITE.phone}.`,
    );
  }

  return respond(200, { ok: true }, wantsJson);
};

/** Anything other than POST is not a valid way to reach this endpoint. */
export const GET: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
