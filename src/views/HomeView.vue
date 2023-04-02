<script setup lang="ts">
import {usePokemon} from "@/stores/pokemon.store";
import CardPokemon from "@/components/CardPokemon.vue";
import Filter from "@/components/Filter.vue"
import type {FilterUpdate} from "@/shared/interfaces/filter.interface";
import TheLoader from "@/components/TheLoader.vue";
import {ReturnColorByType} from "@/shared/Color";

const pokemonStore = usePokemon()
function UpdateFilter(updateFilter: FilterUpdate){
  pokemonStore.updateFilter(updateFilter)
}

</script>

<template>
    <Filter :filters="pokemonStore.filters" @update-filter="UpdateFilter" v-if="pokemonStore.isLoaded"/>
  <div>
    <h2 class="ml-2 text-2xl font-bold my-3">Liste des pokemon</h2>
    <div class="flex flex-wrap w-full content-center items-center md:w-4/5 m-auto">
      <template
          v-if="pokemonStore.isLoaded"
          v-for="pokemon in pokemonStore.filteredPokemon"
      >
        <CardPokemon :pokemon="pokemon" :color="ReturnColorByType(pokemon.apiTypes[0].name)"/>
      </template>
    </div>
    <div class="w-1/2 m-auto text-center" v-if="!pokemonStore.isLoaded">
      <the-loader />
    </div>
  </div>
</template>