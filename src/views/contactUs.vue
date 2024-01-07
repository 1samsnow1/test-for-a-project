<template>
    <section class="contactUsBox">

        <contactUsAddress/>

        <contactUsInfo/>

        <contactUsLocationAddress/>

    </section>
</template>

<script setup>
import contactUsAddress from '../components/contactUsComponents/contactUsAddress.vue';
import contactUsInfo from '../components/contactUsComponents/contactUsInfo.vue';
import contactUsLocationAddress from '../components/contactUsComponents/contactUsLocationAddress.vue';

</script>

<style scoped>
.contactUsBox {
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-bottom: 10rem;
}
@media screen and (max-width:700px) {
    .contactUsBox {
        gap: 40px;
    }
}
</style>