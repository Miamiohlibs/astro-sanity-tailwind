import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'richTextType',
  title: 'Rich Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});