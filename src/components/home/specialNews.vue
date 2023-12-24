<template>

<section class="specialNews_box">
  <div class="title_and_navigationButtons_box">
    <h2 style="color:#095195; font-size: 18px;padding: 1rem;">اخبار ویژه</h2>

    <div class="navigation_buttons">

      <button @click="goPrev" class="swiperNavigationButton">
        <span>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8286 5.68286L19.6457 11.4999L13.8286 17.317" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.354 11.5H19.4828" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
      </button>

      <button @click="goNext" class="swiperNavigationButton">
        <span>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.17139 17.3171L3.3543 11.5001L9.17139 5.68297" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.646 11.5H3.51725" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
      </button>

    </div>
  </div>

  <swiper
      :slides-per-view="3"
      :space-between="50"
      :navigation="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      ref="mySwiper"
  >
    <swiper-slide v-for="item in 3" key="item">
      <article class="specialNews_card">
        <!-- special news image -->
        <figure class="specialNews_image">
          <img style="width: 100%;height: 100%;" src="@/assets/testy_images/image_19.png" alt="special_news_image">
        </figure>
        <!-- special news description -->

        <div class="specialNews_card_description">
          <p class="specialNews_description"> گزارش تصویری بازدید معاون‌ آموزش حوزه‌های علمیه از نمایشگاه دستاوردهای مجتمع آموزشی پژوهشی تبلیغگزارش  
          </p>
          <div class="specialNews_card_description_icons">

            <div class="specialNews_footDesc">
              <span>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89545 4.1752C4.64457 4.1752 4.43652 3.96715 4.43652 3.71627V1.88056C4.43652 1.62968 4.64457 1.42163 4.89545 1.42163C5.14633 1.42163 5.35438 1.62968 5.35438 1.88056V3.71627C5.35438 3.96715 5.14633 4.1752 4.89545 4.1752Z" fill="#757575"/>
