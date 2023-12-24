<template>
  <body>
    <headerSite></headerSite>
    <!-- <headerMobile></headerMobile> -->
    <RouterView />
    <!-- <footerMobile v-if="deviceScreen<1120"></footerMobile> -->
    <footerSite></footerSite>
  </body>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import headerSite from './components/home/headerSite.vue';
import headerMobile from './components/headerMobile.vue';
import footerSite from './components/home/footer.vue'
import footerMobile from './components/footerMobile.vue';

let deviceScreen = screen.width;
</script>

<style scoped>
body {
  background-color: rgb(231, 230, 230);
}
</style>
