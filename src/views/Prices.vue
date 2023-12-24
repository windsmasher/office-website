<template>
  <div>
    <b-table bordered hover :items="items"></b-table>
  </div>
</template>

<script>
import { Config } from '../../config/config';

export default {
  data() {
    return {
      items: [
        {
          'Sesja psychoterapii': 'Indywidualna',
          Cena: `${Config.Price.Individual} PLN`,
        },
        {
          'Sesja psychoterapii': 'Rodzinna / Małżeńska / Par',
          Cena: `${Config.Price.Family} PLN`,
        },
      ],
    };
  },
};
</script>
