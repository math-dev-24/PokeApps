<script setup lang="ts">

import type {FilterInterface, FilterUpdate} from "@/shared/interfaces/filter.interface";
import {usePokemon} from "@/stores/pokemon.store";

defineProps<{
  filters: FilterInterface
}>()

const emit = defineEmits<{
  (e: "updateFilter", filterUpdate: FilterUpdate):void
}>()

const pokeStore = usePokemon()
</script>



<template>
  <div class="mx-2 my-2 m-auto border p-4">
    <div class="flex content-center items-center">
      <div class="flex flex-col m-2">
        <span class="text-xl font-semibold my-1">Par nom :</span>
        <input
            type="text"
            class="input_style p-1"
            :value="filters.search"
            @input="emit('updateFilter',{search: ($event.target as HTMLInputElement).value})"
        >
      </div>
      <div class="flex flex-col m-2">
        <span class="text-xl font-semibold my-1">Type :</span>
        <div class="flex">
          <template v-for="type in pokeStore.types">
            <div
                @click="emit('updateFilter', {types: type.name})"
                class="bg-gray-200 m-1 cursor-pointer rounded"
                :class="{'bg-sky-300': pokeStore.filters.types === type.name}"
            >
              <img :src="type.image" alt="" class="w-8">
            </div>
          </template>
          <div @click="emit('updateFilter', {types: 'all'})" class="bg-gray-200 m-1 cursor-pointer rounded text-xl font-semibold p-1">
            Reset
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.input_style
  background: #eee
  border-bottom: 2px solid black
  border-radius: 5px 5px 0px 0px

</style>