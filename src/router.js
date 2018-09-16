import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Planet from './views/Planet.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/planet',
      name: 'planet',
      component: Planet
    }
  ]
})
