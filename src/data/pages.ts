/**
 * Metadata for the non-product pages.
 *
 * `title` values are transcribed verbatim from the live pages — they are the
 * indexed titles and must not change.
 *
 * The live site ships no meta description on these nine pages (Yoast was never
 * filled in). `descriptionSource: 'authored'` marks the ones written here as a
 * documented fallback; see MIGRATION_REPORT.md.
 */
export type PageMeta = {
  title: string;
  description: string;
  descriptionSource: 'live' | 'authored';
  robots?: string;
};

export const PAGE_META: Record<string, PageMeta> = {
  '/shop/': {
    title: 'Shop - The Burger Sleeves',
    description:
      'Browse all 44 custom burger sleeves — kraft, printed, die-cut and sized options for restaurants, food trucks and cafes.',
    descriptionSource: 'authored',
  },
  '/brand/the-burger-sleeves/': {
    title: 'The Burger Sleeves Archives - The Burger Sleeves',
    description:
      'Every burger sleeve made by The Burger Sleeves: custom printed, kraft, black, white and die-cut packaging for food service.',
    descriptionSource: 'authored',
  },
  '/about-us/': {
    title: 'About Us - The Burger Sleeves',
    description:
      'Learn how The Burger Sleeves turns custom printed burger sleeves into marketing for restaurants, food trucks and cafes.',
    descriptionSource: 'authored',
  },
  '/contact-us/': {
    title: 'Contact Us - The Burger Sleeves',
    description:
      'Call (503) 358-0443, email us or send a message about custom burger sleeve packaging. We reply to every enquiry.',
    descriptionSource: 'authored',
  },
  '/get-free-quote/': {
    title: 'Get Free Quote - The Burger Sleeves',
    description:
      'Request a free quote for custom burger sleeves. Share your size, colours, quantity and artwork and we will price it.',
    descriptionSource: 'authored',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy - The Burger Sleeves',
    description:
      'How The Burger Sleeves collects, uses and protects the personal information you share through our website and enquiries.',
    descriptionSource: 'authored',
  },
  '/terms-and-conditions/': {
    title: 'Terms and Conditions - The Burger Sleeves',
    description:
      'The terms that apply when you order custom burger sleeve packaging from The Burger Sleeves or use this website.',
    descriptionSource: 'authored',
  },
  '/shipping-policy/': {
    title: 'Shipping Policy - The Burger Sleeves',
    description:
      'Order processing times, worldwide delivery, tracking and what to do if a burger sleeve shipment is delayed or damaged.',
    descriptionSource: 'authored',
  },
  '/refund_returns/': {
    title: 'Refund and Returns Policy - The Burger Sleeves',
    description:
      'When refunds or replacements apply to custom and stock burger sleeve orders, and how to report a problem with a delivery.',
    descriptionSource: 'authored',
  },
  '/thank-you/': {
    title: 'Thank You - The Burger Sleeves',
    description: 'Your message has been delivered to our sales department.',
    descriptionSource: 'live',
    robots: 'noindex, nofollow',
  },
};

/** Paginated archives keep WordPress's " - Page N of M - " title pattern. */
export function paginatedTitle(baseTitle: string, page: number, total: number): string {
  if (page === 1) return baseTitle;
  const [head, ...tail] = baseTitle.split(' - ');
  return [head, `Page ${page} of ${total}`, ...tail].join(' - ');
}
