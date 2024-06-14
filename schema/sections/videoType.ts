// ./schemas/videoType.js
import { defineSection } from '@tinloof/sanity-studio';
import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineSection({
  name: 'section.video',
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
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: 'videoLabel',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Video',
        media: DocumentVideoIcon,
      };
    },
  },
});