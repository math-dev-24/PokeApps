<script setup lang="ts">

import type {Pokemon} from "@/shared/interfaces/pokemon.interface";

const props = defineProps<{
  pokemon : Pokemon
}>()

</script>


<template>
  <div class="border border-sky-900 m-2 p-2 rounded w-1/6 bg-gray-300" id="card">
    <img :src="props.pokemon.image" alt="pokemonImage" class="w-32 m-auto">
    <router-link
        :to="`/detail/${props.pokemon.name}`"
        class="text-center text-xl font-semibold my-2 block"
    >
      {{props.pokemon.name}}
    </router-link>
    <div class="flex content-between w-full items-center">
      <template v-for="type in pokemon.apiTypes">
        <div class="flex flex-col flex-1 text-center">
          <div>{{type.name}}</div>
          <img :src="type.image" alt="" class="w-7 m-auto">
        </div>
      </template>
    </div>

  </div>
</template>

<style scoped lang="sass">
#card
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px


</style>