import { defineType } from 'sanity';

/**
 * Rich text with optional inline links (e.g. MONAR).
 */
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Treść z linkami',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normalny', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Pogrubienie', value: 'strong' },
          { title: 'Kursywa', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'Adres URL',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    },
  ],
});
