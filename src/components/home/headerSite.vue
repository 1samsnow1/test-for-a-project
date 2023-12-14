<template>

<section class="header_box">

    <!-- logo -->
    <homeLogo></homelogo>

    <!-- list -->
    <navbarList></navbarList>

</section>

</template>

<script setup>
import homeLogo from './header_components/home_logo.vue'
import navbarList from './header_components/navbar_list.vue'

</script>

<style>
*{
    direction: rtl;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* header styles */
.header_box , .header_navbar{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
}
.header_box {
    background-color: rgb(21, 21, 244);
    box-shadow: 0 4px 10px gray;
}


</style>