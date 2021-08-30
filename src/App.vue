<template>
  <article>
    <section class="header">
      <Navigation />
      <LocaleChanger />
      <DarkModeButton />
    </section>
    <section class="body">
      <router-view class="page-content" />
    </section>
  </article>
</template>

<script>
import Navigation from "@/components/globals/Navigation.vue";
import DarkModeButton from "@/components/globals/DarkModeButton.vue";
import LocaleChanger from "@/components/globals/LocaleChanger.vue";

export default {
  name: "Home",
  components: {
    DarkModeButton,
    LocaleChanger,
    Navigation
    // Header
  },
  data() {
    false;
  },
  methods: {
    do() {
      // console.log($router.currentRoute._rawValue.fullPath);
    }
  },
  mounted() {}
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
.dark {
  background-color: #333;
  color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > article {
  width: 100vw;
  min-height: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.dark #app {
  color: #ddd;
}

.header {
  height: 60px;
  width: 100vw;
}

.body {
  height: 100%;
  width: 100vw;
}

.page-content {
  min-height: 100%;
}
</style>
