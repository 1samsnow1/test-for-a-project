<template>

    <div class="news_box">

                    <div class="Last">
                        <div class="lastNewsMobile">
                            <h3 class="mobileLastNews_title">اخرین اخبار</h3>
                            <lastNewsMobile></lastNewsMobile>
                        </div>

                        <div class="normalLastNews">
                            <latesNews :item_list="newsItem"></latesNews>
                        </div>

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

let newsItem = [
    {title:'hello'},
    {title:'hello'},
    {title:'hello'},
    {title:'hello'},
]

</script>

<style scoped>
.news_box {
    width: 80%;
    margin: 0 auto;
    background-color: transparent;
    display: grid;    
    grid-template-columns:  2fr 340px;
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
        grid-template-rows: auto auto;
        gap: 20px;
    }
    .Last {
        grid-column: 1/3;
        grid-row: 1/2;
    }
    .schoolNews  {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    .mostSeen {
        grid-column: 2/3;
        grid-row: 2/3;
        transform: translateY(4px);
    }
}
@media screen and (max-width:662px) {
    .news_box {
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .Last , .schoolNews , .mostSeen {
        grid-column: none;
        grid-row: none;
    }
    .Last {
        order: 1;
    }
    .schoolNews {
        order: 2;
    }
    .mostSeen{
        order: 3;
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