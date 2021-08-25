import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "bootstrap-icons/font/bootstrap-icons.css";
import { clickOutside } from "./components/ClickOutside";

createApp(App)
  .use(i18n)
  .use(router)
  .directive("click-outside", clickOutside)
  .mount("#app");
