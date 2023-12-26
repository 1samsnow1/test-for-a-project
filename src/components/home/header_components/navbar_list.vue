<template>
    <nav class="header_navbar">
        <li class="header_list" v-for="listItem in navbarList" key="listItem">
            <router-link to="/education" class="link">{{ listItem.listName }}</router-link>
        </li>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
let navbarList= [
    {listName:"صفحه اصلی"},
    {listName:"حوزه مدیریت"},
    {listName:"معاونت پزوهش"},
    {listName:"معاونت آموزش"},
    {listName:"چند رسانه ای"},
    {listName:"تماس با ما"},
    {listName:"اخبار"},
    {listName:"درباره ما"},
]
</script>
<style scoped>

.header_list {
    list-style-type: none;
    font-size: 14px;
}

.header_navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-align: center;
}
.link{
    text-decoration: none;
    color: white;
}
@media screen and (max-width:1163px){
    .header_list {
        font-size: 12px;
    }
}
</style>