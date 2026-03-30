import React, { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

const certGalleryUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}certificate-gallery/${filename}`;

const CERTIFICATE_IMAGES: { src: string; alt: string }[] = [
  {
    src: certGalleryUrl('certificate-gallery-main.png'),
    alt: 'Zaświadczenie o ukończeniu szkolenia psychoterapeutycznego — Michał Paczka',
  },
  { src: certGalleryUrl('certificate-gallery-02.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-03.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-04.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-05.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-06.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-07.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
  { src: certGalleryUrl('certificate-gallery-08.png'), alt: 'Dokument szkoleniowy — Michał Paczka' },
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
