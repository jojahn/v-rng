<template>
  <div class="home">
    <div class="cards">
        <Card :title="t('Wheel')" imgSrc="Wheel.png" path="/wheel" />
        <Card :title="t('Spinner')" imgSrc="Spinner.png" path="/spinner" />
        <Card :title="t('Dices')" imgSrc="Cubes.png" path="/dices" />
        <Card :title="t('Coin')" imgSrc="Coin.png" path="/coin" />
        <Card :title="t('Cards')" imgSrc="Cards.png" path="/cards" />
        <Card :title="t('Matches')" imgSrc="Matches.png" path="/matches" />
        <!-- <div class="card-placeholder" />
        <div class="card-placeholder" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Home',
  components: {
    Card
  },
  setup() {
    const { t } = useI18n();

    return { t };
  }

}
</script>

<style scoped>
.home {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}
.cards {
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
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
