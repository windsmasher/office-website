import { defineField, defineType } from 'sanity';

const iconOptions = [
  { title: 'Indywidualna', value: 'individual' },
  { title: 'Grupowa', value: 'group' },
  { title: 'Rodzinna', value: 'family' },
  { title: 'Małżeńska / para', value: 'couple' },
];

export const therapyFormEntry = defineType({
  name: 'therapyFormEntry',
  title: 'Forma terapii',
  type: 'object',
  fields: [
    defineField({
      name: 'iconKey',
      title: 'Ikona',
      type: 'string',
      options: { list: iconOptions },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
