// ./schemas/pageType.ts

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
        name: 'richTextBlock',
        type: 'richTextBlock',
        }),
        // defineArrayMember({
        //     name: 'Link Component',
        //     type: 'linkComponent',
        // }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        // defineArrayMember({
        //   name: 'form',
        //   type: 'form',
        // }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        // defineArrayMember({
        //   name: 'callToAction',
        //   type: 'reference',
        //   to: [{type: 'promotion'}],
        // }),
      ],
    }),
  ],
  icon: DocumentIcon,
})