<template>

<swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in specialNewsList" key="item">
      <article class="specialNews_card">
        <!-- special news image -->
        <figure class="specialNews_image">
          <img style="width: 100%;height: 100%;" src="../../assets/testy_images/sign3.png" alt="special_news_image">
        </figure>
        <!-- special news description -->

        <div class="specialNews_card_description">
          <p style="width: 100%;"> <b>{{ item.description }}</b> </p>
          <div class="specialNews_card_description_icons">
            <span>icon and text</span>
            <span>icon and text</span>
          </div>
        </div>

      </article>
      
    </swiper-slide>

  </swiper>

</template>

<script>

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      specialNewsList:[
        {description:"Lorem ipsum dolor sit amet"},
        {description:"Lorem ipsum dolor sit amet"},
        {description:"Lorem ipsum dolor sit amet"},
      ]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};

</script>

<style scoped>
.swiper {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
/* special news styles */
/* .specialNews_card {
  width: 100%;
} */
.specialNews_card , .specialNews_card_description , .specialNews_card_description_icons {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
/* specialNews image styles */
.specialNews_image{
  widows: 80px;
  height: 80px;
}

/* specialNews description styles */

.specialNews_card_description{
  flex-direction: column;
}
.specialNews_card_description_icons{
  justify-content: space-between;
}
</style>