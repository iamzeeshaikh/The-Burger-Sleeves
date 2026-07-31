// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import { SITE_URL } from './src/config/site-url.mjs';

// The live WordPress site serves every indexable URL with a trailing slash and
// canonicalises to the apex host over HTTPS. Both are preserved exactly.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({
    imageService: false,
  }),
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Product photography is 1080x1080; category/loop cards never exceed 600px wide.
    responsiveStyles: true,
  },
  integrations: [],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
