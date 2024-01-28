<template>

<section class="header_box">

   <div class="header_box_content">
     <!-- logo -->
        <div class="homeLogo">
            <homeLogo></homelogo>
        </div>

    <!-- list -->
        <div class="navbarList">
            <navbarList :headerItem="headerItems"></navbarList>
        </div>
   </div>

</section>

</template>

<script setup>
import { useStore } from 'vuex';
import { computed,onMounted } from 'vue';
import homeLogo from './header_components/home_logo.vue'
import navbarList from './header_components/navbar_list.vue'
const store = useStore();
let headerItems = computed(()=>{
    return store.getters.getHeaderList;
})
onMounted(()=>{
    store.dispatch("getHeaderListFromServer");
})
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
/* header styles */
.header_box {
    background-color: #095195;
    box-shadow: 0 4px 10px gray;
}
.header_box_content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    /* gap: 20px; */
    align-items: center;
}

.homeLogo {
    flex:1;
}
.navbarList {
    flex: 2;
}

@media screen and (max-width:1097px){
    .header_box_content {
        gap: 10px;
    }
    .navbarList {
        flex: 3;
    }
}
</style>