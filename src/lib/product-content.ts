import raw from '../data/product-content.json';

/**
 * Structured long-form product copy.
 *
 * Stored as blocks rather than an HTML blob so that tables render responsively,
 * the "one contextual link per H2 section" rule can be enforced by the audit
 * script, and no unsanitised markup is ever injected — only the inline subset
 * the converter whitelists (strong, em, a, br, sup, sub).
 */
export type Block =
  | { t: 'p'; html: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; headers: string[]; rows: string[][]; caption?: string };

export type Section = {
  /** null only for stray copy that appeared before the first H2. */
  heading: string | null;
  blocks: Block[];
};

export type LongDescription = { sections: Section[] };

const content = raw as Record<string, LongDescription>;

export function longDescription(sku: string): LongDescription | undefined {
  const c = content[sku];
  return c && c.sections.length ? c : undefined;
}

const blockWords = (b: Block): number => {
  const strip = (s: string) => s.replace(/<[^>]+>/g, ' ');
  if (b.t === 'p') return strip(b.html).split(/\s+/).filter(Boolean).length;
  if (b.t === 'h3') return b.text.split(/\s+/).filter(Boolean).length;
  if (b.t === 'ul' || b.t === 'ol')
    return b.items.reduce((n, i) => n + strip(i).split(/\s+/).filter(Boolean).length, 0);
  return [...b.headers, ...b.rows.flat()].join(' ').split(/\s+/).filter(Boolean).length;
};

export function wordCount(d: LongDescription): number {
  return d.sections.reduce(
    (n, s) =>
      n +
      (s.heading?.split(/\s+/).filter(Boolean).length ?? 0) +
      s.blocks.reduce((m, b) => m + blockWords(b), 0),
    0,
  );
}

/** Contextual links per section — the audit asserts this never exceeds one. */
export function sectionLinks(s: Section): string[] {
  const out: string[] = [];
  for (const b of s.blocks) {
    const html = b.t === 'p' ? b.html : b.t === 'ul' || b.t === 'ol' ? b.items.join(' ') : '';
    for (const m of html.matchAll(/<a\s+href="([^"]+)"/g)) out.push(m[1]);
  }
  return out;
}

export function allLinks(d: LongDescription): string[] {
  return d.sections.flatMap(sectionLinks);
}

export const CONTENT = content;
