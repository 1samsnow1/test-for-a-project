<template>

<swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide v-for="item in eventlist" key="item">

        <!-- right side news -->
        <section class="event">
          <!-- right event -->
          <a href="">

            <article class="right_side_event">
              <!-- right event image -->
              <figure class="right_event_image">
                <img style="width: 100%; height: 100%;" src="../../assets/testy_images/sign4.png" alt="right_event_image">
              </figure>
              <!-- right event info -->
              <div class="event_info">
                <h3 style="color: gold;">{{item.title}}</h3>
                <p style="color: gold;">{{ item.description }}</p>
              </div>
            </article>

          </a>

          <!-- left event -->
          <div class="left_side_event_box">

            <!-- left top event  -->
            <a href="">

              <article class="left_side_event">
              <!-- left event image -->
              <figure class="left_event_image">
                <img style="width: 100%;height: 100%;" src="../../assets/testy_images/sign1.png" alt="left_top_image">
              </figure>
              <!-- left event info -->
              <div class="event_info">
                <h3 style="color: gold;">{{ item.title }}</h3>
                <p style="color: gold;">{{ item.description }}</p>
              </div>
            </article>

            </a>
            <!-- left bottom event -->

            <a href="">

              <article class="left_side_event">
              <!-- left event image -->
              <figure class="left_event_image">
                <img style="width: 100%;height: 100%;" src="../../assets/testy_images/sign2.png" alt="left_top_image">
              </figure>
              <!-- left event info -->
              <div class="event_info">
                <h3 style="color: gold;">{{item.title}}</h3>
                <p style="color: gold;">{{ item.description }}</p>
              </div>
            </article>

            </a>

          </div>

        </section>

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
      eventlist:[
        {title:"news1",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ducimus dignissimos iste!"},
        {title:"news2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ducimus dignissimos iste!"},
        {title:"news3",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ducimus dignissimos iste!"}
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

<style>
a{
  text-decoration: none;
}
/* swiper related styles  */
.swiper-scrollbar-drag , .swiper-pagination {
  display: none;
}

/* events slide styles  */
.event{
  width: 100%;
  height: 90%;
}
.events_link {
  text-decoration: none;
  color: rgba(100 , 95, 65, 0.6);
  background-color: gold;
  padding: 5px;
}
.event , .left_side_event_box , .event_info{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
/* left side event */
.left_side_event_box{
  flex-direction: column;
}
.left_event_image , .left_side_event {
  width: 500px;
  height: 220px;
}
.left_event_info {

}

/* right slide event styles */
.right_side_event {
  position: relative;
}
.right_event_image , .right_side_event {
  width: 100%;
  height: 460px;
}
.right_event_image , .left_event_image {
  position: absolute;
  z-index: -1;
}
.event_info{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  line-height: 20px;
  padding: 1rem;
}


/* .right_side_event {
  flex-direction: column;
} */

</style>