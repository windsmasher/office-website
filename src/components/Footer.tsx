import React from 'react';
import { Config } from '../../config/config';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <a href={`tel:${Config.PhoneNumber.replace(/\s/g, '')}`}>
        tel. {Config.PhoneNumber}
      </a>
    </footer>
  );
};

export default Footer;
