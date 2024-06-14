import { defineSection } from '@tinloof/sanity-studio';
import { defineField } from 'sanity';

export default defineSection({
  name: 'section.richTextBlock',
  title: 'Rich Text Block',
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
      name: 'richTextBlock',
      title: 'Rich Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
