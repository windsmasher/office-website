<template>
  <div>
    <h2 id="title">
      <p>GABINET PSYCHOTERAPII</p>
      <p>{{ Config.FullName.toUpperCase() }}</p>
    </h2>
    <b-nav card-header tabs fill>
      <b-nav-item to="/">Aktualności</b-nav-item>
      <b-nav-item to="/moja-oferta">Moja oferta</b-nav-item>
      <b-nav-item to="/o-mnie">O mnie</b-nav-item>
      <b-nav-item to="/o-terapii">O terapii</b-nav-item>
      <b-nav-item to="/cennik">Cennik</b-nav-item>
      <b-nav-item to="/dane-firmy">Dane firmy</b-nav-item>
      <b-nav-item to="/kontakt">Kontakt</b-nav-item>
    </b-nav>
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

<style lang="scss" scoped>
#title {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav {
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(0, 0, 0);
    &.router-link-exact-active {
      background-color: #e9b9b9;
    }
  }
}
.link {
  text-decoration: none;
}
</style>
