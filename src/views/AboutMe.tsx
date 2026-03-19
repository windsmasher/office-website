import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { Config } from '../../config/config';
import photoImg from '../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg';
import certImg from '../assets/certyfikat-psychoterapia-uzaleznienia-michal-paczka.jpg';

const AboutMe: React.FC = () => {
  return (
    <div className="about">
      <CardGroup>
        <Card>
          <Card.Body>
            <h4>{Config.FullName}</h4>
            <p>Pedagog, specjalista terapii uzależnień</p>
            <p>
              <Card.Img src={photoImg} />
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h4>CERTYFIKAT NR {Config.CertificatNumber}</h4>
            <Card.Img src={certImg} />
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="cards-top-margin">
        <Card className="description">
          <Card.Body>
            <p>
              Posiadam bogatą praktyką w różnych obszarach pomocowych. Mam wieloletnie
              doświadczenie w pracy z młodzieżą i rodzinami przeżywającymi kryzysy.
              Doświadczenie zdobywałem pracując w Ośrodku Szkolno-Wychowawczym,
              ośrodkach leczenia uzależnień (wieloletnia praca w stażowym ośrodku
              Betania w Częstochowie). Byłem współzałożycielem Górnośląskiego Oddziału{' '}
              <a href="http://monar.org/" target="_blank" rel="noopener noreferrer">MONAR</a> w Gliwicach. Stale współpracuję ze
              Stowarzyszeniem GTW. Obecnie pracuję w Wojewódzkim Ośrodku Terapii Uzależnień i Współuzależnień w Opolu.
            </p>
          </Card.Body>
        </Card>
        <Card className="description">
          <Card.Body>
            <h4>Partnerzy</h4>
            <p>Współpracuję z psychologiem - mgr {Config.AssociateFullName}.</p>
            <h4>Superwizje</h4>
            <p>
              Swoją pracę poddaję regularnej superwizji u mgr Romy Ulasińkiej -
              certyfikowanej psychoterapeutki i superwizorki psychoterapii Polskiego
              Towarzystwa Psychiatrycznego.
            </p>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default AboutMe;
