import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const MyOffer: React.FC = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <p>
            <b>Zakres usług</b>
          </p>
          <ul style={{ textAlign: 'left' }}>
            <li>terapia rodzinna - w gabinecie lub w miejscu zamieszkania,</li>
            <li>psychoterapia indywidualna dorosłych,</li>
            <li>terapia małżeństw i par,</li>
            <li>psychoterapia indywidualna dzieci, młodzieży i młodych dorosłych,</li>
            <li>poradnictwo rodzinne,</li>
            <li>grupy wsparcia dla rodziców dzieci uzależnionych,</li>
            <li>terapia indywidualna i grupowa dla uzależnionych od alkoholu,</li>
            <li>
              terapia uzależnionych od narkotyków, leków, hazardu, internetu i
              innych.
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card className="description">
        <Card.Body>
          <p>
            <b>Oferuję</b>
          </p>
          Pomoc w całym zakresie dysfunkcji i problemów rodzinnych takich jak:
          kryzysy, trudności wychowawcze, agresja i autoagresja, przemoc,
          wykorzystanie seksualne dziecka, żałoba, rozwody, choroby psychiczne,
          alkoholizm w rodzinie oraz inne poważne urazy psychiczne.
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default MyOffer;
