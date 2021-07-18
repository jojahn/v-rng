<template>
  <!-- <Header /> -->
  <DarkModeButton />
  <Navigation />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/wheel">Wheel</router-link> |
    <router-link to="/spinner">Spinner</router-link> |
    <router-link to="/dices">Dices</router-link>
  </div>
  <router-view/>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import DarkModeButton from "@/components/DarkModeButton.vue"
// import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
