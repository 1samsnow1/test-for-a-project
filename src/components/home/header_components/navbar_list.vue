<template>
    <nav class="header_navbar">
        <li class="header_list" v-for="listItem in navbarList" key="listItem">
            <router-link :to="listItem.address" class="link">{{ listItem.listName }}</router-link>
        </li>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
let navbarList= [
    {listName:"صفحه اصلی" ,address:'/education'},
    {listName:"حوزه مدیریت" ,address:'/education'},
    {listName:"معاونت پزوهش" ,address:'/education'},
    {listName:"معاونت آموزش" ,address:'/education'},
    {listName:"چند رسانه ای" ,address:'/education'},
    {listName:"تماس با ما",address:'/contactUs'},
    {listName:"اخبار" ,address:'/education'},
    {listName:"درباره ما" ,address:'/education'},
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
    transition: all ease 0.3s;
}
.link:hover {
    color: #519ce3 ;
    font-size: 16px;
}

@media screen and (max-width:1163px){
    .header_list {
        font-size: 12px;
    }
}
</style>