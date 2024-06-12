// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {visionTool} from '@sanity/vision'
import {linkField} from 'sanity-plugin-link-field'

import { schemaTypes } from './schema';


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
