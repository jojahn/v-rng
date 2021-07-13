<template>
  <div class="home">
    <div class="cards">
        <Card title="Wheel" imgSrc="Wheel.png" path="/wheel" />
        <Card title="Spinner" imgSrc="Spinner.png" path="/spinner" />
        <Card title="Dices" imgSrc="Cubes.png" path="/dices" />
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
.cards {
    margin: auto;
    display: flex;
    justify-content: space-evenly;
}
</style>
