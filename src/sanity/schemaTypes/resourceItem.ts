import { defineField, defineType } from 'sanity';

export const resourceItem = defineType({
  name: 'resourceItem',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Document', value: 'document' },
          { title: 'Link', value: 'link' },
          { title: 'Video', value: 'video' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'file',
      title: 'File Upload',
      type: 'file',
      description: 'Upload a PDF or document (if applicable)',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'URL to the resource (if not a file upload)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
});
