<template>
  <div>
  <card></card>
    <h3>next</h3>
  <button-game class="button-next"></button-game>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue';
  import ButtonGame from '@/components/ButtonGame.vue';
  export default {
    name: "planets",
    components: {
      Card,
      ButtonGame
    }
  }
</script>

<style scoped lang="scss">

</style>