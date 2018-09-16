<template>
  <div class="planets">
    <main v-show="!loading">
      <card class="planets__card"></card>
      <h3 class="planets__title">next</h3>
      <button-game class="planets__button"></button-game>
    </main>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue';
  import ButtonGame from '@/components/ButtonGame.vue';
  import Loading from '@/components/Loading.vue';
  import planets from '@/services/planets.js';
  import { mapActions } from 'vuex';

  export default {
    name: "planet",
    data () {
      return {
        loading: false
      }
    },
    components: {
      Card,
      ButtonGame,
      Loading
    },
    mounted () {
      this.getPlanet();
    },
    methods: {
      ...mapActions ({
        savePlanet: 'SET_PLANET'
      }),
      getPlanet () {
        this.loading = true;
        let planetId = Math.floor(Math.random() * 61 + 1);
        return planets.getPlanet(planetId)
          .then(planet => {
          this.savePlanet(planet);
        })
          .catch()
          .finally(() => this.loading = false);
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../styles/_keyframes';
.planets__title {
  margin-top: 2vh;
  font-family: 'Game-Over';
  text-transform: uppercase;
  animation: blinker 1s linear infinite;
}
.planets__button {
  margin-top: 5vh;
}

</style>