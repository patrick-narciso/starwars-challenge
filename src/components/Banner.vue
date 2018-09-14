<template>
  <div class="banner">
    <img class="banner__logo" src="https://s3.amazonaws.com/star-wars-challenge/Yoda.png" alt="Header Bit Challenge - Star Wars">
    <span class="banner__title">start</span>
    <vs-button vs-color="danger" vs-type="relief">Danger</vs-button>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped lang="scss">
@import '../styles/mixins/_media-queries';
@import '../styles/mixins/_font-face.scss';
@import '../styles/_keyframes';
@include font-face(Game-Over, 'game_over', 'game_over');

.banner {
  position: absolute;
  top: 50%;
  left: 50%;
  &.banner__logo {
    margin-bottom: 0;
  }
}

</style>

