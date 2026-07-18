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
import Navigation from "@/components/Navigation.vue";
import DarkModeButton from "@/components/DarkModeButton.vue";
import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  name: "Home",
  components: {
    DarkModeButton,
    LocaleChanger,
    Navigation
  }
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
  width: 100%;
}

.page-content {
  /* min-height: 100%; TODO: breaks */
  height: 100%;
}

.body {
  /* height: 100%; */
  flex-grow: 1;
}
</style>
