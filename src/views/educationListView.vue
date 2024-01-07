<template>
    <div class="educationList_box">
        <E_listAddress></E_listAddress>

        <listBox></listBox>
    </div>
</template>

<script setup>
import E_listAddress from '../components/education-list/address.vue';
import listBox from '../components/education-list/educationList_box.vue';

</script>

<style scoped>
.educationList_box {
    width: 80%;
    margin: 40px auto;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 50px;

}   

/* responsive styles */
@media screen and (max-width:1120px) {
    .educationList_box {
        width: 90%;
    }
}

@media screen and (max-width:875px){
    .educationList_box {
        width: 95%;
    }
}
@media screen and (max-width:790px) {
    .educationList_box {
        width: 97%;
    }
}
@media screen and (max-width:754px) {
    .educationList_box {
        width: 85%;
    }
}
</style>