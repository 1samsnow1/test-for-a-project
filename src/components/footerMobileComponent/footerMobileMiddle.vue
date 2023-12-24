<template>

    <section class="footerMobile_middle_section">
        <!-- first box -->
        <div class="footerMobile_list_style">
            <h3 class="footerMobile_list_title">لینک های مفید</h3>
            <router-link class="mobileFooterlink" to="/">صفحه اصلی</router-link>
            <router-link class="mobileFooterlink" to="/">صفحه اصلی</router-link>
            <router-link class="mobileFooterlink" to="/">صفحه اصلی</router-link>
            <router-link class="mobileFooterlink" to="/">صفحه اصلی</router-link>
            <router-link class="mobileFooterlink" to="/">صفحه اصلی</router-link>
        </div>

        <!-- blue lines -->
        <div class="lines">
            <span class="blueLine"></span>
            <span class="lightBlueLine"></span>
        </div>

        <!-- second box -->
        <div class="footerMobile_list_style">

            <h3 class="footerMobile_list_title">خدمات ما</h3>
            <router-link class="mobileFooterlink" to="/">تماس با ما</router-link>
            <router-link class="mobileFooterlink" to="/">اخبار</router-link>
            <router-link class="mobileFooterlink" to="/">درباره ما</router-link>

        </div>

        <!-- blue lines -->
        <div class="lines">
            <span class="blueLine"></span>
            <span class="lightBlueLine"></span>
        </div>

        <!-- third box -->
        <h3 class="footerMobile_list_title">راه های ارتباطی</h3>

        <!-- blue lines -->
        <div class="lines">
            <span class="blueLine"></span>
            <span class="lightBlueLine"></span>
        </div>
        
    </section>

</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.footerMobile_middle_section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1rem;
    gap: 10px;
}
.footerMobile_list_style {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
.footerMobile_list_title {
    font-size: 10px;
    color: #7A7A7A;
}
.mobileFooterlink {
    font-size: 9.57px;
    color: #7A7A7A;
    text-decoration: none;
}
/* line styles */
.lines {
    width: 100%;
    display: flex;
}
.blueLine {
    width: 20%;
    height: 2px;
    background-color: #095195;
}
.lightBlueLine {
    width: 80%;
    height: 2px;
    background-color: #1BA4AA;
}
</style>