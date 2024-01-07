<template>

    <div class="address_styles">

        <span class="address_svg homeSvg">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.47039 14.7145V12.5486C6.47039 11.9958 6.92187 11.5475 7.47881 11.5475H9.51468C9.78214 11.5475 10.0386 11.653 10.2277 11.8408C10.4169 12.0285 10.5231 12.2831 10.5231 12.5486V14.7145C10.5214 14.9444 10.6122 15.1654 10.7753 15.3285C10.9385 15.4917 11.1605 15.5834 11.392 15.5834H12.781C13.4297 15.5851 14.0524 15.3304 14.5117 14.8757C14.971 14.4209 15.2291 13.8034 15.2291 13.1594V6.98911C15.2291 6.46891 14.9968 5.97547 14.5949 5.64172L9.86985 1.89549C9.04793 1.23865 7.87029 1.25985 7.0729 1.94586L2.45572 5.64172C2.03478 5.96563 1.78318 6.46053 1.77075 6.98911V13.1531C1.77075 14.4953 2.86681 15.5834 4.21887 15.5834H5.57612C6.05704 15.5834 6.44787 15.1982 6.45136 14.7208L6.47039 14.7145Z" fill="#095195"/>
</svg>

        </span>

        <span>
                <b>صفحه اصلی</b>
        </span>

        <span class="address_svg">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1L1.5 5.5L6 10" stroke="#8DD4DA" stroke-width="0.818182"/>
</svg>

        </span>

        <span>
            <b>آموزش</b>
        </span>
        <span class="address_svg">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1L1.5 5.5L6 10" stroke="#8DD4DA" stroke-width="0.818182"/>
</svg>

        </span>

        <span><b>صفحه آموزش</b></span>

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
    margin-bottom: 50px;
}
.address_svg {
    transform: translateY(3px);
}
.homeSvg {
    
}

@media screen and (max-width:700px) {
    .homeSvg {
        display: none;
    }
}
</style>