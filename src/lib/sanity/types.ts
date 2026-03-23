import type { PortableTextBlock } from '@portabletext/react';

export type NewsItem = {
  _id: string;
  title: string;
  publishedAt: string;
  excerpt?: string;
  body?: string;
  linkUrl?: string;
  linkLabel?: string;
};

export type OfferCard = {
  _key: string;
  title: string;
  listItems?: string[];
  body?: string;
};

export type MyOfferPageData = {
  pageTitle: string;
  cards: OfferCard[];
};

export type AboutMePageData = {
  intro: PortableTextBlock[];
  partnersTitle: string;
  partnersBody: string;
  supervisionTitle: string;
  supervisionBody: string;
};
