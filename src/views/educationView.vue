<template>

    <section class="education_content">
        <!-- page adress -->
        <pageAddress/>
        <!-- educationBanner -->
        <educationBanner/>
        <!-- education info -->
        <div class="tt2">
            <educationInfo/>
        </div>
    </section>
</template>

<script setup>
import pageAddress from '../components/education/address.vue';
import educationBanner from '../components/education/educationBanner.vue';
import educationInfo from '../components/education/educationInfo.vue'
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