<path d="M9.79047 4.1752C9.53959 4.1752 9.33154 3.96715 9.33154 3.71627V1.88056C9.33154 1.62968 9.53959 1.42163 9.79047 1.42163C10.0414 1.42163 10.2494 1.62968 10.2494 1.88056V3.71627C10.2494 3.96715 10.0414 4.1752 9.79047 4.1752Z" fill="#757575"/>
<path d="M5.20126 9.52998C5.12171 9.52998 5.04216 9.51164 4.96874 9.48104C4.88919 9.45045 4.828 9.4076 4.76681 9.35253C4.65667 9.23627 4.58936 9.08329 4.58936 8.91808C4.58936 8.83853 4.60771 8.75898 4.63831 8.68555C4.6689 8.61212 4.71174 8.54482 4.76681 8.48363C4.828 8.42856 4.88919 8.38571 4.96874 8.35512C5.18902 8.26333 5.46438 8.3123 5.63571 8.48363C5.74585 8.5999 5.81316 8.75899 5.81316 8.91808C5.81316 8.95479 5.80705 8.99764 5.80093 9.04047C5.79481 9.07718 5.78257 9.11389 5.76421 9.15061C5.75197 9.18732 5.73362 9.22403 5.70914 9.26075C5.69079 9.29134 5.66019 9.32193 5.63571 9.35253C5.51945 9.46267 5.36036 9.52998 5.20126 9.52998Z" fill="#757575"/>
<path d="M7.34286 9.53026C7.26331 9.53026 7.18377 9.51191 7.11034 9.48132C7.03079 9.45072 6.9696 9.40788 6.90841 9.35281C6.79827 9.23654 6.73096 9.08357 6.73096 8.91836C6.73096 8.83881 6.74932 8.75926 6.77991 8.68583C6.81051 8.6124 6.85334 8.5451 6.90841 8.48391C6.9696 8.42884 7.03079 8.38599 7.11034 8.3554C7.33062 8.25749 7.60598 8.31258 7.77731 8.48391C7.88746 8.60017 7.95477 8.75926 7.95477 8.91836C7.95477 8.95507 7.94865 8.99791 7.94253 9.04075C7.93641 9.07746 7.92417 9.11417 7.90581 9.15089C7.89358 9.1876 7.87522 9.22431 7.85074 9.26102C7.83239 9.29162 7.80179 9.32221 7.77731 9.35281C7.66105 9.46295 7.50196 9.53026 7.34286 9.53026Z" fill="#757575"/>
<path d="M9.48446 9.53026C9.40492 9.53026 9.32537 9.51191 9.25194 9.48132C9.17239 9.45072 9.1112 9.40788 9.05001 9.35281C9.02554 9.32221 9.00106 9.29162 8.97658 9.26102C8.95211 9.22431 8.93375 9.1876 8.92151 9.15089C8.90315 9.11417 8.89092 9.07746 8.8848 9.04075C8.87868 8.99791 8.87256 8.95507 8.87256 8.91836C8.87256 8.75926 8.93987 8.60017 9.05001 8.48391C9.1112 8.42884 9.17239 8.38599 9.25194 8.3554C9.47834 8.25749 9.74758 8.31258 9.91892 8.48391C10.0291 8.60017 10.0964 8.75926 10.0964 8.91836C10.0964 8.95507 10.0902 8.99791 10.0841 9.04075C10.078 9.07746 10.0658 9.11417 10.0474 9.15089C10.0352 9.1876 10.0168 9.22431 9.99235 9.26102C9.97399 9.29162 9.94339 9.32221 9.91892 9.35281C9.80265 9.46295 9.64356 9.53026 9.48446 9.53026Z" fill="#757575"/>
<path d="M5.20126 11.6715C5.12171 11.6715 5.04216 11.6531 4.96874 11.6225C4.89531 11.5919 4.828 11.5491 4.76681 11.494C4.65667 11.3778 4.58936 11.2187 4.58936 11.0596C4.58936 10.98 4.60771 10.9005 4.63831 10.827C4.6689 10.7475 4.71174 10.6802 4.76681 10.6251C4.99321 10.3987 5.40931 10.3987 5.63571 10.6251C5.74585 10.7414 5.81316 10.9005 5.81316 11.0596C5.81316 11.2187 5.74585 11.3778 5.63571 11.494C5.51945 11.6042 5.36036 11.6715 5.20126 11.6715Z" fill="#757575"/>
<path d="M7.34286 11.6715C7.18377 11.6715 7.02467 11.6042 6.90841 11.494C6.79827 11.3778 6.73096 11.2187 6.73096 11.0596C6.73096 10.98 6.74932 10.9005 6.77991 10.827C6.81051 10.7475 6.85334 10.6802 6.90841 10.6251C7.13481 10.3987 7.55091 10.3987 7.77731 10.6251C7.83239 10.6802 7.87522 10.7475 7.90581 10.827C7.93641 10.9005 7.95477 10.98 7.95477 11.0596C7.95477 11.2187 7.88746 11.3778 7.77731 11.494C7.66105 11.6042 7.50196 11.6715 7.34286 11.6715Z" fill="#757575"/>
<path d="M9.48446 11.6721C9.32537 11.6721 9.16627 11.6048 9.05001 11.4947C8.99494 11.4396 8.95211 11.3723 8.92151 11.2927C8.89092 11.2193 8.87256 11.1398 8.87256 11.0602C8.87256 10.9807 8.89092 10.9011 8.92151 10.8277C8.95211 10.7481 8.99494 10.6808 9.05001 10.6258C9.19075 10.485 9.40491 10.4177 9.60072 10.4605C9.64356 10.4666 9.68027 10.4789 9.71699 10.4972C9.7537 10.5095 9.79042 10.5279 9.82713 10.5523C9.85773 10.5707 9.88832 10.6013 9.91892 10.6258C10.0291 10.742 10.0964 10.9011 10.0964 11.0602C10.0964 11.2193 10.0291 11.3784 9.91892 11.4947C9.80265 11.6048 9.64356 11.6721 9.48446 11.6721Z" fill="#757575"/>
<path d="M12.5439 6.67787H2.14155C1.89066 6.67787 1.68262 6.46982 1.68262 6.21894C1.68262 5.96806 1.89066 5.76001 2.14155 5.76001H12.5439C12.7948 5.76001 13.0029 5.96806 13.0029 6.21894C13.0029 6.46982 12.7948 6.67787 12.5439 6.67787Z" fill="#757575"/>
<path d="M9.79064 14.5777H4.89541C2.66195 14.5777 1.37695 13.2927 1.37695 11.0592V5.85805C1.37695 3.6246 2.66195 2.3396 4.89541 2.3396H9.79064C12.0241 2.3396 13.3091 3.6246 13.3091 5.85805V11.0592C13.3091 13.2927 12.0241 14.5777 9.79064 14.5777ZM4.89541 3.25746C3.14536 3.25746 2.29481 4.108 2.29481 5.85805V11.0592C2.29481 12.8093 3.14536 13.6598 4.89541 13.6598H9.79064C11.5407 13.6598 12.3912 12.8093 12.3912 11.0592V5.85805C12.3912 4.108 11.5407 3.25746 9.79064 3.25746H4.89541Z" fill="#757575"/>
</svg>

              </span>

              <span style="color: #757575;"> 12شهریور1401</span>
            </div>

            <router-link to="/" class="specialNews_footDesc">
              <span style="color: #12122F;">
                اطلاعات بیشتر
              </span>

              <span>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.17139 17.3171L3.3543 11.5001L9.17139 5.68297" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.646 11.5H3.51725" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </span>
            </router-link>
          </div>
        </div>

      </article>
    </swiper-slide>

  </swiper>

</section>

</template>

<script>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(3);
    let swiperInstance;

    const onSwiper = (swiper) => {
      swiperInstance = swiper;
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    const handleResize = () => {
      slidesPerView.value = calculateSlidesPerView();
      onSwiperUpdate();
    };

    const calculateSlidesPerView = () => {
      if (window.innerWidth < 600) {
        return 1;
      } else if (window.innerWidth < 900) {
        return 2;
      } else {
        return 3;
      }
    };

    const onSwiperUpdate = () => {
      if (swiperInstance) {
        swiperInstance.params.slidesPerView = slidesPerView.value;
        swiperInstance.update();
      }
    };

    const goPrev = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    };

    const goNext = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      slidesPerView,
      onSwiper,
      onSlideChange,
      goPrev,
      goNext,
    };
  },
};

</script>

<style>
.specialNews_box {
  background-color: white;
  box-shadow: 0px -2px gray;
}
.specialNews_box h2 {
  padding: 5px;
}
/* swiper button styles */
.title_and_navigationButtons_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation_buttons {
  transform: translateX(20px);
  display: flex;
  align-items: center;
  gap: 20px;
}
.swiperNavigationButton {
  border: none;
  background-color: transparent;
}

/* swiper styles */
.swiper {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1rem;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
/* special news styles */
/* .specialNews_card {
  width: 100%;
} */
.specialNews_card , .specialNews_card_description_icons {
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.specialNews_description {
  text-align: justify;
  line-height: 20px;
  font-size: 11px;
}
.specialNews_card_description_icons{
  justify-content: space-between;
}
.specialNews_image {
  border-radius: 10px;
  overflow: hidden;
}
.specialNews_footDesc {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 8.5px;
  text-decoration: none;
}
.specialNews_footDesc svg{
  widows: 18px;
  height: 18px;
}
</style>