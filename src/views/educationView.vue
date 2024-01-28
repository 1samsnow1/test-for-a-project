<template>

    <section class="education_content">
        <!-- page adress -->
        <pageAddress/>
        <!-- educationBanner -->
        <educationBanner :banner-item="newsDetail"/>
        <!-- education info -->
        <div class="tt2">
            <educationInfo/>
        </div>
    </section>
</template>

<script setup>
import pageAddress from '../components/education/address.vue';
import educationBanner from '../components/education/educationBanner.vue';
import educationInfo from '../components/education/educationInfo.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
let newsDetail = computed(()=>{
    return store.getters.getNewsDetail
})
onMounted(()=>{
    let dynamicId = route.params.id;
    console.log(dynamicId)
    store.dispatch("getNewsDetailFromServer", dynamicId)
})

</script>

<style>
.education_content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 50px auto;
}

.tt2 {
    margin-bottom: 100px;
}

@media screen and (max-width:1190px) {
    .education_content {
        width: 90%;
    }
}
</style>