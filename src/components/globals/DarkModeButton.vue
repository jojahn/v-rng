<template>
  <button
    class="dark-mode-button"
    v-if="notOnMobile === true"
    v-on:click="onClick"
  >
    <i v-bind:class="'bi ' + (darkMode ? 'bi-moon-fill' : 'bi-sun-fill')" />
  </button>
</template>

<script>
import { setDarkMode, usesDarkMode } from "@/services/theming";
export default {
  data() {
    return {
      darkMode: false,
      notOnMobile: null
    };
  },
  methods: {
    onClick() {
      this.darkMode = !this.darkMode;
      setDarkMode();
      localStorage.setItem("darkMode", this.darkMode);
    }
  },
  mounted() {
    var saved = localStorage.getItem("darkMode");
    if ((saved === null || saved === "true") && usesDarkMode()) {
      this.darkMode = true;
      setDarkMode();
    }
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      this.notOnMobile = true;
    }
  }
};
</script>

<style scoped>
.dark-mode-button {
  width: 80px;
  height: 40px;
  border-radius: 4rem;
  border: 1px solid #aaa;
  background-color: #ddd;
  cursor: pointer;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
}

.dark-mode-button i {
  font-size: 1.15rem;
  color: #333;
  background-color: #fff;
  width: 38px;
  height: 38px;
  display: block;
  line-height: 39px;
  border-radius: 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  margin-left: 40px;
  -webkit-animation: light 0.25s ease-in-out 0s 1 normal forwards;
  -moz-animation: light 0.25s ease-in-out 0s 1 normal forwards;
  animation: light 0.25s ease-in-out 0s 1 normal forwards;
}

.dark .dark-mode-button {
  border-color: #000;
  background-color: #222;
}

.dark .dark-mode-button i {
  color: #ddd;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  margin-left: 0;
  -webkit-animation: dark 0.25s ease-in-out 0s 1 normal forwards;
  -moz-animation: dark 0.25s ease-in-out 0s 1 normal forwards;
  animation: dark 0.25s ease-in-out 0s 1 normal forwards;
}

@-moz-keyframes light {
  100% {
    margin-left: 0;
  }
}
@-webkit-keyframes light {
  100% {
    margin-left: 0;
  }
}
@keyframes light {
  100% {
    margin-left: 0;
  }
}

@-moz-keyframes dark {
  100% {
    margin-left: 40px;
  }
}
@-webkit-keyframes dark {
  100% {
    margin-left: 40px;
  }
}
@keyframes dark {
  100% {
    margin-left: 40px;
  }
}

@media screen and (max-width: 768px) {
  .dark-mode-button {
    display: none;
  }
}
</style>
