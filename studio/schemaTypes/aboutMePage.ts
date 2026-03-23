import { defineField, defineType } from 'sanity';

export const aboutMePage = defineType({
  name: 'aboutMePage',
  title: 'O mnie — edytowalne sekcje',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Wstęp (pierwsza karta)',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnersTitle',
      title: 'Tytuł — Partnerzy',
      type: 'string',
      initialValue: 'Partnerzy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnersBody',
      title: 'Treść — Partnerzy',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supervisionTitle',
      title: 'Tytuł — Superwizje',
      type: 'string',
      initialValue: 'Superwizje',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supervisionBody',
      title: 'Treść — Superwizje',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'O mnie (edytowalne)' };
    },
  },
});
