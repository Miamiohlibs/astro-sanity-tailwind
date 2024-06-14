import { defineField } from 'sanity';
import { defineSection } from '@tinloof/sanity-studio';

export default defineSection({
  name: 'section.link',
  title: 'Link Component',
  type: 'object',
  options: {
    variants: [
      {
        assetUrl: '/images/logos.png',
      },
    ],
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
  ],
});