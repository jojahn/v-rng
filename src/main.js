import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import i18n from "./locales/i18n"
import clickOutside from "./directives/clickOutside"
import { preloadImages, preloadModels } from "./services/preload"
import "bootstrap-icons/font/bootstrap-icons.css"

const homeImages = [
    "/images/Wheel.png",
    "/images/Matches.png",
    "/images/Coin.png",
    "/images/Cubes.png"
]
const models = ["/models/coin/Coin.glb", "/models/dice/Dice.gltf"]

async function initializeApp() {
    const loadingScreen = document.getElementById("loading-screen")

    try {
        await Promise.all([preloadImages(homeImages), preloadModels(models)])
    } catch (err) {
        console.warn("Preload error:", err)
    }

    const app = createApp(App)
    app.use(i18n)
    app.use(router)
    app.directive("click-outside", clickOutside)
    app.mount("#app")

    if (loadingScreen) {
        loadingScreen.remove()
    }
}

initializeApp()
