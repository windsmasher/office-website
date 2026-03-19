import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import logo from '../assets/logo-psychoterapia-uzaleznienia-michal-paczka.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Img src={logo} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <p>
              Zapraszam do współpracy rodziny, małżeństwa, pary, osoby uzależnione
              od alkoholu, narkotyków, leków, hazardu, internetu i innych.
            </p>
            <p>
              Oferuję pomoc w zakresie problemów wychowawczych, zaburzeń zachowania
              u dzieci i młodzieży, kryzysów, problemów emocjonalnych.
            </p>
            <p>
              Oferuję pomoc i konsultacje psychologiczne, psychoterapię
              indywidualną, rodzinną, małżeńską oraz grupową.
            </p>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="cards-top-margin">
        <Card>
          <Card.Body>
            <h4>GRUPA TRENINGU ZASTĘPOWANIA AGRESJI</h4>
            <p>
              Planuję start grupy Treningu Zastępowania Agresji i Umiejętności
              Społecznych dla dorosłych.
            </p>
            <p>Na zajęciach nauczysz się:</p>
            <ul style={{ textAlign: 'left' }}>
              <li>kontrolować złość</li>
              <li>rozwiązywać konflikty</li>
              <li>otwarcie mówić o swoich potrzebach</li>
              <li>podejmować decyzje w zgodzie z sobą</li>
              <li>radzić sobie z presją grupy</li>
            </ul>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h4>TERAPIA GRUPOWA W LECZENIU UZALEŻNIEŃ</h4>
            <p>
              W najbliższym czasie (po zebraniu grupy osób od 5-10) oprócz terapii
              indywidualnej rozpoczyna się psychoterapia grupowa.
            </p>
            <p>Proszę o zgłaszanie się zainteresowanych osób do gabinetu.</p>
            <p>
              <b>TEST - WYWIAD Z SAMYM SOBĄ</b>
            </p>
            <p>Sprawdź czy jesteś uzależniony?</p>
            <p>Sprawdź czy masz problem?</p>
            <a
              href="https://docs.google.com/spreadsheet/viewform?formkey=dDNCNW41Rkh6a1dyRjF0aFJfZXBJQXc6MQ"
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              TEST BALTIMORSKI - wywiad z samym sobą !
            </a>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Home;
