// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {visionTool} from '@sanity/vision'
import {sanityClient} from 'sanity:client'

import post from './schemas/post';
import blockContent from './schemas/blockContent';

const {projectId, dataset} = sanityClient.config()

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'h8zbt27a',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    // If you want more content types, you can add them to this array
    types: [
        blockContent,
        post, 
      ],
  },
});
