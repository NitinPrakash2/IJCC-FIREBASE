import { defineField, defineType } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The main heading for the About Us page.',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      description: 'Introductory text about the organization.',
    }),
    defineField({
      name: 'mission',
      title: 'Mission & Vision',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text area for Mission and Vision statements.',
    }),
    defineField({
      name: 'history',
      title: 'Company History',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text area for the history of the organization.',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
