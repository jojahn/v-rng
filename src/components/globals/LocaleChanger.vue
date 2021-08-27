<template>
  <div class="locale-changer">
    <button
      v-on:click="showSelect"
      id="OpenLocaleDropdownButton"
      class="locale-option-button"
    >
      <i class="bi bi-translate"></i>
      <i
        :class="'bi ' + (open ? 'bi-caret-down-fill' : 'bi-caret-left-fill')"
      ></i>
    </button>
    <div class="locale-select" v-if="open === true">
      <button
        v-on:click="select('en')"
        id="en"
        :class="
          'locale-option ' + (i18n.global.locale === 'en' ? 'active' : '')
        "
      >
        <p>English</p>
      </button>
      <button
        v-on:click="select('de')"
        id="de"
        :class="
          'locale-option ' + (i18n.global.locale === 'de' ? 'active' : '')
        "
      >
        <p>Deutsch</p>
      </button>
    </div>
  </div>
</template>

<script>
import i18n from "../../i18n";
export default {
  data() {
    return { i18n, langs: ["en", "de"], open: false, currentFlag: "us" };
  },
  methods: {
    showSelect() {
      var openButton = document.getElementById("OpenLocaleDropdownButton");
      openButton.classList.toggle("open");
      this.open = !this.open;
    },
    select(lang) {
      i18n.global.locale.value = lang;
      this.showSelect();
      var options = document.getElementsByClassName("locale-option");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("active");
        if (options[i].id === lang) {
          options[i].classList.add("active");
        }
      }
      localStorage.setItem("locale", lang);
    },
    onChange() {
      localStorage.setItem("locale", i18n.global.locale.value);
    },
  },
  mounted() {
    var cached = localStorage.getItem("locale");
    if (cached) {
      i18n.global.locale.value = cached;
    } else {
      try {
        i18n.global.locale.value = navigator.language.split("-")[0];
      } catch (e) {
        console.log("Failed to get locale from browser: ", e);
      }
      localStorage.setItem("locale", i18n.global.locale.value);
    }
  },
};
</script>

<style scoped>
.locale-changer {
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 120px;
  z-index: 99;
  width: 80px;

  display: flex;
  flex-direction: column;
}

.locale-changer select {
  height: 50px;
}

optgroup {
  height: 50px;
}

.locale-changer option {
  background: red;
  height: 50px;
}

.locale-select {
  display: flex;
  flex-direction: column;
}

.locale-option img {
  height: 20px;
  width: 30px;
  margin: 2px;
}

.locale-option {
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: #ddd;
  border: 1px solid #aaa;
  border-top: none;
  transition: 0.25s;
}

.locale-option.active {
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.locale-option:last-child {
  border-radius: 0 0 0.2rem 0.2rem;
}

.locale-option p {
  padding: 10px;
  margin: 0;
  font-size: 1rem;
}

.locale-option-button {
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 0.2rem;
}

.locale-option-button.open {
  border-radius: 0.2rem 0.2rem 0 0;
}

.locale-option-button > i:first-child {
  font-size: 1.5rem;
}

.locale-option-button > i:nth-child(2) {
  font-size: 1.25rem;
  line-height: 2rem;
  margin-left: 5px;
}

.dark .locale-option-button {
  border-color: #000;
  background-color: #222;
  color: #ddd;
}

.dark .locale-option {
  color: #ddd;
  background-color: #222;
  border-color: #000;
}

.dark .locale-option.active {
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

@media screen and (max-width: 768px) {
  .locale-changer {
    display: none;
  }
}
</style>
