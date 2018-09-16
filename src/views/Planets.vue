<template>
  <div class="planets">
    <card class="planets__card"></card>
    <h3 class="planets__title">next</h3>
    <button-game class="planets__button"></button-game>
    <loading></loading>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue';
  import ButtonGame from '@/components/ButtonGame.vue';
  import Loading from '@/components/Loading.vue';

  export default {
    name: "planets",
    data () {
      return {
        loading: false
      }
    },
    components: {
      Card,
      ButtonGame,
      Loading
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