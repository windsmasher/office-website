import React, { useEffect, useState } from 'react';
import {
  fetchCompanyPage,
  getSanityBrowserClient,
} from '../lib/sanity/client';
import type { CompanyPageData } from '../lib/sanity/types';
import { CmsErrorMessage } from '../components/CmsErrorMessage';

const CompanyInfo: React.FC = () => {
  const [data, setData] = useState<CompanyPageData | null | undefined>(
    undefined,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!getSanityBrowserClient()) {
      setData(null);
      setError('missing_env');
      return;
    }

    let cancelled = false;
    fetchCompanyPage()
      .then((doc) => {
        if (!cancelled) setData(doc ?? null);
      })
      .catch(() => {
        if (!cancelled) {
          setError('fetch');
          setData(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const loading = data === undefined && error === null;

  const pageTitle = data?.pageTitle?.trim() || 'Dane firmy';

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{pageTitle}</h1>
          {!loading && !error && data?.leadParagraph ? (
            <p className="page-header__subtitle">{data.leadParagraph}</p>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p className="news-section__status">Ładowanie…</p>
          ) : null}
          {error ? (
            <CmsErrorMessage error={error} fetchResource="danych firmy" />
          ) : null}
          {!loading && !error && data === null ? (
            <p>Brak strony „Dane firmy” w CMS.</p>
          ) : null}
          {!loading && !error && data && data.rows.length === 0 ? (
            <p>Brak pól w dokumencie CMS.</p>
          ) : null}
          {!loading && !error && data && data.rows.length > 0 ? (
            <div className="info-grid">
              {data.rows.map((item) => (
                <div className="info-card" key={item._key}>
                  <span className="info-card__label">{item.label}</span>
                  <span className="info-card__value">{item.value}</span>
                  {item.subValue ? (
                    <span className="info-card__sub">{item.subValue}</span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default CompanyInfo;
