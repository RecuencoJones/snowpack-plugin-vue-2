import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/dist/vuetify.js';
import Home from './pages/index.vue';
import '/web_modules/vuetify/dist/vuetify.css';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/about',
      component: () => import('./pages/about.vue')
    }
  ]
});

new Vue({
  el: '#app',
  template: '<router-view/>',
  router,
  vuetify: new Vuetify()
});
