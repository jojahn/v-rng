<template>
  <!-- <Header /> -->
  <Navigation />
  <LocaleChanger />
  <DarkModeButton />
  <router-view class="page-content"/>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import DarkModeButton from "@/components/DarkModeButton.vue"
import LocaleChanger from '@/components/LocaleChanger.vue'

export default {
  name: 'Home',
  components: {
    DarkModeButton,
    LocaleChanger,
    Navigation
    // Header
  },
  data() {
    onIE: false
  },
  methods: {
    do() {
      // console.log($router.currentRoute._rawValue.fullPath);
    }
  },
  mounted() {

  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #EEE;
}
.dark {
  background-color: #333;
  color: #EEE
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dark  #app {
  color: #ddd;
}

.page-content {
  margin-top: 40px;
  overflow: hidden;
  height: calc(100vh - 40px);
}
</style>
