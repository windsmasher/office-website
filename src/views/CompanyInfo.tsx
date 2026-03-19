import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { Config } from '../../config/config';

const CompanyInfo: React.FC = () => {
  return (
    <div>
      <Row>
        <ListGroup.Item style={{ margin: '20px' }}>
          <h5>
            Firma {Config.FullName} ma siedzibę w Gliwicach i rozpoczęła swoją działalność 1 listopada 2008
            roku.
          </h5>
        </ListGroup.Item>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>NAZWA FIRMY</h5>
              <p>{Config.FullName}</p>
              <p>Gabinet Psychoterapii i Leczenia Uzależnień</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>ADRES GABINETU</h5>
              <p>{Config.CompanyAddress}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>NR KONTA - dane do przelewu</h5>
              <p>{Config.BankAccount}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>NIP</h5>
              <p>{Config.NIP}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>REGON</h5>
              <p>{Config.REGON}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ margin: '20px' }}>
              <h5>KRS</h5>
              <p>{Config.KRS}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyInfo;
