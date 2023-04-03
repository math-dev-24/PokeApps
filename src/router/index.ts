import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {initialFectPokemon} from "@/stores/pokemon.store";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [initialFectPokemon],
      component: HomeView
    },
    {
      path: "/detail/:name(.*)",
      name: "detail",
      component: () => import("@/views/DetailPokemon.vue"),
      props:to => ({
        pokemonName : to.params.name
      })
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.params.name){
    document.title = `Pokedex - ${to.params.name}`
  }else{
    document.title = "Pokedex"
  }
})

export default router
