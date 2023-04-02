<script setup lang="ts">

import type {Pokemon} from "@/shared/interfaces/pokemon.interface";

const props = defineProps<{
  pokemon : Pokemon,
  color: string
}>()

</script>


<template>
  <router-link :to="`/detail/${props.pokemon.name}`" class="block border border-sky-900 rounded p-5 m-4 flex-auto" :class="props.color" id="card">
    <img :src="props.pokemon.image" alt="pokemonImage" class="w-32 m-auto">
    <h1
        class="text-center text-xl font-semibold my-2 block"
    >
      {{props.pokemon.name}}
    </h1>
    <div class="flex content-between w-full items-center">
      <template v-for="type in pokemon.apiTypes">
        <div class="flex flex-col flex-1 text-center">
          <div>{{type.name}}</div>
          <img :src="type.image" alt="" class="w-7 m-auto">
        </div>
      </template>
    </div>

  </router-link>
</template>

<style scoped lang="sass">
#card
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px
  transition: all 0.2s
  &:hover
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 5px


</style>