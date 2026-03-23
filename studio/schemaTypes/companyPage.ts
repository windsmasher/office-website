import { defineField, defineType } from 'sanity';

export const companyPage = defineType({
  name: 'companyPage',
  title: 'Dane firmy',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Tytuł strony',
      type: 'string',
      initialValue: 'Dane firmy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leadParagraph',
      title: 'Wstęp pod tytułem',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rows',
      title: 'Pola (etykieta / wartość)',
      type: 'array',
      of: [{ type: 'infoRow' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Dane firmy' };
    },
  },
});
