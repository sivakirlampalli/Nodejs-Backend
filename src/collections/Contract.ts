import type { CollectionConfig } from 'payload';




const Contract: CollectionConfig = {
  slug: 'contract',
  admin: {
    useAsTitle: 'contractName',
  },
  fields: [
    {
      name: 'contractName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'amount',
      type: 'number',
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
  ],
};

export default Contract;
