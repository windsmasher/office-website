import React, { useEffect, useState } from 'react';
import { fetchNewsItems, getSanityBrowserClient } from '../lib/sanity/client';
import type { NewsItem } from '../lib/sanity/types';
import { CmsErrorMessage } from './CmsErrorMessage';
import { NewsBody } from './NewsBody';

type NewsSectionProps = {
  /** When true, renders only inner content (no outer section / title) for use inside a parent block. */
  embedded?: boolean;
};

export const NewsSection: React.FC<NewsSectionProps> = ({ embedded = false }) => {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!getSanityBrowserClient()) {
      setItems([]);
      setError('missing_env');
      return;
    }

    let cancelled = false;
    fetchNewsItems()
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) {
          setError('fetch');
          setItems([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const newsGrid =
    items && items.length > 0 ? (
      <div className="card-grid card-grid--2">
        {items.map((item) => (
          <article className="card" key={item._id}>
            <h3 className="card__title">{item.title}</h3>
            <p className="news-card__date">
              {new Date(item.publishedAt).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            {item.excerpt ? <p>{item.excerpt}</p> : null}
            {item.body ? <NewsBody text={item.body} /> : null}
            {item.linkUrl ? (
              <p>
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel || item.linkUrl}
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    ) : null;

  if (embedded) {
    if (items === null) {
      return (
        <div className="news-section__dynamic">
          <p className="news-section__status">Ładowanie…</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="news-section__dynamic">
          <CmsErrorMessage error={error} fetchResource="aktualności" />
        </div>
      );
    }
    if (items.length === 0) {
      return null;
    }
    return <div className="news-section__dynamic">{newsGrid}</div>;
  }

  if (items === null) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title">Aktualności</h2>
          <p className="news-section__status">Ładowanie…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title">Aktualności</h2>
          <CmsErrorMessage error={error} fetchResource="aktualności" />
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title">Aktualności</h2>
          <p>Brak opublikowanych aktualności.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Aktualności</h2>
        {newsGrid}
      </div>
    </section>
  );
};
