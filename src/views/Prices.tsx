import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';
import {
  fetchPricingPage,
  getSanityBrowserClient,
} from '../lib/sanity/client';
import type { PricingPageData } from '../lib/sanity/types';
import { CmsErrorMessage } from '../components/CmsErrorMessage';

const Prices: React.FC = () => {
  const [data, setData] = useState<PricingPageData | null | undefined>(
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
    fetchPricingPage()
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
  const phoneHref = `tel:${Config.PhoneNumber.replace(/\s/g, '')}`;

  const pageTitle = data?.pageTitle?.trim() || 'Cennik';
  const pageSubtitle = data?.pageSubtitle?.trim() || 'Sesja psychoterapii';
  const cardLabel = data?.sharedCardLabel?.trim() || 'Sesja psychoterapii';
  const ctaTitle =
    data?.ctaBannerTitle?.trim() ||
    'Terminy spotkań ustalane są indywidualnie';

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{pageTitle}</h1>
          <p className="page-header__subtitle">{pageSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p className="news-section__status">Ładowanie…</p>
          ) : null}
          <CmsErrorMessage error={error} fetchResource="cennika" />
          {!loading && !error && data === null ? (
            <p>Brak cennika w CMS.</p>
          ) : null}
          {!loading && !error && data ? (
            <div className="price-grid">
              <div className="price-card">
                <p className="price-card__label">{cardLabel}</p>
                <h2 className="price-card__title">{data.individualTitle}</h2>
                <div className="price-card__amount">
                  {data.individualAmount} PLN
                </div>
              </div>
              <div className="price-card">
                <p className="price-card__label">{cardLabel}</p>
                <h2 className="price-card__title">{data.familyTitle}</h2>
                <div className="price-card__amount">
                  {data.familyAmount} PLN
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">{ctaTitle}</h2>
            <div className="cta-banner__actions">
              <Link to="/kontakt" className="btn btn--primary">
                Umów konsultację
              </Link>
              <a href={phoneHref} className="btn btn--outline">
                {Config.PhoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
