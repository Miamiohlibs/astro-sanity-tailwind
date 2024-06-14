// ./schemas/textWithIllustration.js
import { defineSection } from '@tinloof/sanity-studio';
import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineSection({
  name: 'section.textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  options: {
    variants: [
      {
        assetUrl: '/images/logos.png',
      },
    ],
  },
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Illustration',
        media: image || ImageIcon,
      };
    },
  },
});