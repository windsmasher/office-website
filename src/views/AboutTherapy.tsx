import React from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';

const AboutTherapy: React.FC = () => {
  const phone = Config.PhoneNumber;
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">O terapii</h1>
          <p className="page-header__subtitle">
            Psychoterapia — dlaczego warto korzystać z psychoterapii?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            <div className="card">
              <p>
                Psychoterapia kierowana jest do osób dorosłych, młodzieży, dzieci i
                rodziców borykających się z problemami wychowawczymi, oraz do rodzin,
                małżeństw i par przeżywających problemy takie jak:
              </p>
              <ul className="styled-list">
                <li>uzależnienia typu; alkohol, narkotyki, hazard, leki, gry komputerowe,</li>
                <li>alkoholizm i inne uzależnienia w rodzinie, współmałżonka czy dziecka,</li>
                <li>zaburzenia emocjonalne: lęki i fobie, depresje, nerwice, natręctwa,</li>
                <li>brak samokontroli,</li>
                <li>zaburzenia odżywiania,</li>
                <li>trudności wychowawcze, problemy w kontaktach z dziećmi,</li>
                <li>trudności adaptacyjne, w nawiązaniu relacji,</li>
                <li>konflikty pokoleniowe w rodzinie,</li>
                <li>ciąża, poród i lęki z tym z wiązane,</li>
                <li>agresja, przemoc w rodzinie,</li>
                <li>choroba dziecka,</li>
                <li>żałoba po stracie dziecka, czy bliskiej osoby z rodziny,</li>
                <li>separacja, rozwód, rozstanie z bliską osobą,</li>
                <li>stres i frustracja,</li>
                <li>zaburzenia osobowości.</li>
              </ul>
            </div>
            <div className="card">
              <p>
                Podjęcie pierwszego kroku w kierunku uzyskania pomocy, jest często
                najtrudniejsze, jednak samotne radzenie sobie z problemami, nawet
                jeżeli wydają się błahe, może być trudne a niekiedy wręcz niemożliwe
                do udźwignięcia.
              </p>
              <p>
                W trakcie spotkań, pacjent wraz z terapeutą, szuka przyczyn objawów,
                szuka możliwych rozwiązań, a tym samym daje sobie szansę na zmianę
                dotychczasowego funkcjonowania i myślenia o sobie, stwarza możliwość
                świadomego kierowania swoim życiem w przyszłości.
              </p>
              <p>
                Decydując się na terapię w gabinecie, pacjent ma zapewnioną konsultację,
                fachową pomoc w bezpiecznym, poufnym i życzliwym środowisku. Moja praca
                w procesie terapii polega przede wszystkim, na zapewnieniu wsparcia w
                rozwiązaniu problemu pacjenta, bez dokonywania oceny zaistniałej
                sytuacji. Szukam innych perspektyw w spojrzeniu na jego problem, badam
                różnorodne kierunki prowadzące do rozwiązania.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Formy terapii</h2>
          <div className="therapy-grid">
            <div className="therapy-card">
              <span className="therapy-card__icon" aria-hidden="true">🧠</span>
              <h3 className="therapy-card__title">Terapia Indywidualna</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon" aria-hidden="true">👥</span>
              <h3 className="therapy-card__title">Terapia Grupowa</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon" aria-hidden="true">🏡</span>
              <h3 className="therapy-card__title">Terapia Rodzinna</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon" aria-hidden="true">💕</span>
              <h3 className="therapy-card__title">Terapia Małżeńska</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Jak wygląda terapia?</h2>
          <div className="steps">
            <div className="step">
              <div className="step__number">1</div>
              <h3 className="step__title">Konsultacja wstępna</h3>
              <p className="step__text">
                Pierwsze spotkanie ma charakter konsultacyjny w trakcie którego
                pacjent i psychoterapeuta, decydują czy podjąć dalszą psychoterapię.
              </p>
            </div>
            <div className="step">
              <div className="step__number">2</div>
              <h3 className="step__title">Określenie potrzeb</h3>
              <p className="step__text">
                W trakcie spotkań, pacjent wraz z terapeutą, szuka przyczyn objawów,
                szuka możliwych rozwiązań.
              </p>
            </div>
            <div className="step">
              <div className="step__number">3</div>
              <h3 className="step__title">Regularne spotkania</h3>
              <p className="step__text">
                Daje sobie szansę na zmianę dotychczasowego funkcjonowania
                i myślenia o sobie, stwarza możliwość świadomego kierowania
                swoim życiem w przyszłości.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">
              Nie uciekaj od problemów, rozwiąż je z pomocą specjalisty!
            </h2>
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
