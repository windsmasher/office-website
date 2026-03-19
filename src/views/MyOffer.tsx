import React from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';

const MyOffer: React.FC = () => {
  const phoneHref = `tel:${Config.PhoneNumber.replace(/\s/g, '')}`;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Moja oferta</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            <div className="card">
              <h2 className="card__title">Zakres usług</h2>
              <ul className="styled-list">
                <li>terapia rodzinna - w gabinecie lub w miejscu zamieszkania,</li>
                <li>psychoterapia indywidualna dorosłych,</li>
                <li>terapia małżeństw i par,</li>
                <li>psychoterapia indywidualna dzieci, młodzieży i młodych dorosłych,</li>
                <li>poradnictwo rodzinne,</li>
                <li>grupy wsparcia dla rodziców dzieci uzależnionych,</li>
                <li>terapia indywidualna i grupowa dla uzależnionych od alkoholu,</li>
                <li>
                  terapia uzależnionych od narkotyków, leków, hazardu, internetu i
                  innych.
                </li>
              </ul>
            </div>
            <div className="card">
              <h2 className="card__title">Oferuję</h2>
              <p>
                Pomoc w całym zakresie dysfunkcji i problemów rodzinnych takich jak:
                kryzysy, trudności wychowawcze, agresja i autoagresja, przemoc,
                wykorzystanie seksualne dziecka, żałoba, rozwody, choroby psychiczne,
                alkoholizm w rodzinie oraz inne poważne urazy psychiczne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">
              Zapraszam do współpracy
            </h2>
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
