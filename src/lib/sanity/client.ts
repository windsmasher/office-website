import { createClient, type SanityClient } from '@sanity/client';
import type { MyOfferPageData, NewsItem } from './types';

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
