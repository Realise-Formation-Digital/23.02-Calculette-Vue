import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import CalculatriceChildParent from "../pages/Calculatrice-child-parent.vue";
import CalculatriceSimple from "../pages/Calculatrice-simple.vue";
import BeerList from "../pages/BeerList.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/calculatrice-child-parent', component: CalculatriceChildParent },
  { path: '/calculatrice-simple', component: CalculatriceSimple },
  { path: '/beers-list', component: BeerList }
]

const router = createRouter({
  routes: routes,
  history: createWebHistory()
})

export default router
