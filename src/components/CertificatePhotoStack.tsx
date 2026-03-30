import React, { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import certMain from '../assets/certificate-gallery-main.png';
import cert02 from '../assets/certificate-gallery-02.png';
import cert03 from '../assets/certificate-gallery-03.png';
import cert04 from '../assets/certificate-gallery-04.png';
import cert05 from '../assets/certificate-gallery-05.png';
import cert06 from '../assets/certificate-gallery-06.png';
import cert07 from '../assets/certificate-gallery-07.png';
import cert08 from '../assets/certificate-gallery-08.png';

const CERTIFICATE_IMAGES: { src: string; alt: string }[] = [
  {
    src: certMain,
    alt: 'Zaświadczenie o ukończeniu szkolenia psychoterapeutycznego — Michał Paczka',
  },
  { src: cert02, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert03, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert04, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert05, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert06, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert07, alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: cert08, alt: 'Dokument szkoleniowy — Michał Paczka' },
];

const PANEL_ID = 'certificate-gallery-panel';

export const CertificatePhotoStack: React.FC = () => {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  const openGallery = useCallback(() => setOpen(true), []);
  const closeGallery = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeGallery]);

  const extraCount = CERTIFICATE_IMAGES.length - 1;

  return (
    <>
      <button
        type="button"
        className="cert-stack"
        onClick={openGallery}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={`Otwórz galerię certyfikatów, ${CERTIFICATE_IMAGES.length} dokumentów`}
      >
        <span className="cert-stack__layer cert-stack__layer--back" aria-hidden />
        <span className="cert-stack__layer cert-stack__layer--mid" aria-hidden />
        {extraCount > 0 ? (
          <span className="cert-stack__count" aria-hidden>
            +{extraCount}
          </span>
        ) : null}
        <img
          src={CERTIFICATE_IMAGES[0].src}
          alt={CERTIFICATE_IMAGES[0].alt}
          className="cert-stack__preview"
        />
      </button>

      {open
        ? createPortal(
            <div
              className="cert-gallery-overlay"
              role="presentation"
              onClick={closeGallery}
            >
              <div
                id={PANEL_ID}
                className="cert-gallery-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="cert-gallery-panel__inner">
                  <header className="cert-gallery-panel__header">
                    <h2 id={titleId} className="cert-gallery-panel__title">
                      Certyfikaty i zaświadczenia
                    </h2>
                    <button
                      type="button"
                      className="cert-gallery-panel__close"
                      onClick={closeGallery}
                      aria-label="Zamknij galerię"
                    >
                      ×
                    </button>
                  </header>
                  <div className="cert-gallery-panel__grid">
                    {CERTIFICATE_IMAGES.map((img, index) => (
                      <figure key={index} className="cert-gallery-panel__item">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
