import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
