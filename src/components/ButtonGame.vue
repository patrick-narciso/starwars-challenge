<template>
    <a role="button"></a>
</template>

<script>
    export default {
        name: "ButtonGame"
    }
</script>

<style scoped lang="scss">
@import '../styles/_variables';
@import '../styles/placeholders/_placeholders';

a {
    position: absolute;
    display: block;
    width: 120px;
    height: 120px;
    margin: -100px 0 0 -100px;
    @extend %border-radius;
    @extend %box-shadow;
    @extend %box-sizing;
    @extend %button-transition;
    padding: 78px 9px 0 0;
    cursor: pointer;

    &:before {
        position: absolute;
        display: block;
        content: " ";
        z-index: -5;
        width: 160px;
        height: 160px;
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

</style>