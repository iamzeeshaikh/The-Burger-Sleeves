// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel';

import { SITE_URL } from './src/config/site-url.mjs';

// Astro only exposes PUBLIC_* variables automatically, so the SMTP credentials
// in .env never reach process.env and `npm run dev` cannot send mail. Load them
// here instead of inlining them via import.meta.env, which would bake secrets
// into the build output. On Vercel there is no .env file and loadEnv simply
// returns the platform-injected variables unchanged.
Object.assign(process.env, loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), ''));

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
