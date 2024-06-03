// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import author from './schemas/author';
import gallery from './schemas/gallery';
import mainImage from './schemas/mainImage';
import post from './schemas/post';
import relatedLinks from './schemas/relatedLinks';

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'h8zbt27a',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    // If you want more content types, you can add them to this array
    types: [
        author, 
        gallery, 
        mainImage, 
        post, 
        relatedLinks,
      ],
  },
});
