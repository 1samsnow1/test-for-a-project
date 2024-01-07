<template>

    <div class="address_styles">


        <span>
                صفحه اصلی
        </span>

        <span class="address_svg">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1L1.5 5.5L6 10" stroke="#8DD4DA" stroke-width="0.818182"/>
</svg>

        </span>

        <span>
            <b>لیست آموزش</b>
        </span>
    </div>

</template>

<script setup>
</script>

<style>
.address_styles {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: #095195;
    font-size: 13px;
}
.address_svg {
    transform: translateY(3px);
}

@media screen and (max-width:700px) {
    .homeSvg {
        display: none;
    }
}
</style>