<template>

    <section class="contactUs_info_box">

        <h2 class="contactUs_info_title">راه های ارتباطی با حوزه علمیه خواهران گرگان</h2>
        <p class="contactUs_info_description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، 
        </p>

    </section>

</template>

<script setup>
</script>

<style scoped>
.contactUs_info_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
}
.contactUs_info_title {
    font-size: 24px;
    color: #095195;
}
.contactUs_info_description {
    line-height: 38px;
    font-size: 20px;
    text-align: right;
}

@media screen and (max-width:1094px) {
    .contactUs_info_description {
        text-align: justify;
    }
}
@media screen and (max-width:700px) {
    .contactUs_info_box {
        gap: 20px;
    }
}
</style>