import React from 'react';
import { Card } from 'react-bootstrap';
import { Config } from '../../config/config';
import { companyInfoItems } from '../config/companyInfo';

const CompanyInfo: React.FC = () => {
  return (
    <div className="company-info">
      <Card className="company-info-intro mb-4">
        <Card.Body>
          <p className="mb-0">
            Firma {Config.FullName} ma siedzibę w Gliwicach i rozpoczęła swoją działalność 1 listopada 2008
            roku.
          </p>
        </Card.Body>
      </Card>
      <div className="company-info-grid">
        {companyInfoItems.map((item) => (
          <Card key={item.label} className="company-info-card">
            <Card.Body>
              <h5>{item.label}</h5>
              <p className="mb-0">{item.value}</p>
              {item.subValue && <p className="mb-0 mt-1">{item.subValue}</p>}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
