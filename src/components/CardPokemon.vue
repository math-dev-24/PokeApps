<script setup lang="ts">

import type {Pokemon} from "@/shared/interfaces/pokemon.interface";

const props = defineProps<{
  pokemon : Pokemon
}>()

</script>


<template>
  <router-link
      :to="`/detail/${props.pokemon.name}`"
      class="block border border-sky-900 rounded p-5 m-4 flex-auto bg-white"
      id="card">

    <div class="id">
      #{{props.pokemon.id}}
    </div>
    <img :src="props.pokemon.image" alt="pokemonImage" class="img">


    <div class="flex flex-col content-start">
      <h1 class="text-xl font-semibold my-2 block">
        {{props.pokemon.name}}
      </h1>
      <template v-for="(type, index) in pokemon.apiTypes" :key="index">
        <div class="type">
          <img :src="type.image" alt="" class="w-7">
          <div class="ml-2 font-semibold">{{type.name}}</div>
        </div>
      </template>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
#card
  box-shadow: rgba(0, 0, 0, 0.3) 0 6px 12px
  transition: all 0.2s
  height: 220px
  width: 350px
  position: relative
  &:hover
    box-shadow: rgba(0, 0, 0, 0.3) 0 2px 5px
  .type
    display: flex
    width: 40%
    padding: 5px
    margin: 10px
    background: rgba(0,0,0,0.1)
    border-radius: 20px

  .id
    position: absolute
    right: 10px
    font-size: 1.5em
    color: #9f9693
    top: 1px
  .img
    max-width: 160px
    position: absolute
    right: 3px
    bottom: 2px

</style>