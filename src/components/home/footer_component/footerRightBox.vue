<template>
    <article class="footerRight_box">

        <div class="footerLinks_order">

            <h3>لینک های مفید</h3>

            <div class="blueLines">
                <div class="line1"></div>
                <div class="line2"></div>
            </div>

            <router-link class="linkColor" to="/">صفحه اصلی</router-link>
            <router-link class="linkColor" to="/">صفحه اصلی</router-link>
            <router-link class="linkColor" to="/">صفحه اصلی</router-link>
            <router-link class="linkColor" to="/">صفحه اصلی</router-link>
            <router-link class="linkColor" to="/">صفحه اصلی</router-link>

        </div>

        <div class="footerLinks_order">

            <h3>خدمات ما</h3>

            <div class="blueLines">
                <div class="line1"></div>
                <div class="line2"></div>
            </div>

            <router-link class="linkColor" to="/">تماس با ما</router-link>
            <router-link class="linkColor" to="/">اخبار</router-link>
            <router-link class="linkColor" to="/">درباره ما</router-link>

        </div>

    </article>
</template>

<script setup>
</script>

<style scoped>
h3 {
    color: #7A7A7A;
    font-size: 16px;
}
.linkColor {
    text-decoration: none;
    color: #7A7A7A;
    font-size: 14px;
}
.footerRight_box{
    color: gray;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}
.footerLinks_order {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
/* underlines */
.blueLines{
    display: flex;
    gap: 10px;
}
.line1 {
    width: 50px;
    height: 2px;
    background-color: blue;
}
.line2 {
    width: 20px;
    height: 2px;
    background-color: lightblue;
}
</style>