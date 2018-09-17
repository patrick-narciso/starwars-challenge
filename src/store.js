import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planet: {
      name: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      films: ''
    }
  },
  mutations: {
    SET_PLANET(state, payload) {
      state.planet.name = payload.name;
      state.planet.diameter = payload.diameter;
      state.planet.climate = payload.climate;
      state.planet.gravity = payload.gravity;
      state.planet.terrain = payload.terrain;
      state.planet.surface_water = payload.surface_water;
      state.planet.population = payload.population;
      state.planet.films = payload.films;
    }
  },
  actions: {
    SET_PLANET(context, payload) {
      context.commit('SET_PLANET', payload);
    }
  }
})
