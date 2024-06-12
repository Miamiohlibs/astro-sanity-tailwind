import { defineField, defineType } from 'sanity';

export const linkComponent = defineType({
  name: 'linkComponent',
  title: 'Link Component',
  type: 'object',
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
      validation: (rule) => rule.custom((field) => requiredLinkField(field)),
    })
  ],
});