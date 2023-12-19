<template>
  <body>
    <headerSite></headerSite>
    <RouterView />
  </body>
</template>

<script setup>
import headerSite from './components/home/headerSite.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
body {
  background-color: lightgray;
}
</style>
