// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // experimental: {
  //   assets: true
  // },
  // Hybrid+adapter is required to support embedded Sanity Studio
  site: 'https://miamiohlibs.github.io',
  base: 'astro-sanity',
   build: {
     assets: 'astro',
   },
  output: 'static',
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