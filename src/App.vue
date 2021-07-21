<template>
  <!-- <Header /> -->
  <DarkModeButton />
  <router-view/>
</template>

<script>
import DarkModeButton from "@/components/DarkModeButton.vue"
// import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    DarkModeButton
    // Header
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
</style>
