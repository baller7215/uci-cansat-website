import {defineField, defineType} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subteam',
      title: 'Subteam',
      type: 'string',
      options: {
        list: [
          {title: 'Management', value: 'management'},
          {title: 'Executives', value: 'executives'},
          {title: 'Mechanical', value: 'mechanical'},
          {title: 'Electrical', value: 'electrical'},
          {title: 'Controls', value: 'controls'},
          {title: 'Operations', value: 'operations'},
          {title: 'Web Development', value: 'webDev'},
          {title: 'Advisors', value: 'advisors'},
        ],
        layout: 'dropdown'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile Image',
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
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'major',
      title: 'Major/Field of Study',
      type: 'string',
    }),
    defineField({
      name: 'gradYear',
      title: 'Graduation Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Bio/Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      options: {
        list: [
          {title: '2025-2026', value: '2025-2026'},
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
      name: 'isActive',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in lists',
    }),
    defineField({
      name: 'personId',
      title: 'Person ID',
      type: 'string',
      description: 'Unique identifier for the same person across different years/roles (e.g., "sarah-ho", "kaylee-kim")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryRole',
      title: 'Primary Role',
      type: 'boolean',
      initialValue: true,
      description: 'Mark as true for the person\'s main/primary role if they have multiple roles in the same year',
    }),
    defineField({
      name: 'isAlumni',
      title: 'Alumni Status',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as true for graduated members',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'profileImg',
    },
  },
})