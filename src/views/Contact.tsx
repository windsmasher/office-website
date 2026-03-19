import React from 'react';
import { Config } from '../../config/config';
import photoImg from '../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg';
import mapImg from '../assets/gabinet-psychoterapia-uzaleznienia-michal-paczka.png';

const Contact: React.FC = () => {
  const phone = Config.PhoneNumber;
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Kontakt</h1>
          <p className="page-header__subtitle">
            Terminy spotkań ustalane są indywidualnie - telefonicznie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            <div className="card text-center">
              <img
                src={photoImg}
                alt={Config.FullName}
                className="contact-photo"
              />
              <h2 className="card__title">
                tel: {phone}
              </h2>
              <p>W przypadku braku kontaktu oddzwaniam w tym samym dniu!</p>
              <p>
                <strong>email: {Config.Email}</strong>
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <a href={phoneHref} className="btn btn--primary">
                  Zadzwoń
                </a>
              </div>
            </div>
            <div className="card">
              <h2 className="card__title">{Config.CompanyAddress}</h2>
              <a
                href="https://www.google.pl/maps/place/Gabinet+Psychoterapii+i+Leczenia+Uzale%C5%BCnie%C5%84.+Micha%C5%82+Paczka./@50.295132,18.668675,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x593680dfe4d3e6e?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={mapImg}
                  alt="Mapa - Gabinet Psychoterapii"
                  className="contact-map"
                />
              </a>
              <p>Zapraszam wszystkich zainteresowanych.</p>
              <p>
                <strong>Kliknij w zdjęcie aby sprawdzić drogę.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">
              Zapraszam wszystkich zainteresowanych
            </h2>
            <div className="cta-banner__actions">
              <a href={phoneHref} className="btn btn--primary">
                Zadzwoń: {phone}
              </a>
              <a href={`mailto:${Config.Email}`} className="btn btn--outline">
                Napisz email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
