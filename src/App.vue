<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from "@/components/TheNav.vue";

</script>

<template>
  <div class="min-w-screen min-h-screen flex flex-col min-h-screen bg-gray-300">
    <Navigation />
    <RouterView />
  </div>


</template>
