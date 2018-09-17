<template>
    <div class="container">
        <a @click="onClick" class="container__button" role="button"></a>
    </div>
</template>

<script>
  export default {
    name: "ButtonGame",
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../styles/_variables';
@import '../styles/placeholders/_placeholders';

.container {
  @extend %flexbox;
  .container__button {
    flex: 1;
    position: absolute;
    display: block;
    width: 90px;
    height: 90px;
    @extend %border-radius;
    @extend %box-shadow;
    @extend %box-sizing;
    @extend %button-transition;
    cursor: pointer;

    &:before {
      position: absolute;
      display: block;
      content: " ";
      z-index: -5;
      width: 129px;
      height: 129px;
      @extend %border-radius;
      @extend %box-shadow-before;
      background: $background-button;
      top: -20px;
      left: -20px;
    }

    &:active {
      @extend %box-shadow-active;
    }
  }
}
</style>