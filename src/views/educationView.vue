<template>

    <section class="education_content">
        <!-- page adress -->
        <pageAddress/>
        <!-- educationBanner -->
        <educationBanner/>
        <!-- education info -->
        <educationInfo/>
    </section>
</template>

<script setup>
import pageAddress from '../components/education/address.vue';
import educationBanner from '../components/education/educationBanner.vue';
import educationInfo from '../components/education/educationInfo.vue'
</script>

<style>
.education_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    margin: 50px auto;
}

</style>