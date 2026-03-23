import { defineField, defineType } from 'sanity';

export const offerCard = defineType({
  name: 'offerCard',
  title: 'Karta oferty',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Nagłówek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listItems',
      title: 'Punkty listy (opcjonalnie)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Tekst akapitu (opcjonalnie)',
      type: 'text',
      rows: 6,
    }),
  ],
});
