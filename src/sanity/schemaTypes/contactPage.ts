import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The main heading for the Contact page.',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Text',
      type: 'text',
      description: 'Text shown above the contact form or details.',
    }),
    defineField({
      name: 'mapCoordinates',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'The embed URL for the Google Maps iframe (if applicable).',
    }),
  ],
});
