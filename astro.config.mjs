import { defineConfig } from 'astro/config';
// Use Vercel Edge Functions (Recommended)
//import vercel from '@astrojs/vercel/edge';
// Can also use Serverless Functions
// import vercel from '@astrojs/vercel/serverless';
// Or a completely static build
import vercel from '@astrojs/vercel/static';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  experimental: {
    assets: true
  },
  adapter: vercel({
    imageService: true
  }),
  integrations: [
  sanity({
    projectId: 'h8zbt27a',
    dataset: 'production',
    output: 'static',
    adapter: vercelStatic(),
    useCdn: false, // See note on using the CDN
    apiVersion: '2023-03-20', // insert the current date to access the latest version of the API
    studioBasePath: '/admin', // If you want to access the Studio on a route
  }),
 react()]
});