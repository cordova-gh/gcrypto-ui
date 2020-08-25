<template>
  <div id="app">
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <div class="container">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/parametro-pair-cvs">Parametri Pairs</router-link>|
        <router-link to="/parametro-candle-cvs">Parametri candles</router-link>|
        <router-link to="/alert-prices">Alert Prices</router-link>
      </div>
      <!-- Navbar content -->
    </nav>

    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
