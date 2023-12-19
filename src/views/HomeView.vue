<template>

  <main>
    <!-- banner -->
    <div class="banner">
      <banner></banner>
    </div>

    <!-- special event -->
    <div class="specialNews">
      <specialNews></specialNews>
    </div>

    <!-- news  -->
    <div class="news">
      <news></news>
    </div>
  </main>
    
</template>

<script setup>
import headerSite from '../components/home/headerSite.vue'
import banner from '../components/home/banner.vue'
import specialNews from '../components/home/specialnews.vue'
import news from '../components/home/news_box.vue'
</script>

<style >
main {
  width: 85%;
  margin: 0 auto;
}

*{
  direction: rtl;
  font-family: sans-serif;
  padding: 0;
  margin: 0; 
 box-sizing: border-box;
}
.banner , .specialNews , .news{
  margin: 0 auto;
  margin-top: 50px;
}


</style>