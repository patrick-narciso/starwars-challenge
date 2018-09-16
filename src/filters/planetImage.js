import Vue from 'vue';

Vue.filter('planetImage', planetName => {
  return planetName ? `https://s3.amazonaws.com/star-wars-challenge/planets/${planetName}.png` : '';
});