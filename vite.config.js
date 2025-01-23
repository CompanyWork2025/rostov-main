import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      // Define the hostname (your site’s URL)
      hostname: 'https://www.rostgmu.in/', // replace with your actual website URL
    }),
  ],
  base: '/', // Ensure the base path is set for a root deployment
});
