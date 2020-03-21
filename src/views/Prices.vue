<template>
  <div>
    <b-table bordered hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { 'Sesja psychoterapii': 'Indywidualna', Cena: '100 PLN' },
          { 'Sesja psychoterapii': 'Rodzinna', Cena: '120 PLN' },
        ]
      }
    }
  }
</script>