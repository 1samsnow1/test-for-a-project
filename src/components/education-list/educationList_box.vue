<template>
    <section class="listBox">

        <div class="list_right_box">
            <latesNews :item_list="test_items"></latesNews>
            <!-- news pagination -->

            <div class="pagination">
                <vue-awesome-paginate
                    :total-items="totalPages"
                    :items-per-page="itemsPerPage"
                    :max-pages-shown="5"
                    v-model="currentPage"
                    :on-click="gotoPage"
                    >
                    <template #prev-button>
                        <span>
                        <img class="paginationPrevButton" src="@/assets/testy_images/arrowPrevButton.png" height="25" />
                        </span>
                    </template>
                    <template #next-button>
                        <span>
                        <img class="paginationNextButton" src="@/assets/testy_images/arrowRightButton.png" height="25" />
                        </span>
                    </template>
                </vue-awesome-paginate>

            </div>

        </div>
        <button class="mostSeen_displaybtn" @click="mostSeenDisplay()">پربازدید ترین</button>
        <div class="list_left_box" :class="{'mostSeenDisplay': display}">
            <searchBox/>
            <categories :categoryItem="categoriesList"/>
            <mostSeen></mostSeen>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, onBeforeUnmount, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import latesNews from '../home/news_components/latesNews.vue';
import categories from '../education-list/categoryBox.vue'
import mostSeen from '../home/news_components/mostSeen.vue';
import searchBox from './searchBox.vue';

const store = useStore();
const router = useRouter();
const route = useRoute();
let test_items = computed(() => {
  return store.getters.getNewsList;
});
let categoriesList = computed(()=>{
  return store.getters.getCategory
})

// pagination functions and variables
onBeforeMount(() => {
  const pageQueryParam = route.query.page;
  console.log(pageQueryParam);
  if (pageQueryParam) {
    const parsedPage = parseInt(pageQueryParam);
    if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= totalPages.value) {
      currentPage.value = parsedPage;
      // Update the store dispatch request based on the route parameter
      store.dispatch('getNewsListFromServer', parsedPage);
    }
  }
});

const currentPage = ref(1);
const itemsPerPage = 5;
const totalItems = ref(30);
const totalPages = computed(() => {
  return Math.ceil(totalItems.value / itemsPerPage);
});

const gotoPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    router.push({ query: { page } });
  }
};

watch(
  () => router.currentRoute.value.query,
  (newQuery, oldQuery) => {
    const parsedNewPage = parseInt(newQuery.page);
    const parsedOldPage = parseInt(oldQuery.page);
    if (!isNaN(parsedNewPage) && parsedNewPage >= 1) {
      currentPage.value = parsedNewPage;
      if (oldQuery && oldQuery.page && parsedNewPage !== parsedOldPage) {
        store.dispatch('getNewsListFromServer', { page: parsedNewPage, category_id: newQuery.category_id });
      }
    }
  }
);


// mostSeen display function
let display = ref(false);
function handlerDisplay() {
  if (window.innerWidth <= 754) {
    display.value = true;
  } else {
    display.value = false;
  }
}
handlerDisplay();
onMounted(() => {
  window.addEventListener('resize', handlerDisplay);
  store.dispatch('getNewsListFromServer');
  store.dispatch('getCategoryFromServer')
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handlerDisplay);
});

function mostSeenDisplay() {
  if (display.value == 1) {
    display.value = 0;
  } else {
    display.value = 1;
  }
}
</script>


<style>
  .pagination-container {
    direction: ltr;
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 33px;
    width: 33px;
    border-radius: 7px;
    cursor: pointer;
    border: none;
    background-color: #B0B0B033;
    color: #095195;
  }
  .back-button , .next-button {
    background-color: transparent;
    border: none;
  }
  .paginationNextButton , .paginationPrevButton {
    width: 33px;
    height: 33px;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: #ffffff;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>

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
    transform: translateX(20px);
    /* display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; */
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