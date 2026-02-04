import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
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
    // Overview Section
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'object',
      fields: [
        defineField({
          name: 'team',
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
          title: 'Description',
          type: 'text',
          rows: 6,
          description: 'Overview description of the project (can include multiple quarters)',
        }),
      ],
    }),
    // Project Definition Section
    defineField({
      name: 'projectDefinition',
      title: 'Project Definition',
      type: 'object',
      fields: [
        defineField({
          name: 'show',
          title: 'Show Project Definition Section',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'planning',
          title: 'Planning Text',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'problemStatement',
          title: 'Problem Statement',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'image',
          title: 'Project Definition Image',
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
      ],
    }),
    // Design Section
    defineField({
      name: 'design',
      title: 'Design',
      type: 'object',
      fields: [
        defineField({
          name: 'show',
          title: 'Show Design Section',
          type: 'boolean',
          initialValue: false,
        }),
        // Major Components
        defineField({
          name: 'majorComponents',
          title: 'Major Components',
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'bulletPoints',
              title: 'Bullet Points',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'id',
                    type: 'number',
                    title: 'ID',
                  },
                  {
                    name: 'text',
                    type: 'text',
                    title: 'Text',
                    rows: 3,
                  },
                ],
                preview: {
                  select: {
                    title: 'text',
                    subtitle: 'id',
                  },
                },
              }],
            }),
          ],
        }),
        // Key Components
        defineField({
          name: 'keyComponents',
          title: 'Key Components',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Component Name',
              },
              {
                name: 'description',
                type: 'text',
                title: 'Description',
                rows: 3,
              },
            ],
            preview: {
              select: {
                title: 'name',
                subtitle: 'description',
              },
            },
          }],
        }),
        // Our Works
        defineField({
          name: 'ourWorks',
          title: 'Our Works',
          type: 'object',
          fields: [
            defineField({
              name: 'show',
              title: 'Show Our Works Section',
              type: 'boolean',
              initialValue: false,
            }),
            // Mechanical
            defineField({
              name: 'mechanical',
              title: 'Mechanical',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  initialValue: 'Mechanical',
                },
                {
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                  rows: 6,
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
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
                },
                {
                  name: 'model',
                  type: 'string',
                  title: '3D Model Path (GLTF)',
                  description: 'Path to 3D model file (e.g., /assets/models/2024-2025/electrical/model.gltf)',
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
              ],
            }),
            // Electrical
            defineField({
              name: 'electrical',
              title: 'Electrical',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  initialValue: 'Electrical',
                },
                {
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                  rows: 6,
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
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
                },
                {
                  name: 'model',
                  type: 'string',
                  title: '3D Model Path (GLTF)',
                  description: 'Path to 3D model file (e.g., /assets/models/2024-2025/electrical/model.gltf)',
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
              ],
            }),
            // Controls
            defineField({
              name: 'controls',
              title: 'Controls',
              type: 'object',
              fields: [
                {
                  name: 'show',
                  type: 'boolean',
                  title: 'Show Controls Section',
                  initialValue: false,
                },
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  initialValue: 'Controls',
                },
                {
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                  rows: 6,
                },
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
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
                },
              ],
            }),
          ],
        }),
        // Senior Subsystem
        defineField({
          name: 'seniorSubsystem',
          title: 'Senior Subsystem',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Senior Subsystem Section',
              initialValue: false,
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 6,
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
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
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        }),
        // Descent Control
        defineField({
          name: 'descentControl',
          title: 'Descent Control',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Descent Control Section',
              initialValue: false,
            },
            {
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    type: 'string',
                    title: 'Name',
                  },
                  {
                    name: 'bullets',
                    type: 'array',
                    title: 'Bullet Points',
                    of: [{type: 'string'}],
                  },
                  {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
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
                  },
                ],
                preview: {
                  select: {
                    title: 'name',
                  },
                },
              }],
            },
          ],
        }),
        // Mechanical Subsystem
        defineField({
          name: 'mechanicalSubsystem',
          title: 'Mechanical Subsystem',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Mechanical Subsystem Section',
              initialValue: false,
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
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
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 6,
            },
            {
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    type: 'string',
                    title: 'Name',
                  },
                  {
                    name: 'bullets',
                    type: 'array',
                    title: 'Bullet Points',
                    of: [{type: 'string'}],
                  },
                ],
                preview: {
                  select: {
                    title: 'name',
                  },
                },
              }],
            },
          ],
        }),
        // Electrical Power Subsystem
        defineField({
          name: 'electricalPowerSubsystem',
          title: 'Electrical Power Subsystem',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Electrical Power Subsystem Section',
              initialValue: false,
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
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
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'bullets',
              type: 'array',
              title: 'Bullet Points',
              of: [{type: 'string'}],
            },
          ],
        }),
        // Flight Software
        defineField({
          name: 'flightSoftware',
          title: 'Flight Software',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Flight Software Section',
              initialValue: false,
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
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
            },
            {
              name: 'items',
              type: 'array',
              title: 'Items',
              of: [{
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    type: 'string',
                    title: 'Name',
                  },
                  {
                    name: 'bullets',
                    type: 'array',
                    title: 'Bullet Points',
                    of: [{type: 'string'}],
                  },
                ],
                preview: {
                  select: {
                    title: 'name',
                  },
                },
              }],
            },
          ],
        }),
        // Ground Control System
        defineField({
          name: 'groundControlSystem',
          title: 'Ground Control System',
          type: 'object',
          fields: [
            {
              name: 'show',
              type: 'boolean',
              title: 'Show Ground Control System Section',
              initialValue: false,
            },
            {
              name: 'leftImage',
              type: 'image',
              title: 'Left Image',
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
            },
            {
              name: 'rightImage',
              type: 'image',
              title: 'Right Image',
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
            },
          ],
        }),
      ],
    }),
    // Competition Requirements
    defineField({
      name: 'competitionRequirements',
      title: 'Competition Requirements',
      type: 'object',
      fields: [
        {
          name: 'show',
          type: 'boolean',
          title: 'Show Competition Requirements Section',
          initialValue: false,
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          rows: 5,
        },
        {
          name: 'bullets',
          type: 'array',
          title: 'Bullet Points',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'id',
                type: 'number',
                title: 'ID',
              },
              {
                name: 'point',
                type: 'string',
                title: 'Point',
              },
            ],
            preview: {
              select: {
                title: 'point',
                subtitle: 'id',
              },
            },
          }],
        },
      ],
    }),
    // Team Goals
    defineField({
      name: 'teamGoals',
      title: 'Team Goals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'id',
            type: 'number',
            title: 'ID',
          },
          {
            name: 'point',
            type: 'string',
            title: 'Goal Point',
          },
        ],
        preview: {
          select: {
            title: 'point',
            subtitle: 'id',
          },
        },
      }],
    }),
    // Posters
    defineField({
      name: 'posters',
      title: 'Posters',
      type: 'object',
      fields: [
        {
          name: 'fall',
          type: 'image',
          title: 'Fall Design Review Poster',
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
        },
        {
          name: 'winter',
          type: 'image',
          title: 'Winter Design Review Poster',
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
        },
        {
          name: 'spring',
          type: 'image',
          title: 'Spring Design Review Poster',
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
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'academicYear',
      subtitle: 'overview.description',
      media: 'overview.team',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No description',
        media,
      }
    },
  },
})
