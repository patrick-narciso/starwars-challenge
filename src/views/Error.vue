<template>
  <div class="container">
    <img src="https://s3.amazonaws.com/star-wars-challenge/Yoda.png"
         class="container__image"
         alt="Yoda Star Wars">
    <p class="container__title">An Error Has Happened</p>
    <p class="container__title--retry">retry</p>
    <button-game :onClick="retry"></button-game>
  </div>
</template>

<script>
  import ButtonGame from '@/components/ButtonGame.vue';
  export default {
    name: "error",
    components: {
      ButtonGame
    },
    methods: {
      retry () {
        this.$router.push('planet');
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../styles/placeholders/_placeholders';
@import '../styles/_keyframes';

.container {
  @extend %flexbox;
  .container__title {
    font-family: 'Star-Jedi';
    font-size: 30px;
    margin: 0;
    text-align: center;
  }
  .container__title--retry {
    font-family: 'Game-Over';
    font-size: 20px;
    margin-bottom: 40px;
    animation: blinker 1s linear infinite;
  }
}

</style>