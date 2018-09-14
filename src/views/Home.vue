<template>
  <div class="home">
    <banner></banner>
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
