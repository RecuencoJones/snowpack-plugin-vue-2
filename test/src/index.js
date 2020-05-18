import Vue from 'vue';
import Vuetify from 'vuetify/dist/vuetify.js';
import Home from './pages/index.vue';
import '/web_modules/vuetify/dist/vuetify.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  template: '<Home></Home>',
  vuetify: new Vuetify(),
  components: { Home }
});
