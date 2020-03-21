<template>
  <div>
    <b-row>
      <b-list-group-item class="item">
        <h5>
          Firma {{ Config.FullName }} ma siedzibę w Gliwicach i rozpoczęła swoją działalność 1 listopada 2008
          roku.
        </h5>
      </b-list-group-item>
    </b-row>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item class="item">
            <h5>NAZWA FIRMY</h5>
            <p>{{ Config.FullName }}</p>
            <p>Gabinet Psychoterapii i Leczenia Uzależnień</p>
          </b-list-group-item>
          <b-list-group-item class="item">
            <h5>ADRES GABINETU</h5>
            <p>{{ Config.CompanyAddress }}</p>
          </b-list-group-item>
          <b-list-group-item class="item">
            <h5>NR KONTA - dane do przelewu</h5>
            <p>{{ Config.BankAccount }}</p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item class="item">
            <h5>NIP</h5>
            <p>{{ Config.NIP }}</p>
          </b-list-group-item>
          <b-list-group-item class="item">
            <h5>REGON</h5>
            <p>{{ Config.REGON }}</p>
          </b-list-group-item>
          <b-list-group-item class="item">
            <h5>KRS</h5>
            <p>{{ Config.KRS }}</p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
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
.item {
  margin: 20px;
}
</style>