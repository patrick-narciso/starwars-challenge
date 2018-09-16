import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Planets from './views/Planets';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets
    }
  ]
})
