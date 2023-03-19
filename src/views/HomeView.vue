<script setup lang="ts">

import {usePokemon} from "@/stores/pokemon.store";
import CardPokemon from "@/components/cardPokemon.vue";
import Filter from "@/components/Filter.vue"
import type {FilterUpdate} from "@/shared/interfaces/filter.interface";

const pokemonStore = usePokemon()

function UpdateFilter(updateFilter: FilterUpdate){
  pokemonStore.updateFilter(updateFilter)
}


</script>

<template>
    <Filter :filters="pokemonStore.filters" @update-filter="UpdateFilter" v-if="pokemonStore.isLoaded"/>
  <div>
    <h2 class="ml-2 text-2xl font-bold my-3">Liste des pokemon</h2>
    <div class="flex flex-wrap w-4/5 m-auto">
      <template
          v-if="pokemonStore.isLoaded"
          v-for="pokemon in pokemonStore.filteredPokemon"
      >
        <CardPokemon :pokemon="pokemon" />
      </template>
    </div>


    <template v-if="!pokemonStore.isLoaded">
      <h2>Chargement en cours</h2>
    </template>
  </div>
</template>