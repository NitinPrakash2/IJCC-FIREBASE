import { defineField, defineType } from 'sanity';

export const serviceItem = defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for the URL (e.g., /services/digital-services)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the lucide-react icon to use (e.g., Globe, Building, Handshake)',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief description shown on the services listing page.',
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'Full content for the individual service page.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this service should appear (e.g., 1, 2, 3)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
    },
  },
});
