<template>
  <article class="home">
    <section class="quote">
      <p class="text">{{ quote.text }}</p>
      <p class="author">~ {{ quote.author }}</p>
    </section>
    <section class="cards">
      <Card :title="t('Wheel')" imgSrc="Wheel.png" path="/wheel" />
      <Card :title="t('Spinner')" imgSrc="Spinner.png" path="/spinner" />
      <Card :title="t('Dices')" imgSrc="Cubes.png" path="/dices" />
      <Card :title="t('Coin')" imgSrc="Coin.png" path="/coin" />
      <Card :title="t('Cards')" imgSrc="Cards.png" path="/cards" />
      <Card
        :title="t('Matches')"
        imgSrc="Matches.png"
        :disabled="true"
        path="/matches"
      />
      <!-- <div class="card-placeholder" />
        <div class="card-placeholder" /> -->
    </section>
  </article>
</template>

<script>
import Card from "@/components/generic/Card.vue";
import { getRandomQuote } from "@/services/quotes";
import { useI18n } from "vue-i18n";

export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return { quote: getRandomQuote() };
  },
  setup() {
    const { t } = useI18n();

    return { t };
  },
  mounted() {
    this.quote = getRandomQuote();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");
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

.cards > * {
  margin: 10px;
}

@media screen and (max-width: 768px) {
  .cards > * {
    margin: auto;
  }
}

.card-placeholder {
  width: 1px;
  display: block;
}

.quote .text {
  padding: 0 10px;
  font-size: 2rem;
  font-family: "Courgette";
  color: #aaa;
}

.quote .author {
  font-size: 1.5rem;
  font-family: "Courgette";
  font-weight: lighter;
  color: #aaa;
}

@media screen and (max-width: 768px) {
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
