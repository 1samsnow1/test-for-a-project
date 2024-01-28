<template>
    <nav class="header_navbar">
        <li class="header_list" v-for="Item in navbarList.headerItem" key="listItem">
            <router-link :to="Item.link" class="link">{{ Item.title }}</router-link>
        </li>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
let navbarList = defineProps(['headerItem']);
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