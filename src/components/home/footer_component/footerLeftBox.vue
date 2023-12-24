<template>

    <section class="footerLeftBox_style">

        <div class="footerLeftBox_info" v-for="item in descList" key="item">

            <div class="footer_left_titles">
                <div>
                    <img src="../../../assets/svgs/Vector (1).png" alt="">
                    <span style="color: #095195;font-size: 16px;"> {{ item.bluescript }} </span>
                </div>
                <span style="color: #6D6D6D;font-size: 16px;"> {{ item.grayscript }}</span>
            </div>

            <div style="color: #6D6D6D; font-size: 12px;"> {{ item.info }}</div>
        </div>

    </section>

</template>

<script setup>
let descList = [
    {bluescript:"شماره های", grayscript:"تماس", info: "+98-912008189 _ +98-912005686"},
    {bluescript:"ایمیل های" , grayscript:"ارتباطی" ,info:"info@madrasegoftogo. om"},
    {bluescript:"ادرس", grayscript:"حوزه", info :"ایران، تهران، منطقه1 (الهیه) ،زیرین دوم، پلاک هفتم"},
]
</script>

<style scoped>
.footerLeftBox_style , .footerLeftBox_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.footerLeftBox_style{
    gap: 25px;
}
.footer_left_titles {
    display: flex;
    gap: 5px;
}
.footerLeftBox_info{
    gap: 15px;
}
</style>