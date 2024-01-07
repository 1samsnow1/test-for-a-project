<template>

  <section class="homeView">
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

      <div class="mobilePeyvand">
        <peyvandMobile></peyvandMobile>
      </div>

      <div class="defualtPeyvand">
        <peyvands></peyvands>
      </div>

    </div>
    <!-- amoozesh title -->
    <div class="amoozesh_title contentGap">
        <amoozeshTitle/>
    </div>
    <!-- amoozesh zaban cards -->
    <div class="amoozeshZaban contentGap">
        <div class="mobile_amoozesh_zaban">
          <amoozeshZabanMobile ></amoozeshZabanMobile>
        </div>
       
        <div class="defualt_amoozesh_zaban">
          <amoozeshZaban></amoozeshZaban>
        </div>
    </div>

  </section>
    
</template>

<script setup>
import banner from '../components/home/banner.vue'
import specialNews from '../components/home/specialnews.vue'
import news from '../components/home/news_box.vue'
import peyvands from '../components/home/peyvands.vue'
import peyvandMobile from '../components/home/peyvandMobile.vue'
import amoozeshTitle from '../components/home/amoozeshTitle.vue'
import amoozeshZaban from '../components/home/amoozeshZaban_box.vue'
import amoozeshZabanMobile from '../components/home/amoozeshZabanMobile.vue'

let deviceScreen = screen.width;
</script>

<style>
@import '../assets/global.css';
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

.mobile_amoozesh_zaban{
  display: none;
}

.mobilePeyvand {
  display: none;
}
.bannerImage {
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.bannerImage_img {
  width: 100%;
}
.text {
  width: 100%;
  text-align: justify;
  position: absolute;
  top: 0;
}
@media screen and (max-width:1226px) {
  .mobilePeyvand {
    display: block;
  }
  .defualtPeyvand {
    display: none;
  }
}
@media screen and (max-width:750px) {
  .mobile_amoozesh_zaban {
    display: block;
  }
  .defualt_amoozesh_zaban {
    display: none;
  }
}
</style>