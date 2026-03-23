import { defineField, defineType } from 'sanity';

export const aboutTherapyPage = defineType({
  name: 'aboutTherapyPage',
  title: 'O terapii',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Tytuł strony',
      type: 'string',
      initialValue: 'O terapii',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Podtytuł',
      type: 'string',
      initialValue:
        'Psychoterapia — dlaczego warto korzystać z psychoterapii?',
    }),
    defineField({
      name: 'leftLead',
      title: 'Lewa karta — akapit przed listą',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leftListItems',
      title: 'Lewa karta — punkty listy',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'rightColumnBody',
      title: 'Prawa karta — treść (akapity oddziel podwójnym enterem)',
      type: 'text',
      rows: 12,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'therapyFormsTitle',
      title: 'Nagłówek sekcji „Formy terapii”',
      type: 'string',
      initialValue: 'Formy terapii',
    }),
    defineField({
      name: 'therapyForms',
      title: 'Formy terapii',
      type: 'array',
      of: [{ type: 'therapyFormEntry' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'stepsSectionTitle',
      title: 'Nagłówek sekcji kroków',
      type: 'string',
      initialValue: 'Jak wygląda terapia?',
    }),
    defineField({
      name: 'steps',
      title: 'Kroki',
      type: 'array',
      of: [{ type: 'therapyStep' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaBannerTitle',
      title: 'Tytuł banera CTA',
      type: 'string',
      initialValue:
        'Nie uciekaj od problemów, rozwiąż je z pomocą specjalisty!',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'O terapii' };
    },
  },
});
