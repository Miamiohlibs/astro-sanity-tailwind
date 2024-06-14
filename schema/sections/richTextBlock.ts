import { defineField, defineType } from 'sanity';

export const richTextBlock =  defineType({
  name: 'richTextBlock',
  title: 'Rich Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'richTextBlock',
      title: 'Rich Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});