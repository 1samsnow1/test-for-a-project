<template>

    <section class="educationInfo_box">

        <div class="educationText_box">
            <educationInfoText/>
        </div>

        <div class="mostSeen_box"> 
            <mostSeen_box/>
        </div>

        <div class="educationCommentForm">
            <educationForm/>
        </div>

        <div class="comment">
            <comment v-for="comment in comments" :key="comment.id" v-bind="comment"/>
        </div>
    </section>

</template>

<script>
import commentsData from '../../data/comments.js';
import educationInfoText from './educationInfo_components/educationInfo_text.vue';
import mostSeen_box from './educationInfo_components/educationMostSeen.vue';
import educationForm from './educationInfo_components/educationCommentForm.vue';
import comment from './educationInfo_components/comment.vue';
export default {
    components:{
        educationInfoText,mostSeen_box,educationForm,comment,
    },
    computed: {
        comments() {
        return [...commentsData];
        },
    },
    setup(){

    }
}
</script>

<style scoped>
.educationInfo_box {
    display: grid;
    grid-template-columns: 2.5fr minmax(307px,1fr);
    gap: 10px;
    row-gap: 35px;
}
.educationText_box {
}
.mostSeen_box {
    justify-content: space-between;
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