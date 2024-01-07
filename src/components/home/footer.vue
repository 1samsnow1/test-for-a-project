<template>

    <section class="footer">

        <div class="footer_right_box">
            <footerRightBox/>
        </div>

        <div class="footer_center_box">
            <footerCenterBox/>
        </div>

        <div class="footer_left_box">
            <footerLeftBox/>
        </div>
    </section>

</template>

<script setup>
import footerRightBox from './footer_component/footerRightBox.vue';
import footerCenterBox from './footer_component/footerCenterBox.vue';
import footerLeftBox from './footer_component/footerLeftBox.vue';
</script>

<style scoped>
.footer {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}
.footer_center_box {
    transform: translateY(-20px);
}

</style>