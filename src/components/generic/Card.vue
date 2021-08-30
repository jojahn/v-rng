<template>
  <router-link class="router-link-card" :disabled="disabled == true" :to="path">
    <div class="card" ref="card">
      <img
        @load="imageLoaded = true"
        v-bind:alt="title"
        v-bind:src="require(`@/assets/${imgSrc}`)"
        v-show="imageLoaded"
      />
      <hr />
      <p>
        {{ title }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    path: String,
    disabled: Boolean
  },
  data() {
    return {
      imageLoaded: false,
      fontsLoaded: false
    };
  },
  methods: {
    onFontsLoaded() {
      return (_) => {
        setTimeout(() => {
          this.fontsLoaded = true;
        }, 10);
      };
    }
  },
  mounted() {
    if (this.$props.disabled === true) {
      this.$refs.card.classList.add("disabled");
    }
    document.fonts.ready.then(this.onFontsLoaded()); // = this.onFontsLoaded();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");
.router-link-card {
  text-decoration: none;
}
.card {
  width: 15em;
  max-height: 15em;
  background-color: #fff;
  border-radius: 0.3rem;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none !important;
  color: #333;
  margin-bottom: 20px;
}
.card.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.card hr {
  width: 80%;
  height: 1px;
  border: 0;
  border-top: 1px solid #ddd;
}

.card p {
  font-size: 1.75rem;
  font-weight: lighter;
  font-family: "Courgette";
}

@media screen and (max-width: 768px) {
  .router-link-card {
    margin: auto;
    margin-bottom: 20px;
  }
}
.dark .card {
  background-color: #222;
  border: 1px solid #111;
  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
}
</style>
