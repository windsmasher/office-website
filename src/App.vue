<template>
  <div id="app">
    <Navbar />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: 10%;
  margin-left: 10%;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.content {
  margin-top: 70px;
}
.row {
  display: flex;
  justify-content: space-around;
}
.description {
  text-align: justify;
}
.cards-top-margin {
  margin-top: 30px;
}
</style>
