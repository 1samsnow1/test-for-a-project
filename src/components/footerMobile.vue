<template>

    <section class="footer">

        <div class="footer_top_box">
            <footerMobileTop/>
        </div>

        <div class="footer_middle_box">
            <footerMobileMiddle/>
        </div>

        <div class="footer_bottom_box">
            <footerMobilebottom/>
        </div>
    </section>

</template>

<script setup>
import footerMobileTop from './footerMobileComponent/footerMobileTop.vue';
import footerMobileMiddle from './footerMobileComponent/footerMobileMiddle.vue';
import footerMobilebottom from './footerMobileComponent/footerMobilebottom.vue';
</script>

<style scoped>
.footer {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}
.footer_top_box {
    transform: translateY(-20px);
}

</style>