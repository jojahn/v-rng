<template>
  <div :class="'navigation ' + ($route.path === '/' ? 'hidden' : '')" ref="nav">
    <div class="nav-bar">
      <router-link v-for="route in routes" class="nav-item" v-bind:to="route.path">
        {{ t(route.name) }}
      </router-link>
    </div>
    <router-link v-if="currentRoute.path !== '/'" to="/" class="back-button">
      <i class="bi-arrow-left"></i>
    </router-link>
  </div>
</template>

<script>
import router from "@/router";
import { useI18n } from "vue-i18n";
export default {
  data() {
    return {
      currentRoute: "",
      routes: []
    };
  },
  mounted() {
    this.routes = router.getRoutes();
    this.currentRoute = router.currentRoute;
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
  transition: 0.1s;
  user-select: none;
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

.back-button {
  display: none;
  line-height: 1.5rem;
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  margin: auto;
  cursor: pointer;
  background: transparent;
  position: absolute;
  top: 100vh;
  left: 0;
  color: unset;
  border: 2px solid;
  border-radius: 999em;
  padding: 10px;
  margin: 10px;
  margin-top: calc(2 * -1.5rem - 20px);
}

@media screen and (max-width: 768px) {
  .nav-bar {
    display: none;
  }

  .back-button {
    display: block;
  }
}

</style>
