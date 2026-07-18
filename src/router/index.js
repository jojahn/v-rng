import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import WheelView from '@/views/Wheel/WheelView.vue'
import MatchesView from '@/views/Matches/MatchesView.vue'
import CoinView from '@/views/Coin/CoinView.vue'
import DiceView from '@/views/Dice/DiceView.vue'

/*
TODO: add more routes
      <router-link class="nav-item" to="/spinner">{{
        t("Spinner")
      }}</router-link>
      <router-link class="nav-item" to="/cards">{{ t("Cards") }}</router-link>
      <router-link class="nav-item" to="/slots">{{ t("Slots") }}</router-link>
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/wheel',
      name: 'Wheel',
      component: WheelView,
    },
    {
      path: '/matches',
      name: 'Matches',
      component: MatchesView,
    },
    {
      path: '/coin',
      name: 'Coin',
      component: CoinView,
    },
    {
      path: '/dice',
      name: 'Dice',
      component: DiceView,
    }
  ],
})

export default router
