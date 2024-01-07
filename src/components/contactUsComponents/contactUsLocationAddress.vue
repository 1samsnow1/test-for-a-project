<template>
    <section class="contactUs_info_addressBox">
            <h3 class="info_addressBox_title"><b>شماره تماس ها و ادرس :</b></h3>

            <div class="office_address">
                <p><b>دفتر مدیریت :</b> 01784362345</p>
                <p><b>دفتر مدیریت :</b> 01784362345</p>
            </div>

            <p class="location_address"><b>آدرس:</b>گرگان - میدان پمپ بنزین - حوزه علمیه امام خمینی</p>
    </section>
</template>

<script setup>
</script>

<style scoped>
.contactUs_info_addressBox {
    width: 100%;
    background-color: #095195;
    color: #FFFFFF;
    font-size: 20px;
    padding: 1.5rem;
    padding-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.office_address {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width:870px) {
    .office_address {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
}

</style>