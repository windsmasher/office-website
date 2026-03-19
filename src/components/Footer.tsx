import React from 'react';
import { Config } from '../../config/config';

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <b>tel. {Config.PhoneNumber}</b>
    </div>
  );
};

export default Footer;
