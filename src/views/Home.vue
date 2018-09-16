<template>
  <div class="home">
    <banner class="home__banner" :msg="msg"></banner>
    <button-game :onClick="play" class="home__button"></button-game>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import ButtonGame from '@/components/ButtonGame.vue';

export default {
  name: 'home',
  data () {
    return {
      msg: 'play'
    }
  },
  components: {
      Banner,
      ButtonGame
  },
  methods: {
    play () {
      this.$router.push('planet');
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins/_media-queries';
@import '../styles/placeholders/_placeholders';

.home {
  @extend %flexbox;
  .home__banner {
    flex: 1;
  }
  .home__button {
    flex: 1;
    margin-top: 8vh;
  }
}
</style>
