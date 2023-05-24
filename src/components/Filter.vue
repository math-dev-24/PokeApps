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
  <div class="mx-2 my-2 m-auto border p-4 bg-slate-600 rounded-lg text-white">
    <div class="flex flex-col md:flex-row content-center items-center">
        <input
            type="text"
            class="p-2 text-slate-700 outline-none rounded w-full"
            :value="filters.search"
            placeholder="Recherchez votre pokemon preféré"
            @input="emit('updateFilter',{search: ($event.target as HTMLInputElement).value})"
        >
      <div class="flex flex-col m-2">
        <span class="text-xl font-semibold my-1">Type :</span>
        <div class="flex flex-wrap">
          <template v-for="(type, index) in pokeStore.types" :key="index">
            <div
                @click="emit('updateFilter', {types: type.name})"
                class="bg-gray-200 m-1 cursor-pointer rounded flex content-center items-center md:p-1"
                :class="{'bg-slate-800': pokeStore.filters.types === type.name}"
            >
              <img :src="type.image" alt="" class="w-8">
            </div>
          </template>
          <div @click="emit('updateFilter', {types: 'all'})" class="bg-gray-400 m-1 cursor-pointer rounded text-xl font-semibold px-5 py-2">
            Reset
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
