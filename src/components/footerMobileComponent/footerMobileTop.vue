<template>

    <section class="footerCenterBox_style">
        <!-- center box svg -->
    <figure class="footer_center_svg">

        <img class="top_white_img" src="@/assets/svgs/forfooter.png" alt="center_top_svg">

        <img class="top_icon" src="@/assets/svgs/h_11.png" alt="top_svg">

    </figure>

    <h2 style="font-size: 22px;">حوزه علمیه خواهران گرگان</h2>

    <p class="footer_center_text">
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ ازلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفـای کاربردی  طراحان خلاقی و فرهنگ پیـشرو در زبان فـارسـی ایجاد کرد. در این در ارائه راهـکارها و شرایط سخت تایپ از ... ...
    </p>

    </section>

</template>
<style scoped>
.footerCenterBox_style {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 1rem;
}
.footer_center_svg {
    border-radius: 100px;
    transform: translateY(-20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.top_svg svg {
    width: 80px;
    height: 80px;
}
.top_white_img {
    border-bottom: 1px solid white;
}

/* text style */
.footer_center_text {
    color: #646464;
    text-align: justify;
    line-height: 28px;
    font-size: 12px;
    margin: 20px 0;
}
.top_icon {
    width: 100px;
    height: 100px;
}

@media screen and (max-width:500px){
    .footerCenterBox_style {
        width: 100%;
    }
}
@media screen and (max-width:495px) {
    .top_white_img {
        width: 300px;
        transform: translateY(10px);
    }
    .top_icon {
        width: 71px;
        height: 71px;
    }
}
</style>