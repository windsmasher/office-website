import React from 'react';
import { Link } from 'react-router-dom';
import { Config } from '../../config/config';

const Prices: React.FC = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Cennik</h1>
          <p className="page-header__subtitle">Sesja psychoterapii</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="price-grid">
            <div className="price-card">
              <p className="price-card__label">Sesja psychoterapii</p>
              <h2 className="price-card__title">Indywidualna</h2>
              <div className="price-card__amount">{Config.Price.Individual} PLN</div>
            </div>
            <div className="price-card">
              <p className="price-card__label">Sesja psychoterapii</p>
              <h2 className="price-card__title">Rodzinna / Małżeńska / Par</h2>
              <div className="price-card__amount">{Config.Price.Family} PLN</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">
              Terminy spotkań ustalane są indywidualnie
            </h2>
            <div className="cta-banner__actions">
              <Link to="/kontakt" className="btn btn--primary">
                Umów konsultację
              </Link>
              <a
                href={`tel:${Config.PhoneNumber.replace(/\s/g, '')}`}
                className="btn btn--outline"
              >
                {Config.PhoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
