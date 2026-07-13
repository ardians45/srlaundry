// @ts-check
// Trigger redeploy after revert
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.srlaundry.site',

  build: {
    inlineStylesheets: 'always'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});