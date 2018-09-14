<template>
  <div class="home">
    <banner></banner>
    <div class="row">
      <div class="col-xs-12 col-xs-offset-6 col-md-offset-6">
        <div class="box">
          <button-game class="home__button"></button-game>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import ButtonGame from '@/components/ButtonGame.vue';

export default {
  name: 'home',
  components: {
      Banner,
      ButtonGame
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins/_media-queries';

.home__button {
  @include xs {
    top: 80vh;
  }
  @include sm {
    top: 82vh;
  }
  @include md {
    top: 90vh;
  }
  top: 70vh;
}
</style>
