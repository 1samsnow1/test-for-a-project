<template>

    <div class="news_box">

                    <div class="Last">
                        <lastNewsMobile v-if="deviceScreen<1120"></lastNewsMobile>
                        <latesNews v-else></latesNews>
                    </div>

                    <div class="schoolNews">
                        <schoolNews></schoolNews>
                    </div>
                    <div class="mostSeen">
                        <mostSeen></mostSeen>
                    </div>
            
    </div>
</template>

<script setup>
import latesNews from './news_components/latesNews.vue';
import lastNewsMobile from './news_components/lastNewsMobile.vue';
import schoolNews from './news_components/schoolNews.vue';
import mostSeen from './news_components/mostSeen.vue';

let deviceScreen = screen.width;
</script>

<style scoped>
.news_box {
    background-color: transparent;
    display: grid;    
    grid-template-columns:  2fr minmax(200px, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 20px;
}
.Last {
    /* width: 370px; */
    grid-row: 1/3;
}
.schoolNews , .mostSeen {
    border-radius:10px;
}
.schoolNews{
    background-color: white;
    grid-row: 1/2;
}
.mostSeen {
    background-color: white;
    grid-row: 2/3;
}

@media screen and (max-width:1120px) {
    .news_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .Last {
        grid-row: none;
        width: 370px;
    }
    .schoolNews , .mostSeen {
        grid-row: none;
    }
}
@media screen and (max-width:440px) {
    .Last {
        width: 100%;
    }
}
</style>