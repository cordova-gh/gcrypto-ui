// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import 'bootstrap';
// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/first
import '@fortawesome/fontawesome-free/css/all.css';
// da vedere import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
