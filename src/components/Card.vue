<template>
  <div class="container">
    <div class="card">
      <div class="card__header">
        <img class="card__header--planet"
             :src="planet.name | planetImage"
             alt="Star Wars Planet">
        <h1 class="card__header--name">{{planet.name}}</h1>
      </div>
      <div class="card__content">
        <img class="card__content--watermark"
             src="https://s3.amazonaws.com/star-wars-challenge/starwars.png"
             alt="Logo Star Wars">
        <ul class="card__content--data">
          <li><strong>Diameter:</strong>{{planet.diameter}}</li>
          <li><strong>Climate: </strong>{{planet.climate}}</li>
          <li><strong>Gravity: </strong>{{planet.gravity}}</li>
          <li><strong>Terrain: </strong>{{planet.terrain}}</li>
          <li><strong>Surface Water: </strong>{{planet.surface_water}}</li>
          <li><strong>Population: </strong>{{planet.population}}</li>
        </ul>
      </div>
      <footer class="card__footer">
        <h2>Featured in {{planet.films.length}} Films</h2>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['planet']
  }
</script>

<style scoped lang="scss">
@import '../styles/placeholders/_placeholders';

.container {
  @extend %flexbox;
  .card {
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: $background-card;
    border-radius: 23px;
    width: 300px;
    height: auto;
    margin-top: 15vh;
  }
}
.card__header {
  margin-top: -76px;
  .card__header--planet {
    width: 150px;
  }
  .card__header--name {
    font-family: 'Star-Jedi';
    margin: 0 auto;
  }
}
.card__content {
  padding: 2px 16px;
  .card__content--watermark {
    opacity: 0.1;
    transform: rotate(-90deg) scale(0.9);
    margin-left: -140px;
  }
  .card__content--data {
    list-style: none;
    text-align: left;
    margin-top: -251px;
    font-size: 20px;
    margin-left: -42px;
  }
}
.card__footer {
  margin-top: 0;
}
</style>