import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a story.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a story in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export const carousel = defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'Caption',
      title: 'Caption',
      type: 'text',
    }),
    defineField({
      name: 'slideImage',
      title: 'Slide Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slideImageAlt',
      title: 'Slide Image Alternative Text',
      type: 'text',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      title: 'Target URL',
      name: 'targetURL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'slideImage',
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(' ') };
    },
  },
});
