<template>
    <section class="categoryStyle">
      <button
        v-if="categoryItem"
        v-for="item in categoryItem"
        :key="item.id"
        class="categoryItem"
        @click="navigateToCategory(item.id)"
      >
        {{ item.name }}
      </button>
    </section>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['categoryItem']);
const router = useRouter();

const navigateToCategory = (categoryId) => {
  const currentPage = router.currentRoute.value.params.page || 1;

  router.push({
    path: '/news',
    query: { category_id: categoryId, page: currentPage },
  });
};
</script>

  

<style scoped>
.categoryStyle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
}
.categoryItem {
    border: none;
    cursor: pointer;
    background-color: orange;
    padding: 5px;
    font-size: 12px;
    border-radius: 10px;
}
</style>