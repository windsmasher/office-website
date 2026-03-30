import React, { useEffect, useState } from 'react';
import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react';
import { Config } from '../../config/config';
import {
  fetchAboutMePage,
  getSanityBrowserClient,
} from '../lib/sanity/client';
import type { AboutMePageData } from '../lib/sanity/types';
import { CmsErrorMessage } from '../components/CmsErrorMessage';
import { CertificatePhotoStack } from '../components/CertificatePhotoStack';
import photoImg from '../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg';

const aboutMePortableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

const AboutMe: React.FC = () => {
  const [data, setData] = useState<AboutMePageData | null | undefined>(
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
    fetchAboutMePage()
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

  return (
    <>
      <section className="page-header">
        <div className="container">
          <img
            src={photoImg}
            alt={Config.FullName}
            className="page-header__avatar"
          />
          <h1 className="page-header__title">{Config.FullName}</h1>
          <p className="page-header__subtitle">
            Pedagog, specjalista terapii uzależnień
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="card">
            {loading ? (
              <p className="news-section__status">Ładowanie…</p>
            ) : null}
            {error ? (
              <CmsErrorMessage error={error} fetchResource="treści" />
            ) : null}
            {!loading && !error && data === null ? (
              <p>Brak treści „O mnie” w CMS.</p>
            ) : null}
            {!loading && !error && data?.intro && data.intro.length > 0 ? (
              <PortableText
                value={data.intro}
                components={aboutMePortableComponents}
              />
            ) : null}
            {!loading &&
            !error &&
            data &&
            (!data.intro || data.intro.length === 0) ? (
              <p>Brak wstępu w dokumencie CMS.</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          {loading ? (
            <p className="news-section__status">Ładowanie…</p>
          ) : null}
          {!loading &&
          !error &&
          data &&
          data.partnersTitle &&
          data.supervisionTitle ? (
            <div className="card-grid card-grid--2">
              <div className="card">
                <h2 className="card__title">{data.partnersTitle}</h2>
                <p>{data.partnersBody}</p>
              </div>
              <div className="card">
                <h2 className="card__title">{data.supervisionTitle}</h2>
                <p>{data.supervisionBody}</p>
              </div>
            </div>
          ) : null}
          {!loading &&
          !error &&
          data &&
          (!data.partnersTitle || !data.supervisionTitle) ? (
            <p>Brak tytułów lub treści kart Partnerzy / Superwizje w CMS.</p>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section__title">Certyfikaty i zaświadczenia</h2>
          <CertificatePhotoStack />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
