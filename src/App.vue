<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/navigation.vue";

</script>

<template>
  <div class="min-w-screen min-h-screen flex flex-col min-h-screen bg-gray-400">
    <Navigation />
    <RouterView />
  </div>


</template>
