<template>
  <div class="banner">
    <img class="banner__logo" src="https://s3.amazonaws.com/star-wars-challenge/banner.png" alt="Header Bit Challenge - Star Wars">
    <p class="banner__title">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['msg']
}
</script>

<style scoped lang="scss">
@import '../styles/mixins/_media-queries';
@import '../styles/mixins/_font-face';
@import '../styles/_keyframes';
@include font-face(Game-Over, 'game_over', 'game_over');

.banner {
  margin-top: 20vh;
  .banner__logo {
    @include xl {
      width: 90vh;
    }
    width: 105vw;
  }
  .banner__title {
    flex: 1;
    font-family: 'Game-Over';
    font-size: 2rem;
    animation: blinker 1s linear infinite;
    margin-top: 4vh;
  }
}

</style>

