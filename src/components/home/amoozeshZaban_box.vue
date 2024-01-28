<template>

    <section class="amoozeshZaban_box">

        <article class="card_box" v-for="item in amoozeshList.amoozeshItem" key="i">
            <!-- card image -->
            <figure class="card_img">
                <img style="width: 100%;" :src="item.image_url" alt="card_image">
            </figure>
            <!-- card description -->
            <div class="card_desc">
                <!-- description date -->
                <div class="top_text">
                    <span>{{ item.created_at }}</span>
                </div>
                <!-- main content -->
                <h3 style="color: #095195; font-size: 14px;">{{ item.title }}</h3>

                <p class="card_center_text">{{ item.summary }}</p>

                <!-- foot description -->

                <div class="footDesc_box">

                    <span class="bottom_right_text">
                        <span style="transform: translateY(2px);">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1079 7.03575C10.1079 8.19975 9.16391 9.14308 7.99991 9.14308C6.83591 9.14308 5.89258 8.19975 5.89258 7.03575C5.89258 5.87108 6.83591 4.92773 7.99991 4.92773C9.16391 4.92773 10.1079 5.87108 10.1079 7.03575Z" stroke="#B5B5B5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99883 11.903C10.5375 11.903 12.8595 10.0777 14.1668 7.035C12.8595 3.99232 10.5375 2.16699 7.99883 2.16699H8.0015C5.46283 2.16699 3.14083 3.99232 1.8335 7.035C3.14083 10.0777 5.46283 11.903 8.0015 11.903H7.99883Z" stroke="#B5B5B5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </span>
                        <div class="bazdid_style">
                            <span>{{ item.views_count }}</span>
                            <span>بازدید</span>
                        </div>
                    </span>
                    
                    <router-link class="amoozeshZaban_link" :to="`/education/${item.id}`">
                        <span>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.771 5.11426H8.021" stroke="#095195" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.29134 7.62443L1.77051 5.11442L4.29134 2.604" stroke="#095195" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </span>
                        <span>
                            ادامه مطلب
                        </span>
                    </router-link>

                </div>

            </div>

        </article>

    </section>
</template>

<script setup>
import { RouterLink} from 'vue-router';
let amoozeshList = defineProps(["amoozeshItem"])
</script>

<style scoped>
.amoozeshZaban_box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
}
.card_box{
    width: 400px;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: start;
    /* line-height: 25px; */
}
/* card styles */
.card_desc {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.card_img {
    width: 100%;
}
.top_text {
    color: #252525;
    font-size: 11px;
}
.card_center_text {
    color: #353535;
    font-size: 11px;
    line-height: 28px;
    text-align: justify;
}

/* foot description styles */
.footDesc_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom_right_text {
    display: flex;
    align-items: center;
    gap: 5px;
}
.bazdid_style {
    color: #6F6E6E;
    font-size: 10px;
}

.amoozeshZaban_link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #095195;
    font-size: 10px;
}
</style>