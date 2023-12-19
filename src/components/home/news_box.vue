<template>
    <div class="news_box">

            <latesNews></latesNews>

    </div>
</template>

<script setup>
import latesNews from './news_components/latesNews.vue'

</script>

<style scoped>
.news_box {
    background-color: transparent;
    display: grid;    
    grid-template-columns:  2fr minmax(200px, 1fr);
    grid-auto-rows: 200px;
    gap: 20px;
}

</style>