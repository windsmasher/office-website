import React from 'react';
import { Config } from '../../config/config';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <span className="site-footer__brand-label">Gabinet Psychoterapii</span>
          <span className="site-footer__brand-name">{Config.FullName}</span>
        </div>
        <div className="site-footer__contact">
          <a href={`tel:${Config.PhoneNumber.replace(/\s/g, '')}`}>
            tel. {Config.PhoneNumber}
          </a>
          <a href={`mailto:${Config.Email}`}>{Config.Email}</a>
        </div>
        <div className="site-footer__copy">
          {Config.FullName} — Gabinet Psychoterapii i Leczenia Uzależnień
        </div>
      </div>
    </footer>
  );
};

export default Footer;
