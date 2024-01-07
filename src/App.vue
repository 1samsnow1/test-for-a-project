<template>
  <body>

    <div class="normalHeader">
      <headerSite></headerSite>
    </div>

    <div class="headerMobile">
      <headerMobile></headerMobile>
    </div>

    <RouterView/>

    <div class="footerMobile">
      <footerMobile></footerMobile>
    </div>

    <div class="normalFooter">
      <footerSite></footerSite>
    </div>
    
  </body>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import headerSite from './components/home/headerSite.vue';
import headerMobile from './components/headerMobile.vue';
import footerSite from './components/home/footer.vue'
import footerMobile from './components/footerMobile.vue';

</script>

<style scoped>
body {
  width: 100%;
  background-color: rgb(231, 230, 230);
}
.footerMobile , .headerMobile {
  display: none;
}

@media screen and (max-width:976px) {
  .normalHeader , .normalFooter {
    display: none;
  }
  .footerMobile , .headerMobile {
    display: block;
  }
}
@media screen and (max-width:450px) {
  body {
    width: 460px;
  }
} 
</style>
