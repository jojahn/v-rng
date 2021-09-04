<template>
  <div :class="'navigation ' + ($route.path === '/' ? 'hidden' : '')" ref="nav">
    <div class="nav-bar">
      <router-link class="nav-item active" to="/">{{ t("Home") }}</router-link>
      <router-link class="nav-item" to="/wheel">{{ t("Wheel") }}</router-link>
      <router-link class="nav-item" to="/spinner">{{
        t("Spinner")
      }}</router-link>
      <router-link class="nav-item" to="/dices" disabled="true">{{
        t("Dices")
      }}</router-link>
      <router-link class="nav-item" to="/coin">{{ t("Coin") }}</router-link>
      <router-link class="nav-item" to="/cards">{{ t("Cards") }}</router-link>
      <router-link class="nav-item" to="/matches">{{
        t("Matches")
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  data() {
    return {
      currentPath: ""
    };
  },
  mounted() {
    this.$route.path;
  },
  setup() {
    const { t } = useI18n();
    return { t };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
.navigation {
  position: absolute;
  display: flex;
  width: 100%;
  height: 40px;
  top: 10px;
  justify-content: center;
  transition: 0.25s;
  font-family: "Roboto", sans-serif;
}

.navigation.hidden {
  top: -40px;
}

.nav-bar {
  border-radius: 0.3rem;
  background-color: #ddd;
  border: 1px solid #aaa;
  display: flex;
  width: fit-content;
  overflow: hidden;
  background: #ddd;
}

.nav-item {
  color: #333;
  text-decoration: none;
  background: #ddd;
  padding: 10px 20px;
  display: block;
  transition: 0.5s;
}

.nav-item:hover {
  background: #eee;
}

.dark .nav-bar {
  border-color: #000;
  background: #222;
}

.dark .nav-item {
  color: #ddd;
  background: #222;
}

.dark .nav-item:hover {
  background: #111;
}

@media screen and (max-width: 768px) {
  .navigation {
    display: none;
  }
}
</style>
