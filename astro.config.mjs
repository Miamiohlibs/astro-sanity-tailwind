import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // experimental: {
  //   assets: true
  // },
  // Hybrid+adapter is required to support embedded Sanity Studio
  site: 'https://astro-sanity-cv5.pages.dev/',
  base: '/',
  // build: {
  //   assets: '',
  // },
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    sanity({
      projectId: 'h8zbt27a',
      dataset: 'production',
      studioBasePath: '/admin',
      useCdn: true,
      // `false` if you want to ensure fresh data
      apiVersion: '2023-03-20', // Set to date of setup to use the latest API version
    }),
    react(), // Required for Sanity Studio
  ],
});