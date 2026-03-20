import React from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';
import { TherapyFormIcon } from '../components/TherapyFormIcon';
import logo from '../assets/logo-psychoterapia-uzaleznienia-michal-paczka.jpg';

const Home: React.FC = () => {
  const phone = Config.PhoneNumber;
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <>
      <section className="hero">
        <div className="container">
          <img
            src={logo}
            alt="Gabinet Psychoterapii"
            className="hero__logo"
          />
          <h1 className="hero__title">
            Gabinet Psychoterapii<br />i Leczenia Uzależnień
          </h1>
          <p className="hero__subtitle">
            {Config.FullName} — Pedagog, specjalista terapii uzależnień
          </p>
          <p className="hero__text">
            Zapraszam do współpracy rodziny, małżeństwa, pary, osoby uzależnione
            od alkoholu, narkotyków, leków, hazardu, internetu i innych.
          </p>
          <div className="hero__actions">
            <Link to="/kontakt" className="btn btn--primary">
              Umów konsultację
            </Link>
            <a href={phoneHref} className="btn btn--outline">
              {phone}
            </a>
          </div>
          <div className="hero__details">
            <p>
              Oferuję pomoc w zakresie problemów wychowawczych, zaburzeń zachowania
              u dzieci i młodzieży, kryzysów, problemów emocjonalnych.
            </p>
            <p>
              Oferuję pomoc i konsultacje psychologiczne, psychoterapię
              indywidualną, rodzinną, małżeńską oraz grupową.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Formy terapii</h2>
          <div className="therapy-grid">
            <div className="therapy-card">
              <span className="therapy-card__icon">
                <TherapyFormIcon variant="individual" />
              </span>
              <h3 className="therapy-card__title">Terapia Indywidualna</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon">
                <TherapyFormIcon variant="group" />
              </span>
              <h3 className="therapy-card__title">Terapia Grupowa</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon">
                <TherapyFormIcon variant="family" />
              </span>
              <h3 className="therapy-card__title">Terapia Rodzinna</h3>
            </div>
            <div className="therapy-card">
              <span className="therapy-card__icon">
                <TherapyFormIcon variant="couple" />
              </span>
              <h3 className="therapy-card__title">Terapia Małżeńska</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Aktualności</h2>
          <div className="card-grid card-grid--2">
            <div className="card">
              <h3 className="card__title">Grupa Treningu Zastępowania Agresji</h3>
              <p>
                Planuję start grupy Treningu Zastępowania Agresji i Umiejętności
                Społecznych dla dorosłych.
              </p>
              <p>Na zajęciach nauczysz się:</p>
              <ul className="styled-list">
                <li>kontrolować złość</li>
                <li>rozwiązywać konflikty</li>
                <li>otwarcie mówić o swoich potrzebach</li>
                <li>podejmować decyzje w zgodzie z sobą</li>
                <li>radzić sobie z presją grupy</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card__title">Terapia Grupowa w Leczeniu Uzależnień</h3>
              <p>
                W najbliższym czasie (po zebraniu grupy osób od 5-10) oprócz terapii
                indywidualnej rozpoczyna się psychoterapia grupowa.
              </p>
              <p>Proszę o zgłaszanie się zainteresowanych osób do gabinetu.</p>
              <p>
                <strong>TEST - WYWIAD Z SAMYM SOBĄ</strong>
              </p>
              <p>Sprawdź czy jesteś uzależniony?</p>
              <p>Sprawdź czy masz problem?</p>
              <a
                href="https://docs.google.com/spreadsheet/viewform?formkey=dDNCNW41Rkh6a1dyRjF0aFJfZXBJQXc6MQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEST BALTIMORSKI - wywiad z samym sobą !
              </a>
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
            <p className="cta-banner__text">
              Terminy spotkań ustalane są indywidualnie — telefonicznie.
            </p>
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

export default Home;
