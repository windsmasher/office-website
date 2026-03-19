import React from 'react';
import { Config } from '../../config/config';
import { companyInfoItems } from '../config/companyInfo';

const CompanyInfo: React.FC = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Dane firmy</h1>
          <p className="page-header__subtitle">
            Firma {Config.FullName} ma siedzibę w Gliwicach i rozpoczęła swoją
            działalność 1 listopada 2008 roku.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-grid">
            {companyInfoItems.map((item) => (
              <div key={item.label} className="info-card">
                <span className="info-card__label">{item.label}</span>
                <span className="info-card__value">{item.value}</span>
                {item.subValue && (
                  <span className="info-card__sub">{item.subValue}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyInfo;
