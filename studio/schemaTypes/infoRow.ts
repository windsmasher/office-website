import { defineField, defineType } from 'sanity';

export const infoRow = defineType({
  name: 'infoRow',
  title: 'Pole informacyjne',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Etykieta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Wartość',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subValue',
      title: 'Druga linia (opcjonalnie)',
      type: 'string',
    }),
  ],
});
