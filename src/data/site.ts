/**
 * Site-wide chrome: contact details, navigation and footer link lists.
 * Every value is transcribed from the live WordPress header/footer templates
 * (Elementor library posts 337 and 343) — destinations and anchor text unchanged.
 */

export const SITE = {
  name: 'The Burger Sleeves',
  origin: 'https://theburgersleeves.com',
  phone: '(503) 358-0443',
  phoneHref: 'tel:+15033580443',
  email: 'info@theburgersleeves.com',
  address: '303 W 137th Street, #5A New York, NY 10030 United States',
  addressParts: {
    streetAddress: '303 W 137th Street, #5A',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10030',
    addressCountry: 'US',
  },
  copyright: '@ 2026 TheBurgerSleeves. All rights reserved.',
  footerBlurb:
    'Yes, we ship worldwide including UK, USA, Canada, Australia, and throughout Europe. Shipping costs and delivery times vary by location.',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Main menu — mirrors the `main-menu` nav_menu in the WordPress export. */
export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Burger Sleeves Styles',
    href: '/product-category/burger-sleeves-styles/',
    children: [
      { label: 'Black Burger Sleeves', href: '/product/black-burger-sleeves/' },
      { label: 'Matte Finish Burger Sleeves', href: '/product/matte-finish-burger-sleeves/' },
      { label: 'Gloss Finish Burger Sleeves', href: '/product/gloss-finish-burger-sleeves/' },
      { label: 'Die Cut Burger Sleeves', href: '/product/die-cut-burger-sleeves/' },
      { label: 'Kraft Brown Burger Sleeves', href: '/product/kraft-brown-burger-sleeves/' },
      { label: 'White Burger Sleeves', href: '/product/white-burger-sleeves/' },
    ],
  },
  {
    label: 'Special Sleeves Uses',
    href: '/product-category/special-sleeves-uses/',
    children: [
      { label: 'Restaurant Burger Sleeves', href: '/product/restaurant-burger-sleeves/' },
      { label: 'Food Truck Burger Sleeves', href: '/product/food-truck-burger-sleeves/' },
      { label: 'Cafe Burger Sleeves', href: '/product/cafe-burger-sleeves/' },
      { label: 'Street Food Burger Sleeves', href: '/product/street-food-burger-sleeves/' },
      { label: 'Promotional Burger Sleeves', href: '/product/promotional-burger-sleeves/' },
      { label: 'Event Burger Sleeves', href: '/product/event-burger-sleeves/' },
    ],
  },
  {
    label: 'Burger Sleeves Sizes',
    href: '/product-category/burger-sleeves-sizes/',
    children: [
      { label: 'Medium Burger Sleeves', href: '/product/medium-burger-sleeves/' },
      { label: 'Large Burger Sleeves', href: '/product/large-burger-sleeves/' },
      { label: 'Jumbo Burger Sleeves', href: '/product/jumbo-burger-sleeves/' },
      { label: 'Slider Burger Sleeves', href: '/product/slider-burger-sleeves/' },
      { label: 'Double Patty Burger Sleeves', href: '/product/double-patty-burger-sleeves/' },
      { label: 'Small Burger Sleeves', href: '/product/small-burger-sleeves/' },
    ],
  },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Burger Sleeves Styles', href: '/product-category/burger-sleeves-styles/' },
  { label: 'Special Sleeves Uses', href: '/product-category/special-sleeves-uses/' },
  { label: 'Burger Sleeves Sizes', href: '/product-category/burger-sleeves-sizes/' },
  { label: 'Burger Sleeves Materials', href: '/product-category/burger-sleeves-materials/' },
  { label: 'Burger Sleeves Combo', href: '/product-category/burger-sleeves-combo/' },
  { label: 'Customized Burger Sleeves', href: '/product-category/customized-burger-sleeves/' },
];

export const FOOTER_COMPANY_LINKS = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Refund and Returns Policy', href: '/refund_returns/' },
  { label: 'Shipping Policy', href: '/shipping-policy/' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
];

/**
 * The live site renders Facebook / Twitter / YouTube glyphs with no href — the
 * business has no linked profiles (the Organization schema ships `sameAs: []`).
 * They are reproduced as decorative marks rather than links to nowhere.
 */
export const SOCIAL_ICONS = ['facebook', 'twitter', 'youtube'] as const;
