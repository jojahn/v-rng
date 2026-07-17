import { createI18n } from "vue-i18n"
import en from "./en.json"
import de from "./en.json"

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        de
    }
})

window.i18n = i18n

export default i18n