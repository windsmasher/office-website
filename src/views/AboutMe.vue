<template>
  <div class="about">
    <b-card-group deck>
      <b-card>
        <h4>Michał Paczka</h4>
        <p>Pedagog, specjalista terapii uzależnień</p>
        <p>
          <b-card-img :src="require('../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg')"></b-card-img>
        </p>
      </b-card>
      <b-card>
        <h4>CERTYFIKAT NR {{ Config.CertificatNumber }}</h4>
        <b-card-img :src="require('../assets/certyfikat-psychoterapia-uzaleznienia-michal-paczka.jpg')"></b-card-img>
      </b-card>
    </b-card-group>
    <b-card-group deck class="cards-top-margin">
      <b-card class="description">
        <p>
          Posiadam bogatą praktyką w różnych obszarach pomocowych. Mam wieloletnie
          doświadczenie w pracy z młodzieżą i rodzinami przeżywającymi kryzysy.
          Doświadczenie zdobywałem pracując w Ośrodku Szkolno-Wychowawczym,
          ośrodkach leczenia uzależnień (wieloletnia praca w stażowym ośrodku
          Betania w Częstochowie). Byłem współzałożycielem Górnośląskiego Oddziału
          <a
            href="http://monar.org/"
          >MONAR</a> w Gliwicach. Stale współpracuję ze
          Stowarzyszeniem GTW. Obecnie pracuję w
          <a
            href="http://wotuiw.opole.pl/index.php/o-nas"
          >Wojewódzkim Ośrodku Terapii Uzależnień i Współuzależnień</a>
          w Opolu.
        </p>
      </b-card>
      <b-card class="description">
        <h4>Partnerzy</h4>
        <p>Współpracuję z psychologiem - mgr Teresą Trautman.</p>
        <h4>Superwizje</h4>
        <p>
          Swoją pracę poddaję regularnej superwizji u mgr Romy Ulasińkiej -
          certyfikowanej psychoterapeutki i superwizorki psychoterapii Polskiego
          Towarzystwa Psychiatrycznego.
        </p>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { Config } from "../../config/config";

export default {
  data: function() {
    return {
      Config: Config,
    };
  }
};
</script>