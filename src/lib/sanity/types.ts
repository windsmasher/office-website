export type NewsItem = {
  _id: string;
  title: string;
  publishedAt: string;
  excerpt?: string;
  body?: string;
  linkUrl?: string;
  linkLabel?: string;
};
