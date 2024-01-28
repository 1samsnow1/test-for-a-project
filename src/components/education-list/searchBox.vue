<template>

    <section class="searchBox">

        <input type="text" placeholder="جستجو کنید..." class="searchBox_input">

        <span class="searchSvg">
            <img src="../../assets/testy_images/searchImage.png" alt="searchSvg">
        </span>

    </section>

</template>

<script setup>
</script>

<style scoped>
.searchBox {
    width: 100%;
    padding: 10px;
    position: relative;
    background-color: #ffff;
    border-radius: 11px;
}
.searchBox_input {
    width: 100%;
    padding: 10px;
    background-color: #09519514;
    color: #928B8B;
    border: 1px solid #0951959C;
    border-radius: 11px;
    font-size: 11px;
    outline: none;
}
.searchBox_input:focus {
    border: 2px solid #0951959C;
}
.searchSvg {
    position: absolute;
    left: 15px;
    top: 17px;
}
@media screen and (max-width:754px) {
    .searchBox {
        width: 50%;
    }
}
</style>