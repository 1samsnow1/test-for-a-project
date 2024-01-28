<template>

    <section class="educationInfo_box">

        <div class="educationText_box">
            <educationInfoText :itemText="newsDetail"/>
        </div>

        <div class="mostSeen_box"> 
            <mostSeen_box/>
        </div>

        <!-- <div class="educationCommentForm">
            <educationForm/>
        </div> -->

        <!-- <div class="comment">
            <comment v-for="comment in comments" :key="comment.id" v-bind="comment"/>
        </div> -->
    </section>

</template>

<script setup>
// import commentsData from '../../data/comments.js';
// import educationForm from './educationInfo_components/educationCommentForm.vue';
// import comment from './educationInfo_components/comment.vue';
import educationInfoText from './educationInfo_components/educationInfo_text.vue';
import mostSeen_box from './educationInfo_components/educationMostSeen.vue';
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


// const comments = ref([...commentsData]);

</script>

<style scoped>
.educationInfo_box {
    display: grid;
    grid-template-columns: 2.5fr minmax(307px,1fr);
    gap: 10px;
}
.educationText_box {
}
.mostSeen_box {
    justify-content: space-between;
    max-height: 380px;
}
.educationCommentForm {
    grid-column: 1/2;
}
.comment {
    background-color: #ffff;
    padding: 2rem;
    grid-column: 1/2;
    border-radius: 10px;
}
@media screen and (max-width:1080px) {
    .comment {
        grid-column: 1/3;
    }
}

@media screen and (max-width:721px) {
    .educationInfo_box {
        grid-template-columns: 1fr;
    }
    .mostSeen_box {
        display: none;
    }
}
</style>