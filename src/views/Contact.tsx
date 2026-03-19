import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { Config } from '../../config/config';
import photoImg from '../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg';
import mapImg from '../assets/gabinet-psychoterapia-uzaleznienia-michal-paczka.png';

const Contact: React.FC = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body>
            <p>Terminy spotkań ustalane są indywidualnie - telefonicznie.</p>
            <p>
              <Card.Img src={photoImg} />
            </p>
            <p>
              <b>tel: {Config.PhoneNumber}</b>
            </p>
            <p>W przypadku braku kontaktu oddzwaniam w tym samym dniu!</p>
            <p>
              <b>email: {Config.Email}</b>
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <p>{Config.CompanyAddress}</p>
            <a
              href="https://www.google.pl/maps/place/Gabinet+Psychoterapii+i+Leczenia+Uzale%C5%BCnie%C5%84.+Micha%C5%82+Paczka./@50.295132,18.668675,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x593680dfe4d3e6e?hl=pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img src={mapImg} />
            </a>
            <br /><br />
            <p>Zapraszam wszystkich zainteresowanych.</p>
            <p>
              <b>Kliknij w zdjęcie aby sprawdzić drogę.</b>
            </p>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Contact;
