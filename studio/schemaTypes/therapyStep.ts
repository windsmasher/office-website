import { defineField, defineType } from 'sanity';

export const therapyStep = defineType({
  name: 'therapyStep',
  title: 'Krok',
  type: 'object',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Numer',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Opis',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
