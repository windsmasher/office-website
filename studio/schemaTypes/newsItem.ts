import { defineField, defineType } from 'sanity';

export const newsItem = defineType({
  name: 'newsItem',
  title: 'Aktualność',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Krótki opis (opcjonalnie)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Treść',
      type: 'text',
      rows: 12,
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link (opcjonalnie)',
      type: 'url',
    }),
    defineField({
      name: 'linkLabel',
      title: 'Tekst linku',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
    },
    prepare({ title, date }) {
      return {
        title: title || 'Bez tytułu',
        subtitle: date
          ? new Date(date).toLocaleDateString('pl-PL')
          : 'Brak daty',
      };
    },
  },
});
