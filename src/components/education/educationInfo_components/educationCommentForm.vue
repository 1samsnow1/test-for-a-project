<template>

    <form @prevent="" class="formBox">

        <div class="nameAndEmail_box">

            <div class="inputLayout">
                <label>نام:</label>
                <input type="text">
            </div>

            <div class="inputLayout">
                <label>ایمیل:</label>
                <input type="text">
            </div>

            <div class="inputLayout commentBox">
                <label for="">دیدگاه:</label>
                <textarea name="" cols="30" rows="10"></textarea>
            </div>

        </div>

        <div class="formSubmit_box">
            
            <div class="checkBox">
                <input type="checkbox">
                <span>ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</span>
            </div>

            <button class="formBtn">ارسال دیدگاه</button>
        </div>
    </form>

</template>

<script setup>
</script>

<style scoped>
.formBox {
    background-color: #ffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 12.28px;
    gap: 20px;
    padding: 1rem;
}
.nameAndEmail_box {
    color: #000000;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 10px;
    column-gap: 100px;
}
.inputLayout{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.inputLayout input {
    width: 100%;
    background-color: #EFEFEF;
    border: none;
    border-radius: 6px;
    outline: none;
    padding: 11px;
}

.commentBox {
    grid-column: 1/3;
}
.commentBox textarea {
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: #EFEFEF;
    outline: none;
}
.formSubmit_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checkBox {
    display: flex;
    align-items: center;
    gap: 5px;
}
.formBtn {
    background-color: #095195;
    color: #ffff;
    line-height: 19.22px;
    padding: 8px;
    border: none;
    border-radius: 6px;
}

@media screen and (max-width:596px) {
    .nameAndEmail_box {
        display: flex;
        flex-direction: column;
    }
    .formSubmit_box {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        row-gap: 5px;
    }
    .checkBox {
        grid-column: 1/5;
    }
    .formBtn {
        grid-column: 4/5;
    }
}
</style>