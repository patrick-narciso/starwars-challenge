<template>
  <div class="container">
    <div class="card">
      <div class="card__header">
        <img class="card__header--planet"
             src="https://s3.amazonaws.com/star-wars-challenge/planets/Tatooine.png"
             alt="Star Wars Planet">
        <h1>Tatooine</h1>
      </div>
      <div class="card__content">
        <img class="card__content--watermark"
             src="https://s3.amazonaws.com/star-wars-challenge/starwars.png"
             alt="Logo Star Wars">
        <ul class="card__content--data">
          <li><strong>Diameter:</strong>10465</li>
          <li><strong>Climate: </strong>Arid</li>
          <li><strong>Gravity: </strong>1 standard</li>
          <li><strong>Terrain: </strong>Desert</li>
          <li><strong>Surface Water: </strong>1</li>
          <li><strong>Population: </strong>200000</li>
        </ul>
      </div>
      <footer class="card__footer">
        <h2>Featured in 10 Films</h2>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style scoped lang="scss">
@import '../styles/mixins/_font-face';
@include font-face(Star-Jedi, 'starjedi', 'starjedi');

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .card {
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: #CC3843;
    border-radius: 23px;
    width: 300px;
    height: auto;
    margin-top: 12vh;
    .card__header {
      margin-top: -76px;
      h1 {
        font-family: 'Star-Jedi';
      }
    }
    .card__header--planet {
      width: 150px;
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
      }
    }
    .card__footer {
      margin-top: 53px;
    }
  }
}
</style>