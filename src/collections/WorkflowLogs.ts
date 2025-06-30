import { CollectionConfig } from 'payload';


const WorkflowLogs: CollectionConfig = {
  slug: 'workflow-logs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'collectionSlug',
      type: 'text',
      required: true,
    },
    {
      name: 'documentId',
      type: 'text',
      required: true,
    },
    {
      name: 'status', // ✅ This field is missing in your schema
      type: 'text',
      required: true,
    },
    {
      name: 'stepId',
      type: 'text',
    },
    {
      name: 'action',
      type: 'select',
      options: ['approved', 'rejected', 'commented', 'assigned'],
    },
    {
      name: 'performedBy',
      type: 'text',
    },
    {
      name: 'comments',
      type: 'textarea',
    },
  ],
};

export default WorkflowLogs;
