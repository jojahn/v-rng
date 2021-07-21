import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import "bootstrap-icons/font/bootstrap-icons.css";

window.i18n = i18n;
createApp(App).use(i18n).use(router).mount('#app');
