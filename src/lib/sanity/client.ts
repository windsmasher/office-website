import { createClient, type SanityClient } from '@sanity/client';
import type {
  AboutMePageData,
  AboutTherapyPageData,
  CompanyPageData,
  MyOfferPageData,
  NewsItem,
  PricingPageData,
} from './types';

const apiVersion = '2024-01-01';

export const newsItemsQuery = `*[_type == "newsItem" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  excerpt,
  body,
  linkUrl,
  linkLabel
}`;

export const myOfferPageQuery = `*[_type == "myOfferPage"][0]{
  pageTitle,
  "cards": coalesce(cards[]{
    _key,
    title,
    listItems,
    body
  }, [])
}`;

export function getSanityBrowserClient(): SanityClient | null {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const dataset = import.meta.env.VITE_SANITY_DATASET;
  if (!projectId || !dataset) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}

export async function fetchNewsItems(): Promise<NewsItem[]> {
  const client = getSanityBrowserClient();
  if (!client) return [];
  return client.fetch<NewsItem[]>(newsItemsQuery);
}

export async function fetchMyOfferPage(): Promise<MyOfferPageData | null> {
  const client = getSanityBrowserClient();
  if (!client) return null;
  return client.fetch<MyOfferPageData | null>(myOfferPageQuery);
}

export const aboutMePageQuery = `*[_type == "aboutMePage"][0]{
  intro,
  partnersTitle,
  partnersBody,
  supervisionTitle,
  supervisionBody
}`;

export async function fetchAboutMePage(): Promise<AboutMePageData | null> {
  const client = getSanityBrowserClient();
  if (!client) return null;
  return client.fetch<AboutMePageData | null>(aboutMePageQuery);
}

export const pricingPageQuery = `*[_type == "pricingPage"][0]{
  pageTitle,
  pageSubtitle,
  sharedCardLabel,
  individualTitle,
  individualAmount,
  familyTitle,
  familyAmount,
  ctaBannerTitle
}`;

export async function fetchPricingPage(): Promise<PricingPageData | null> {
  const client = getSanityBrowserClient();
  if (!client) return null;
  return client.fetch<PricingPageData | null>(pricingPageQuery);
}

export const companyPageQuery = `*[_type == "companyPage"][0]{
  pageTitle,
  leadParagraph,
  "rows": coalesce(rows[]{ _key, label, value, subValue }, [])
}`;

export async function fetchCompanyPage(): Promise<CompanyPageData | null> {
  const client = getSanityBrowserClient();
  if (!client) return null;
  return client.fetch<CompanyPageData | null>(companyPageQuery);
}

export const aboutTherapyPageQuery = `*[_type == "aboutTherapyPage"][0]{
  pageTitle,
  pageSubtitle,
  leftLead,
  "leftListItems": coalesce(leftListItems[], []),
  rightColumnBody,
  therapyFormsTitle,
  "therapyForms": coalesce(therapyForms[]{ _key, iconKey, title }, []),
  stepsSectionTitle,
  "steps": coalesce(steps[]{ _key, stepNumber, title, body }, []),
  ctaBannerTitle
}`;

export async function fetchAboutTherapyPage(): Promise<AboutTherapyPageData | null> {
  const client = getSanityBrowserClient();
  if (!client) return null;
  return client.fetch<AboutTherapyPageData | null>(aboutTherapyPageQuery);
}
