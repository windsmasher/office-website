import React from 'react';
import { Config } from '../../config/config';
import photoImg from '../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg';
import certImg from '../assets/certyfikat-psychoterapia-uzaleznienia-michal-paczka.jpg';

const AboutMe: React.FC = () => {
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
            <p>
              Posiadam bogatą praktyką w różnych obszarach pomocowych. Mam wieloletnie
              doświadczenie w pracy z młodzieżą i rodzinami przeżywającymi kryzysy.
              Doświadczenie zdobywałem pracując w Ośrodku Szkolno-Wychowawczym,
              ośrodkach leczenia uzależnień (wieloletnia praca w stażowym ośrodku
              Betania w Częstochowie). Byłem współzałożycielem Górnośląskiego Oddziału{' '}
              <a href="http://monar.org/" target="_blank" rel="noopener noreferrer">MONAR</a> w Gliwicach. Stale współpracuję ze
              Stowarzyszeniem GTW. Obecnie pracuję w Wojewódzkim Ośrodku Terapii Uzależnień i Współuzależnień w Opolu.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="card-grid card-grid--2">
            <div className="card">
              <h2 className="card__title">Partnerzy</h2>
              <p>Współpracuję z psychologiem - mgr {Config.AssociateFullName}.</p>
            </div>
            <div className="card">
              <h2 className="card__title">Superwizje</h2>
              <p>
                Swoją pracę poddaję regularnej superwizji u mgr Romy Ulasińkiej -
                certyfikowanej psychoterapeutki i superwizorki psychoterapii Polskiego
                Towarzystwa Psychiatrycznego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="section__title">Certyfikat nr {Config.CertificatNumber}</h2>
          <img src={certImg} alt="Certyfikat psychoterapii" className="cert-img" />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
