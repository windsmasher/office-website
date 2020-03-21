<template>
  <div>
    <b-card-group deck>
      <b-card>
        <p>Terminy spotkań ustalane są indywidualnie - telefonicznie.</p>
        <p>
          <b-card-img :src="require('../assets/michal-paczka-terapia-uzaleznienia-gliwice.jpg')"></b-card-img>
        </p>
        <p>
          <b>tel: {{ Config.PhoneNumber }}</b>
        </p>
        <p>W przypadku braku kontaktu oddzwaniam w tym samym dniu!</p>
        <p>
          <b>email: {{ Config.Email }}</b>
        </p>
      </b-card>
      <b-card>
        <p>{{ Config.CompanyAddress }}</p>
        <a
          href="https://www.google.pl/maps/place/Gabinet+Psychoterapii+i+Leczenia+Uzale%C5%BCnie%C5%84.+Micha%C5%82+Paczka./@50.295132,18.668675,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x593680dfe4d3e6e?hl=pl"
        >
          <b-card-img
            :src="require('../assets/gabinet-psychoterapia-uzaleznienia-michal-paczka.png')"
          ></b-card-img>
        </a>
        <br /><br />
        <p>Zapraszam wszystkich zainteresowanych.</p>
        <p>
          <b>Kliknij w zdjęcie aby sprawdzić drogę.</b>
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

<style scoped>

</style>