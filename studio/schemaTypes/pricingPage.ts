import { defineField, defineType } from 'sanity';

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Cennik',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Tytuł strony',
      type: 'string',
      initialValue: 'Cennik',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Podtytuł pod tytułem',
      type: 'string',
      initialValue: 'Sesja psychoterapii',
    }),
    defineField({
      name: 'sharedCardLabel',
      title: 'Etykieta na obu kartach (np. „Sesja psychoterapii”)',
      type: 'string',
      initialValue: 'Sesja psychoterapii',
    }),
    defineField({
      name: 'individualTitle',
      title: 'Tytuł — cena indywidualna',
      type: 'string',
      initialValue: 'Indywidualna',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'individualAmount',
      title: 'Kwota indywidualna (PLN)',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'familyTitle',
      title: 'Tytuł — cena rodzinna / par',
      type: 'string',
      initialValue: 'Rodzinna / Małżeńska / Par',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'familyAmount',
      title: 'Kwota rodzinna (PLN)',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'ctaBannerTitle',
      title: 'Tytuł banera CTA',
      type: 'string',
      initialValue: 'Terminy spotkań ustalane są indywidualnie',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Cennik' };
    },
  },
});
