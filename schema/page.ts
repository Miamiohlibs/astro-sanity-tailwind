import { SectionsArrayInput, definePathname } from '@tinloof/sanity-studio';
import { defineField, defineType } from 'sanity';
import { sections } from './sections';

export const page = defineType({
  type: 'document',
  name: 'page',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    definePathname({
      name: 'pathname',
      options: {
        source: 'title',
      },
      preview: {
        select: {
          title: 'title',
          image: 'image',
        },
        prepare({ title, image }) {
          return {
            title,
            media: image,
          };
        },
      },
    }),
    defineField({
      name: 'sectionsBody',
      title: 'Sections',
      type: 'array',
      of: sections.map((section) => ({
        type: section.name,
      })),
      components: {
        input: SectionsArrayInput,
      },
    }),
  ],
});
