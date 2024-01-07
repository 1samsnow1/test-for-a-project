<template>
    <div class="pagination">
      <button @click="goToPage(page)" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        {{ page }}
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['totalPages', 'currentPage']);
  
  const currentPage = ref(1);
  const totalPages = ref(1);
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      emit('pageChanged', page);
    }
  };
  
  onMounted(() => {
    totalPages.value = props.totalPages;
  });
  
  watch(() => props.currentPage, (newVal) => {
    currentPage.value = newVal;
  });
  
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .pagination button {
    cursor: pointer;
    margin: 0 5px;
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    color: #333;
  }
  
  .pagination button.active {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  