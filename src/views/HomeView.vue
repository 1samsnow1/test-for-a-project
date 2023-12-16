<template>
  <!-- header -->
  <headerSite></headerSite>

  <!-- banner -->
    <div class="banner">
      <banner></banner>
    </div>
    
</template>

<script setup>
import headerSite from '../components/home/headerSite.vue'
import banner from '../components/home/banner.vue'
</script>

<style>
*{
  direction: rtl;
  font-family: sans-serif;
  padding: 0;
  margin: 0; 
 box-sizing: border-box;
}
.banner {
  margin: 0 auto;
  margin-top: 50px;
}

</style>