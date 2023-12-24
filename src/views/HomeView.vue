<template>

  <main>
    <!-- banner -->
    <div class="banner contentGap">
      <banner></banner>
    </div>

    <!-- special event -->
    <div class="specialNews contentGap">
      <specialNews></specialNews>
    </div>

    <!-- news  -->
    <div class="news contentGap">
      <news></news>
    </div>
    <!-- peyvand ha -->
    <div class="peyvands contentGap">
      <!-- <peyvandMobile v-if="deviceScreen<1120"></peyvandMobile> -->
      <peyvands></peyvands>
    </div>
    <!-- amoozesh title -->
    <div class="amoozesh_title contentGap">
        <amoozeshTitle/>
    </div>
    <!-- amoozesh zaban cards -->
    <div class="amoozeshZaban contentGap">
        <amoozeshZabanMobile v-if="deviceScreen<1120"></amoozeshZabanMobile>
        <amoozeshZaban v-else></amoozeshZaban>
    </div>

  </main>
    
</template>

<script setup>
import headerSite from '../components/home/headerSite.vue'
import banner from '../components/home/banner.vue'
import specialNews from '../components/home/specialnews.vue'
import news from '../components/home/news_box.vue'
import peyvands from '../components/home/peyvands.vue'
// import peyvandMobile from '../components/home/peyvandMobile.vue'
import amoozeshTitle from '../components/home/amoozeshTitle.vue'
import amoozeshZaban from '../components/home/amoozeshZaban_box.vue'
// import amoozeshZabanMobile from '../components/home/amoozeshZabanMobile.vue'

let deviceScreen = screen.width;
</script>

<style>
@import '../assets/global.css';
main {
  width: 85%;
  margin: 0 auto;
}

*{
  direction: rtl;
  font-family: yekan-bakh-medium;
  padding: 0;
  margin: 0; 
 box-sizing: border-box;
}
.contentGap{
  margin: 0 auto;
  margin-top: 100px;
}
.amoozesh_title {
  transform: translateY(20px);
}
.amoozeshZaban {
  margin-bottom: 100px;
}

</style>