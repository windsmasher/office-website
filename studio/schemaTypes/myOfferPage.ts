import { defineField, defineType } from 'sanity';

export const myOfferPage = defineType({
  name: 'myOfferPage',
  title: 'Moja oferta',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Tytuł strony',
      type: 'string',
      initialValue: 'Moja oferta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Karty',
      type: 'array',
      of: [{ type: 'offerCard' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Moja oferta' };
    },
  },
});
