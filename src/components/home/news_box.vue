<template>

    <div class="news_box">

                    <div class="Last">
                        <div class="lastNewsMobile">
                            <h3 class="mobileLastNews_title">اخرین اخبار</h3>
                            <lastNewsMobile v-if="newsList" :item_list="newsList.slice(0,4)"></lastNewsMobile>
                        </div>

                        <div class="normalLastNews">
                            <latesNews v-if="newsList" :item_list="newsList.slice(0,4)"></latesNews>
                        </div>

                    </div>

                    <div class="announcement">
                        <div class="schoolNews">
                            <schoolNews :schoolAnnounce="schoolAnnouncement"></schoolNews>
                        </div>
                        <div class="mostSeen">
                            <mostSeen></mostSeen>
                        </div>
                    </div>
            
    </div>
</template>

<script setup>
import latesNews from './news_components/latesNews.vue';
import lastNewsMobile from './news_components/lastNewsMobile.vue';
import schoolNews from './news_components/schoolNews.vue';
import mostSeen from './news_components/mostSeen.vue';
import { useStore } from 'vuex';
import { computed,onMounted,onBeforeUnmount } from 'vue';
const store= useStore();
// last news object
let newsList = computed (()=>{
    return store.getters.getNewsList;
})
// school announcement object
let schoolAnnouncement = computed (()=>{
    return store.getters.getSchoolAnnouncement;
})
// requests
onMounted(()=>{
    store.dispatch("getNewsListFromServer",1);
    store.dispatch("getSchoolAnnounceFromServer");
})

</script>

<style scoped>
.news_box {
    width: 80%;
    margin: 0 auto;
    background-color: transparent;
    display: grid;    
    grid-template-columns:  2fr 340px;
    gap: 20px;
}
.announcement {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.Last {
    /* width: 370px; */
}
.schoolNews , .mostSeen {
    border-radius:10px;
}
.schoolNews{
    background-color: white;
}
.mostSeen {
    background-color: white;
}
.lastNewsMobile {
    display: none;
}
.mobileLastNews_title {
    color: #095195;
    font-size: 15px;
    transform: translateX(-20px);
}
@media screen and (max-width:1120px) {
    .news_box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .Last {
        grid-column: 1/3;
    }
    .announcement  {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .mostSeen {
        transform: translateY(4px);
    }
}
@media screen and (max-width:662px) {
    .news_box {
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .announcement {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .Last , .schoolNews , .mostSeen {
        grid-column: none;
        grid-row: none;
    }
}
@media screen and (max-width:554px) {
    .normalLastNews {
        display: none;
    }
    .lastNewsMobile {
        display: block;
    }
}
@media screen and (max-width:440px) {
    .Last {
        width: 100%;
    }
}
</style>