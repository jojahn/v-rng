import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import WheelView from '@/views/Wheel/WheelView.vue'
import MatchesView from '@/views/Matches/MatchesView.vue'

/*
TODO: add more routes
      <router-link class="nav-item active" to="/">{{ t("Home") }}</router-link>
      <router-link class="nav-item" to="/wheel">{{ t("Wheel") }}</router-link>
      <router-link class="nav-item" to="/spinner">{{
        t("Spinner")
      }}</router-link>
      <router-link class="nav-item" to="/dices" disabled="true">{{
        t("Dices")
      }}</router-link>
      <router-link class="nav-item" to="/coin">{{ t("Coin") }}</router-link>
      <router-link class="nav-item" to="/cards">{{ t("Cards") }}</router-link>
      <router-link class="nav-item" to="/matches">{{
        t("Matches")
      }}</router-link>
      <router-link class="nav-item" to="/slots">{{ t("Slots") }}</router-link>
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wheel',
      name: 'wheel',
      component: WheelView,
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchesView,
    },
    {
      path: '/coin',
      name: 'coin',
      component: MatchesView,
    }
  ],
})

export default router
