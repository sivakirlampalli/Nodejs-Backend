import type { CollectionConfig } from 'payload';

const Workflows: CollectionConfig = {
  slug: 'workflows',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'collectionSlug',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the collection this workflow is linked to (e.g., blog, contract)',
      },
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'stepName',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          options: ['approval', 'review', 'comment-only'],
          required: true,
        },
        {
          name: 'assignedTo',
          type: 'relationship',
          relationTo: 'users',
          hasMany: true,
          required: true,
        },
        {
          name: 'slaInHours',
          type: 'number',
          required: false,
        },
      ],
    },
  ],
};

export default Workflows;
