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

export type PricingPageData = {
  pageTitle: string;
  pageSubtitle?: string;
  sharedCardLabel?: string;
  individualTitle: string;
  individualAmount: number;
  familyTitle: string;
  familyAmount: number;
  ctaBannerTitle?: string;
};

export type CompanyInfoRow = {
  _key: string;
  label: string;
  value: string;
  subValue?: string;
};

export type CompanyPageData = {
  pageTitle: string;
  leadParagraph: string;
  rows: CompanyInfoRow[];
};

export type TherapyFormCms = {
  _key: string;
  iconKey: string;
  title: string;
};

export type TherapyStepCms = {
  _key: string;
  stepNumber: number;
  title: string;
  body: string;
};

export type AboutTherapyPageData = {
  pageTitle: string;
  pageSubtitle?: string;
  leftLead: string;
  leftListItems: string[];
  rightColumnBody: string;
  therapyFormsTitle?: string;
  therapyForms: TherapyFormCms[];
  stepsSectionTitle?: string;
  steps: TherapyStepCms[];
  ctaBannerTitle?: string;
};
