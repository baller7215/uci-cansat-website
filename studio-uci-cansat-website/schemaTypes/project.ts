import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      options: {
        list: [
          {title: '2024-2025', value: '2024-2025'},
          {title: '2023-2024', value: '2023-2024'},
          {title: '2022-2023', value: '2022-2023'},
          {title: '2021-2022', value: '2021-2022'},
          {title: '2020-2021', value: '2020-2021'},
          {title: '2019-2020', value: '2019-2020'},
          {title: '2018-2019', value: '2018-2019'},
          {title: '2017-2018', value: '2017-2018'},
        ],
        layout: 'dropdown'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'member'}],
      }],
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          {title: 'Planning', value: 'planning'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'On Hold', value: 'on-hold'},
        ],
        layout: 'dropdown'
      },
      initialValue: 'planning',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'academicYear',
      media: 'images.0',
    },
  },
})
