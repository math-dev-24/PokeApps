<script setup lang="ts">

import {usePokemon} from "@/stores/pokemon.store";
import {onMounted, onUpdated} from "vue";

const pokeStore = usePokemon()

const props = defineProps<{
  pokemonName: string
}>()

function loadDetail() {
  pokeStore.detailIsLoaded = false
  pokeStore.fecthDetailPokemon(props.pokemonName)
}

onMounted(() => {
  loadDetail()
})

onUpdated(() => {
  loadDetail()
})

</script>

<template>
  <div class="container mx-auto bg-white border p-5 rounded-2xl drop-shadow" v-if="pokeStore.detailPokemon">
    <div class="my-5">
      <h1 class="text-center my-3 text-2xl font-semibold">{{props.pokemonName}}</h1>
      <div class="flex content-center items-center w-full">
        <div v-for="(type, index) in pokeStore.detailPokemon.apiTypes" class="flex-1 text-center" :key="index">
          <img :src="type.image" :alt="`image type : ${type.name}`" class="w-20 m-auto">
          <span class="font-semibold my-1">{{type.name}}</span>
        </div>
      </div>
    </div>
    <div class="w-full flex content-center">
      <img :src="pokeStore.detailPokemon.image" :alt="`image de : ${pokemonName}`" class="w-2/5">
      <div class="flex flex-col w-full">
        <div class="text-center text-xl">
          Génération : <span class="font-semibold">{{ pokeStore.detailPokemon.apiGeneration}}</span>
        </div>
        <div class="flex flex-row w-full">
          <div v-if="pokeStore.detailPokemon.apiPreEvolution" class="text-center w-1/2 border m-2">
            <h1 class="text-xl font-semibold my-1">Pré-Evolution :</h1>
            <router-link :to="`/detail/${pokeStore.detailPokemon.apiPreEvolution.name}`">
              {{pokeStore.detailPokemon.apiPreEvolution.name}}
            </router-link>
          </div>
          <div v-if="pokeStore.detailPokemon.apiEvolutions" class="text-center w-1/2 border m-2">
            <h1 class="text-xl font-semibold my-1">Evolution :</h1>
            <div v-for="(evolution, index) in pokeStore.detailPokemon.apiEvolutions" :key="index">
              <router-link :to="`/detail/${evolution.name}`">
                {{evolution.name}}
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full">
          <h1>Stat :</h1>
          <table>
            <tr>
              <td class="text-end mr-2">Santé :</td>
              <td>{{pokeStore.detailPokemon.stats.HP}}</td>
            </tr>
            <tr>
              <td class="text-end mr-2">Attaque :</td>
              <td>{{pokeStore.detailPokemon.stats.attack}}</td>
            </tr>
            <tr>
              <td class="text-end mr-2">Défense :</td>
              <td>{{pokeStore.detailPokemon.stats.defense}}</td>
            </tr>
            <tr>
              <td class="text-end mr-2">Spécial attaque :</td>
              <td>{{pokeStore.detailPokemon.stats.special_attack}}</td>
            </tr>
            <tr>
              <td class="text-end mr-2">Spécial défense :</td>
              <td>{{pokeStore.detailPokemon.stats.special_defense}}</td>
            </tr>
            <tr>
              <td class="text-end mr-2">Vitesse :</td>
              <td>{{pokeStore.detailPokemon.stats.speed}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(resistance, index) in pokeStore.detailPokemon.apiResistances" class="border p-2 m-1" :key="index">
        {{resistance.name}} | {{resistance.damage_multiplier}} | {{resistance.damage_relation}}
      </div>
    </div>

  </div>
</template>