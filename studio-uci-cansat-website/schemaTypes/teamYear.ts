import {defineField, defineType} from 'sanity'

export const teamYearType = defineType({
  name: 'teamYear',
  title: 'Team Year',
  type: 'document',
  fields: [
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
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Year Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of this academic year\'s team',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Year',
      type: 'boolean',
      initialValue: false,
      description: 'Mark this as the current academic year',
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Notable achievements or milestones for this year',
    }),
  ],
  preview: {
    select: {
      title: 'academicYear',
      subtitle: 'description',
      media: 'teamPhoto',
    },
  },
})
