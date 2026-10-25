import { defineConfig } from 'astro/config';
// For the personal GitHub Pages repository: Kunwar-crypto.github.io.
// For another repository set PUBLIC_BASE_PATH to /repository-name/ in the workflow.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://kunwar-crypto.github.io',
  base: process.env.PUBLIC_BASE_PATH || '/'
});
