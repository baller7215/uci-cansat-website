import {defineField, defineType} from 'sanity'

export const sponsorType = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the sponsor\'s website',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Description of the logo for accessibility',
        }
      ],
      validation: (rule) => rule.required(),
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
      name: 'tier',
      title: 'Sponsorship Tier',
      type: 'string',
      options: {
        list: [
          {title: 'Platinum', value: 'platinum'},
          {title: 'Gold', value: 'gold'},
          {title: 'Silver', value: 'silver'},
          {title: 'Bronze', value: 'bronze'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'dropdown'
      },
      description: 'Sponsorship tier level (optional)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in lists. Leave empty to sort alphabetically.',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Sponsor',
      type: 'boolean',
      initialValue: true,
      description: 'Show this sponsor on the website',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description or notes about the sponsor',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'academicYear',
      media: 'logo',
    },
  },
})
