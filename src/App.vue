<template>
  <div id="app">
    <img src="./assets/logocv.png" width="250px" />
    <hr>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/parametro-pair-cvs">Parametro Pairs</router-link>|
    <router-link to="/parametro-candle-cvs">Parametro candles</router-link>|
    <router-link to="/alert-prices">Alert Prices</router-link>

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
