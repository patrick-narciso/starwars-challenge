<template>
  <div>
  <div class="row banner center-md center-xs">
    <div class="col-xs-12 banner">
      <div class="box">
        <img class="banner__logo" src="https://s3.amazonaws.com/star-wars-challenge/Yoda.png" alt="Header Bit Challenge - Star Wars">
      </div>
    </div>
  </div>

  <div class="row bottom-xs bottom-md center-md center-xs banner">
    <div class="col-xs-12">
      <div class="box">
        <span class="banner__title">start</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped lang="scss">
@import '../styles/mixins/_media-queries';
@import '../styles/mixins/_font-face';
@import '../styles/_keyframes';
@include fontface('Game-Over', game_over);

.banner {
  .banner__title {
    font-family: 'Game-Over', sans-serif;
    font-size: 6rem;
    margin-left: -12vh;
    animation: blinker 1s linear infinite;
  }
  .banner__logo {
    @include md {
      width: 60vw;
      margin-top: 12vh;
    }
    margin-top: 20vh;
    margin-bottom: -16vh;
    width: 100vw;
  }
}

</style>

