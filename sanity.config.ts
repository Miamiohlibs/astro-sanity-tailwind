// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {visionTool} from '@sanity/vision'
import {linkField} from 'sanity-plugin-link-field'

import { schemaTypes } from './schema';

// We recommend configuring the preview location base URL using
// environment variables to support multiple environments
const SANITY_STUDIO_PREVIEW_URL = (
	process.env.SANITY_STUDIO_PREVIEW_URL
	|| 'http://localhost:3000'
)


export default defineConfig({
  name: 'mulibraries-astro-test',
  title: 'MU Libraries Astro Test',
  projectId: 'h8zbt27a',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    linkField(),
  ],
  schema: {
    types: schemaTypes,
  },
});
