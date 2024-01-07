<template>
    <section class="addressBox">
        <!-- home svg -->
        <span class="homeSvg">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.97063 14.7145V12.5486C6.97063 11.9958 7.42212 11.5475 7.97905 11.5475H10.0149C10.2824 11.5475 10.5389 11.653 10.728 11.8408C10.9171 12.0285 11.0234 12.2831 11.0234 12.5486V14.7145C11.0217 14.9444 11.1125 15.1654 11.2756 15.3285C11.4387 15.4917 11.6607 15.5834 11.8922 15.5834H13.2812C13.9299 15.5851 14.5526 15.3304 15.0119 14.8757C15.4712 14.4209 15.7293 13.8034 15.7293 13.1594V6.98911C15.7293 6.46891 15.497 5.97547 15.0951 5.64172L10.3701 1.89549C9.54817 1.23865 8.37053 1.25985 7.57315 1.94586L2.95596 5.64172C2.53502 5.96563 2.28343 6.46053 2.271 6.98911V13.1531C2.271 14.4953 3.36706 15.5834 4.71912 15.5834H6.07637C6.55728 15.5834 6.94812 15.1982 6.9516 14.7208L6.97063 14.7145Z" fill="#095195"/>
</svg>

        </span>
        
        <span class="homeMobileSvg">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.44148 12.4224V10.7076C5.44148 10.2699 5.79893 9.91501 6.23987 9.91501H7.8517C8.06345 9.91501 8.26652 9.99852 8.41625 10.1472C8.56597 10.2958 8.65009 10.4974 8.65009 10.7076V12.4224C8.64875 12.6043 8.72064 12.7793 8.84979 12.9085C8.97895 13.0376 9.15469 13.1103 9.33801 13.1103H10.4377C10.9513 13.1116 11.4443 12.91 11.8079 12.5499C12.1715 12.1899 12.3759 11.701 12.3759 11.1911V6.30602C12.3759 5.89417 12.192 5.5035 11.8738 5.23927L8.1329 2.27331C7.48217 1.75328 6.54981 1.77007 5.91851 2.31319L2.263 5.23927C1.92974 5.49571 1.73055 5.88754 1.7207 6.30602V11.1861C1.7207 12.2488 2.58847 13.1103 3.65892 13.1103H4.73348C5.11423 13.1103 5.42366 12.8053 5.42642 12.4274L5.44148 12.4224Z" fill="#095195"/>
</svg>

        </span>
        <h3 class="addressFont">صفحه اصلی</h3>

        <!-- pinter svg -->
        <span>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 1L1 5.5L5.5 10" stroke="#8DD4DA" stroke-width="0.818182"/>
</svg>

        </span>

        <h3 class="addressFont">تماس با ما</h3>

    </section>
</template>

<script setup>
</script>

<style scoped>
.addressBox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    color: #095195;
    margin-bottom: 100px;
}
.homeSvg {
    transform: translateY(3px);
}
.homeMobileSvg {
    display: none;
}
.addressFont {
    font-size: 13px;
}

@media screen and (max-width:768px){
    .addressBox {
        margin-bottom: 70px;
    }
}
@media screen and  (max-width:700px) {
    .addressBox {
        gap: 5px;
        margin-bottom: 10px;
    }
    .homeSvg {
        display: none;
    }
    .homeMobileSvg {
        display: block;
        transform: translateY(3px);
    }
    .addressFont {
        font-size: 12px;
    }
}
</style>