import type { StructureResolver } from 'sanity/structure';

/**
 * Single flat list — no dashboard clutter, only editable document types.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Edycja')
    .items([
      S.documentTypeListItem('newsItem').title('Aktualności'),
      S.documentTypeListItem('myOfferPage').title('Moja oferta'),
      S.documentTypeListItem('aboutMePage').title('O mnie'),
      S.documentTypeListItem('pricingPage').title('Cennik'),
      S.documentTypeListItem('companyPage').title('Dane firmy'),
    ]);
