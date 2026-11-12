import type { CollectionConfig } from 'payload'

const isAdmin = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'interest', 'status', 'createdAt'],
    group: 'Customer care',
  },
  access: {
    create: () => true,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 100,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      maxLength: 30,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'interest',
      type: 'select',
      required: true,
      options: [
        { label: 'Beds', value: 'beds' },
        { label: 'Sofas', value: 'sofas' },
        { label: 'Curtains & Sheers', value: 'curtains' },
        { label: 'Multiple Categories', value: 'multiple' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      maxLength: 2000,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In progress', value: 'in-progress' },
        { label: 'Closed', value: 'closed' },
      ],
      access: {
        create: () => false,
        update: isAdmin,
      },
    },
  ],
}
