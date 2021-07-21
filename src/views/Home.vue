<template>
  <div class="home">
    <div class="cards">
        <Card title="Wheel" imgSrc="Wheel.png" path="/wheel" />
        <Card title="Spinner" imgSrc="Spinner.png" path="/spinner" :disabled="true" />
        <Card title="Dices" imgSrc="Cubes.png" path="/dices" :disabled="true" />
        <Card title="Coin" imgSrc="Coin.png" path="/coin" :disabled="true" />
        <!-- <div class="card-placeholder" />
        <div class="card-placeholder" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style scoped>
.home {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100vh;
}
.cards {
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    min-width: 60em;
    max-width: 80vw;
    flex-wrap: wrap;
}

.card-placeholder {
  width: 1px;
  display: block;
}

@media screen and (max-width: 768px)  {
  .cards {
    flex-direction: column;
    justify-content: center;
    min-width: 15em;
    max-width: initial;
  }
  .card-placeholder {
    display: none;
  }
}
</style>
