<template>
  <div id="footer">
    <b>tel. {{ Config.PhoneNumber }}</b>
  </div>
</template>

<script>
import { Config } from '../../config/config';

export default {
  data: function () {
    return {
      Config: Config,
    };
  },
};
</script>

<style scoped>
#footer {
  margin: 50px 0 50px 0;
  padding: 5px;
  background-color: #098666;
  color: #fff;
}
</style>
