<template>
    <section class="listBox">

        <div class="list_right_box">
            <latesNews :item_list="paginatedItems"></latesNews>
            <!-- news pagination -->

            <div class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.5C0 7.3873 7.3873 0 16.5 0H26C29.866 0 33 3.13401 33 7V26C33 29.866 29.866 33 26 33H16.5C7.3873 33 0 25.6127 0 16.5Z" fill="#095195" fill-opacity="0.4"/>
<path d="M19.5 24L12.5 17L19.5 10" stroke="#003F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>

                <span v-for="page in totalPages" :key="page" >
                    <button @click="gotoPage(page)" class="numbersBtn" :class="{ 'current-page': page === currentPage }">{{ page }}</button>
                </span>
                
                <button @click="nextPage" :disabled="currentPage === totalPages" style="background-color: transparent;">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7C0 3.13401 3.13401 0 7 0H16.5C25.6127 0 33 7.3873 33 16.5C33 25.6127 25.6127 33 16.5 33H7C3.13401 33 0 29.866 0 26V7Z" fill="#095195" fill-opacity="0.4"/>
<path d="M12.5 10L19.5 17L12.5 24" stroke="#003F7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                </button>

            </div>

        </div>
        <button class="mostSeen_displaybtn" @click="mostSeenDisplay()">پربازدید ترین</button>
        <div class="list_left_box" :class="{'mostSeenDisplay': display}">
            <searchBox/>
            <mostSeen></mostSeen>
        </div>
    </section>
</template>

<script setup>
import {ref , computed, onMounted,onBeforeUnmount, watch, getCurrentInstance } from 'vue';
import {useStore} from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import latesNews from '../home/news_components/latesNews.vue';
import mostSeen from '../home/news_components/mostSeen.vue';
import searchBox from './searchBox.vue';
const store=useStore();

let test_items = computed(()=>{
    return store.getters.getNewsList
})

// pagination functions and variables
const currentPage = ref(1);
const itemsPerPage = 8;

// const pageQueryParam = this.$route.query.page;
// if (pageQueryParam && !isNaN(pageQueryParam)) {
//   const page = parseInt(pageQueryParam);
//   gotoPage(page);
// }

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return test_items.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(test_items.length / itemsPerPage));

const route = useRoute();
const router = useRouter();

watch(route,()=>{
    const page = parseInt(route.query.page) || 1;
    if(page >=1 && page <=totalPages.value){
        currentPage.value = page;
    }
})

const updateRoute = ()=> {
    router.replace({query : {page : currentPage.value } });
}

watch(currentPage, ()=>{
    updateRoute();
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
}}

const pageQueryParam = getCurrentInstance().appContext.config.globalProperties.$route.query.page;
if (pageQueryParam) {
  const page = parseInt(pageQueryParam);
  gotoPage(page);
}

// mostSeen display function
let display = ref(false);
function handlerDisplay(){
    if(window.innerWidth<=754){
        display.value = true;
    }else {
        display.value = false;
    }
}
handlerDisplay();
onMounted(()=>{
    window.addEventListener("resize",handlerDisplay);
    store.dispatch("getNewsListFromServer")
})
onBeforeUnmount(()=>{
    window.removeEventListener("resize",handlerDisplay);
})

function mostSeenDisplay(){
    if(display.value == 1) {
        display.value = 0;
    }else {
        display.value = 1;
    }
}
</script>
<style scoped>
.listBox {
    display: grid;
    grid-template-columns: 2.5fr minmax(291px,1fr);
    gap: 20px;
}
.list_left_box , .list_right_box{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.list_right_box {
    align-items: flex-end;
}
.mostSeenDisplay {
    display: none;
}
.mostSeen_displaybtn {
    display: none;
    height: 38px;
    line-height: 38px;
    color: #ffff;
    border: none;
    background-color: #095195;
    border-radius: 7px;
    text-align: center;
}
.pagination {
    direction: ltr;
    transform: translateX(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 50px 0;
}
.pagination button {
    cursor: pointer;
    border: none;
    /* background-color: transparent; */
}
.numbersBtn {
    transform: translateY(-3px);
    width: 33px;
    height: 33px;
    border-radius: 7px;
    background-color: #B0B0B033;
}
.current-page {
    background-color: lightblue;
}

/* responsive styles */

@media screen and (max-width:877px) {
    .listBox {
        gap: 10px;
    }
}
@media screen and (max-width:754px) {
    .mostSeen_displaybtn {
        display: block;
    }
    .listBox {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    .list_right_box {
        order: 2;
    }
    .list_left_box {
        order: 1;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
    }
} 
</style>