<template>

    <section class="educationInfo_right_box flexLayout">

        <div class="educationInfo_textBox flexLayout">

            <div v-if="item.itemText" v-html="item.itemText.body" class="educationInfo_text">
            </div>

        </div>

        <!-- writers and source -->
        <div class="educationInfo_writers_section flexLayout">
            <div class="writers_and_source_box">
                <span class="svgLocation">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="15" fill="white"/>
</svg>

                </span>
                <p v-if="item.itemText">نویسنده:{{ item.itemText.resource_url }}</p>
            </div>  

            <div class="writers_and_source_box">
                <span class="svgLocation">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="15" fill="white"/>
</svg>

                </span>
                <p v-if="item.itemText">منبع:{{ item.itemText.resource_url }}</p>
            </div>
            

        </div>
    </section>
</template>

<script setup>
let item = defineProps(['itemText']);
</script>

<style scoped>
.flexLayout {
    display: flex;
    flex-direction: column;
}
.educationInfo_right_box {
    align-items: flex-start;
    gap: 100px;
    padding: 1rem;
    background-color: #FFFFFF;
    line-height: 29px;
    border-radius: 11px;
}
.educationInfo_textBox {
    gap: 29px;
}
.educationInfo_text {
    font-size: 13px;
    line-height: 29px;
    color: #000000;
    text-align: justify;
}
.educationInfo_writers_section {
    flex-direction: row;
    gap: 5px;
}
.writers_and_source_box {
    height: 34px;
    padding: 16px 10px;
    border-radius: 30px;
    background-color: #09519557;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.writers_and_source_box p{
    color: #4D4D4D;
    font-size: 14px;
    /* transform: translateY(2px); */
}
.svgLocation {
    transform: translate(8px,6px);
}
/* .writer_name {
    position: absolute;
    left: 5px;
    color: #4D4D4D;
    line-height: 29px;
    font-size: 12px;
    text-align: justify;

} */
</style>