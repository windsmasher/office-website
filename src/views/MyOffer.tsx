import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';
import {
  fetchMyOfferPage,
  getSanityBrowserClient,
} from '../lib/sanity/client';
import type { MyOfferPageData } from '../lib/sanity/types';
import { CmsErrorMessage } from '../components/CmsErrorMessage';

const MyOffer: React.FC = () => {
  const phoneHref = `tel:${Config.PhoneNumber.replace(/\s/g, '')}`;
  const [data, setData] = useState<MyOfferPageData | null | undefined>(
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
    fetchMyOfferPage()
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

  const pageTitle =
    data?.pageTitle?.trim() || 'Moja oferta';

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{pageTitle}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {data === undefined ? (
            <p className="news-section__status">Ładowanie…</p>
          ) : null}
          {error ? (
            <CmsErrorMessage error={error} fetchResource="treści oferty" />
          ) : null}
          {data === null && !error ? (
            <p>Brak strony oferty w CMS (dokument „Moja oferta”).</p>
          ) : null}
          {data && data.cards.length === 0 ? (
            <p>Brak treści oferty w CMS.</p>
          ) : null}
          {data && data.cards && data.cards.length > 0 ? (
            <div className="card-grid card-grid--2">
              {data.cards.map((card) => (
                <div className="card" key={card._key}>
                  <h2 className="card__title">{card.title}</h2>
                  {card.listItems && card.listItems.length > 0 ? (
                    <ul className="styled-list">
                      {card.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {card.body ? <p>{card.body}</p> : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Zapraszam do współpracy</h2>
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

export default MyOffer;
