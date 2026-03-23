import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';
import {
  fetchAboutTherapyPage,
  getSanityBrowserClient,
} from '../lib/sanity/client';
import type { AboutTherapyPageData } from '../lib/sanity/types';
import {
  TherapyFormIcon,
  type TherapyFormIconVariant,
} from '../components/TherapyFormIcon';
import { NewsBody } from '../components/NewsBody';

const VALID_ICONS: TherapyFormIconVariant[] = [
  'individual',
  'group',
  'family',
  'couple',
];

function toTherapyIcon(key: string): TherapyFormIconVariant {
  return VALID_ICONS.includes(key as TherapyFormIconVariant)
    ? (key as TherapyFormIconVariant)
    : 'individual';
}

const AboutTherapy: React.FC = () => {
  const phone = Config.PhoneNumber;
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  const [data, setData] = useState<AboutTherapyPageData | null | undefined>(
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
    fetchAboutTherapyPage()
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

  const cmsError =
    error === 'missing_env' ? (
      <p>
        Brak konfiguracji CMS: ustaw <code>VITE_SANITY_PROJECT_ID</code> i{' '}
        <code>VITE_SANITY_DATASET</code>.
      </p>
    ) : error === 'fetch' ? (
      <p>Nie udało się załadować treści. Spróbuj odświeżyć stronę.</p>
    ) : null;

  const pageTitle = data?.pageTitle?.trim() || 'O terapii';
  const pageSubtitle =
    data?.pageSubtitle?.trim() ||
    'Psychoterapia — dlaczego warto korzystać z psychoterapii?';
  const therapyFormsTitle = data?.therapyFormsTitle?.trim() || 'Formy terapii';
  const stepsTitle =
    data?.stepsSectionTitle?.trim() || 'Jak wygląda terapia?';
  const ctaTitle =
    data?.ctaBannerTitle?.trim() ||
    'Nie uciekaj od problemów, rozwiąż je z pomocą specjalisty!';

  const sortedSteps =
    data?.steps?.length && data.steps.length > 0
      ? [...data.steps].sort((a, b) => a.stepNumber - b.stepNumber)
      : [];

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
          {cmsError}
          {!loading && !error && data === null ? (
            <p>Brak strony „O terapii” w CMS.</p>
          ) : null}
          {!loading && !error && data ? (
            <div className="card-grid card-grid--2">
              <div className="card">
                <p>{data.leftLead}</p>
                {data.leftListItems && data.leftListItems.length > 0 ? (
                  <ul className="styled-list">
                    {data.leftListItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="card">
                {data.rightColumnBody ? (
                  <NewsBody text={data.rightColumnBody} />
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {!loading && !error && data && data.therapyForms.length > 0 ? (
        <section className="section section--alt">
          <div className="container">
            <h2 className="section__title">{therapyFormsTitle}</h2>
            <div className="therapy-grid">
              {data.therapyForms.map((form) => (
                <div className="therapy-card" key={form._key}>
                  <span className="therapy-card__icon">
                    <TherapyFormIcon variant={toTherapyIcon(form.iconKey)} />
                  </span>
                  <h3 className="therapy-card__title">{form.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!loading && !error && data && sortedSteps.length > 0 ? (
        <section className="section">
          <div className="container">
            <h2 className="section__title">{stepsTitle}</h2>
            <div className="steps">
              {sortedSteps.map((step) => (
                <div className="step" key={step._key}>
                  <div className="step__number">{step.stepNumber}</div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">{ctaTitle}</h2>
            <div className="cta-banner__actions">
              <Link to="/kontakt" className="btn btn--primary">
                Skontaktuj się
              </Link>
              <a href={phoneHref} className="btn btn--outline">
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTherapy;
