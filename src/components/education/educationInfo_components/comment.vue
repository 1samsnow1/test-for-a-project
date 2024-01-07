<template>

    <section class="comment" :class="{reply : type === 'reply'}">
        <!-- comment icon -->
        <span v-if="type==='reply'" class="icon">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="41" height="41" rx="20.5" fill="#095195"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.127 24.4565C16.283 24.4565 13 25.0375 13 27.3655C13 29.6935 16.263 30.2955 20.127 30.2955C23.972 30.2955 27.254 29.7135 27.254 27.3865C27.254 25.0595 23.992 24.4565 20.127 24.4565Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1271 21.136C22.6501 21.136 24.6951 19.091 24.6951 16.568C24.6951 14.045 22.6501 12 20.1271 12C17.6051 12 15.5601 14.045 15.5601 16.568C15.5511 19.082 17.5811 21.127 20.0961 21.136H20.1271Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
        <span v-else class="icon" >
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="41" height="41" rx="20.5" fill="#D3D3D3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.127 24.4565C16.283 24.4565 13 25.0375 13 27.3655C13 29.6935 16.263 30.2955 20.127 30.2955C23.972 30.2955 27.254 29.7135 27.254 27.3865C27.254 25.0595 23.992 24.4565 20.127 24.4565Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1271 21.136C22.6501 21.136 24.6951 19.091 24.6951 16.568C24.6951 14.045 22.6501 12 20.1271 12C17.6051 12 15.5601 14.045 15.5601 16.568C15.5511 19.082 17.5811 21.127 20.0961 21.136H20.1271Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
        <!-- comment texts -->
        <div class="commentTextBox">
            <div v-if="parentComment" class="parentComment">
                <h3>{{ parentComment.author }}</h3>
                <p>{{ parentComment.body }}</p>
            </div>

            <div class="commentText">
                <h3>{{ author }}</h3>
                <p v-html="body"></p>
            </div>
            <span v-if="type==='reply'" class="commentTextBox_reply_triangle">
                <svg width="13" height="48" viewBox="0 0 13 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0C10.4641 16.3635 7.30957 20.6643 0 23.5188C6.93335 26.5516 9.44502 32.8105 13 47.0376V0Z" fill="#095195"/>
</svg>

            </span>

            <span v-else class="commetTextBox_triagle">
                <svg width="13" height="48" viewBox="0 0 13 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0C10.4641 16.3635 7.30957 20.6643 0 23.5188C6.93335 26.5516 9.44502 32.8105 13 47.0376V0Z" fill="#D9D9D9"/>
</svg>

            </span>

            <div class="commentText_iconsAndBtn">

                <div class="likeAndDislike">
                    <div>
                        <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.38989 18.4902V8.33022C8.38989 7.93022 8.50989 7.54022 8.72989 7.21022L11.4599 3.15022C11.8899 2.50022 12.9599 2.04022 13.8699 2.38022C14.8499 2.71022 15.4999 3.81022 15.2899 4.79022L14.7699 8.06022C14.7299 8.36022 14.8099 8.63022 14.9799 8.84022C15.1499 9.03022 15.3999 9.15022 15.6699 9.15022H19.7799C20.5699 9.15022 21.2499 9.47022 21.6499 10.0302C22.0299 10.5702 22.0999 11.2702 21.8499 11.9802L19.3899 19.4702C19.0799 20.7102 17.7299 21.7202 16.3899 21.7202H12.4899C11.8199 21.7202 10.8799 21.4902 10.4499 21.0602L9.16989 20.0702C8.67989 19.7002 8.38989 19.1102 8.38989 18.4902Z" fill="#37C660"/>
<path d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z" fill="#37C660"/>
</svg>

                        </button>
                        <span style="color: #37C660;">12</span>
                    </div>
                    
                    <div>
                        <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.38989 5.50978V15.6698C8.38989 16.0698 8.50989 16.4598 8.72989 16.7898L11.4599 20.8498C11.8899 21.4998 12.9599 21.9598 13.8699 21.6198C14.8499 21.2898 15.4999 20.1898 15.2899 19.2098L14.7699 15.9398C14.7299 15.6398 14.8099 15.3698 14.9799 15.1598C15.1499 14.9698 15.3999 14.8498 15.6699 14.8498H19.7799C20.5699 14.8498 21.2499 14.5298 21.6499 13.9698C22.0299 13.4298 22.0999 12.7298 21.8499 12.0198L19.3899 4.52978C19.0799 3.28978 17.7299 2.27978 16.3899 2.27978H12.4899C11.8199 2.27978 10.8799 2.50978 10.4499 2.93978L9.16989 3.92978C8.67989 4.29978 8.38989 4.88978 8.38989 5.50978Z" fill="#FF0000"/>
<path d="M5.21 17.6201H4.18C2.63 17.6201 2 17.0201 2 15.5401V5.48012C2 4.00012 2.63 3.40012 4.18 3.40012H5.21C6.76 3.40012 7.39 4.00012 7.39 5.48012V15.5401C7.39 17.0201 6.76 17.6201 5.21 17.6201Z" fill="#FF0000"/>
</svg>

                        </button>

                        <span style="color: #FF0000;">48</span>
                    </div>
                    
                </div>

                <div class="commentBtn">
                    <!-- white icon -->
                    <span v-if="type==='reply'">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.23364 12.6367L0.742021 12.7279L1.05031 14.3908L1.69532 12.8287L1.69536 12.8286L1.69553 12.8282L1.69565 12.8279L1.6958 12.8275L1.6964 12.8262L1.70328 12.8105C1.70998 12.7954 1.72089 12.7716 1.73609 12.7401C1.76654 12.6771 1.814 12.5842 1.87916 12.4714C2.01006 12.2447 2.20922 11.9432 2.48108 11.6434C3.02507 11.0434 3.8313 10.4783 4.95692 10.4783H10.3736V12.6367V13.6661L11.1827 13.0297L17.3091 8.21137L17.8088 7.81836L17.3091 7.42535L11.1827 2.60699L10.3736 1.97064V3V5.15841H3.4408C2.35611 5.15841 1.62836 5.71875 1.1841 6.50211C0.757794 7.2538 0.584356 8.2154 0.525481 9.11491C0.46591 10.0251 0.520637 10.9274 0.588779 11.597C0.622985 11.9331 0.660892 12.2135 0.690394 12.4108C0.705154 12.5095 0.717835 12.5876 0.726935 12.6415C0.731485 12.6685 0.735142 12.6895 0.737718 12.704L0.74075 12.7209L0.741614 12.7256L0.741876 12.7271L0.741963 12.7275C0.741995 12.7277 0.742021 12.7279 1.23364 12.6367Z" fill="white" stroke="white"/>
</svg>

                    </span>
                    <!-- black icon -->
                    <span v-else>
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.23364 12.6367L0.742021 12.7279L1.05031 14.3908L1.69532 12.8287L1.69536 12.8286L1.69553 12.8282L1.69565 12.8279L1.6958 12.8275L1.6964 12.8262L1.70328 12.8105C1.70998 12.7954 1.72089 12.7716 1.73609 12.7401C1.76654 12.6771 1.814 12.5842 1.87916 12.4714C2.01006 12.2447 2.20922 11.9432 2.48108 11.6434C3.02507 11.0434 3.8313 10.4783 4.95692 10.4783H10.3736V12.6367V13.6661L11.1827 13.0297L17.3091 8.21137L17.8088 7.81836L17.3091 7.42535L11.1827 2.60699L10.3736 1.97064V3V5.15841H3.4408C2.35611 5.15841 1.62836 5.71875 1.1841 6.50211C0.757794 7.2538 0.584356 8.2154 0.525481 9.11491C0.46591 10.0251 0.520637 10.9274 0.588779 11.597C0.622985 11.9331 0.660892 12.2135 0.690394 12.4108C0.705154 12.5095 0.717835 12.5876 0.726935 12.6415C0.731485 12.6685 0.735142 12.6895 0.737718 12.704L0.74075 12.7209L0.741614 12.7256L0.741876 12.7271L0.741963 12.7275C0.741995 12.7277 0.742021 12.7279 1.23364 12.6367Z" fill="black" stroke="black"/>
</svg>

                    </span>
                    <button><b>پاسخ</b></button>
                </div>
            </div>

        </div>

    </section>

    <section v-if="replies.length" class="comment-replies">

        <comment
        v-for="reply in replies"
        :key="reply.id"
        :parentComment="reply.parentComment"
        v-bind="reply"
        type="reply"
        />

    </section>
</template>

<script>
import comments from '../../../data/comments';


export default {
    name: 'comment',
    computed :{
        icons(){
            const commentIcon = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="41" height="41" rx="20.5" fill="#D3D3D3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.127 24.4565C16.283 24.4565 13 25.0375 13 27.3655C13 29.6935 16.263 30.2955 20.127 30.2955C23.972 30.2955 27.254 29.7135 27.254 27.3865C27.254 25.0595 23.992 24.4565 20.127 24.4565Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1271 21.136C22.6501 21.136 24.6951 19.091 24.6951 16.568C24.6951 14.045 22.6501 12 20.1271 12C17.6051 12 15.5601 14.045 15.5601 16.568C15.5511 19.082 17.5811 21.127 20.0961 21.136H20.1271Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;       
            const replyIcon = `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="41" height="41" rx="20.5" fill="#095195"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.127 24.4565C16.283 24.4565 13 25.0375 13 27.3655C13 29.6935 16.263 30.2955 20.127 30.2955C23.972 30.2955 27.254 29.7135 27.254 27.3865C27.254 25.0595 23.992 24.4565 20.127 24.4565Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1271 21.136C22.6501 21.136 24.6951 19.091 24.6951 16.568C24.6951 14.045 22.6501 12 20.1271 12C17.6051 12 15.5601 14.045 15.5601 16.568C15.5511 19.082 17.5811 21.127 20.0961 21.136H20.1271Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
            return this.type === 'reply' ? replyIcon : commentIcon;
        },
    },
    props: {
        author: { type: String, required: true },
        body: { type: String, required: true },
        timestamp: { type: String, required: true },
        replies: { type: Array, required: true },
        type:{type: String, required: false, default: 'comment'},
        parentComment: { type: Object, required: false, default: null },
    },
    setup() {
    },
    components: { comments }
}
</script>

<style scoped>
.comment {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    gap: 20px;
}
.parentComment {
    background-color: #1E70BE;
    border-left: 5px solid #58C9D2;
    border-radius: 5px;
    padding: 10px;
}
.commentTextBox {
    width: 100%;
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 1.5rem;
    position: relative;
}
.commentTextBox p{
    line-height: 22px;
}
.commentText {
    margin: 10px 0;
    padding: 10px;
}
.commentText h3 {
    margin-bottom: 10px;
}
.commetTextBox_triagle svg{
    color: #D9D9D9;
}
.commetTextBox_triagle {
    transform: rotate(180deg);
    position: absolute;
    right: -12px;
    top: -2px;
}
.commentTextBox_reply_triangle {
    position: absolute;
    left: -13px;
    top: 6px;
}

.commentText_iconsAndBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.likeAndDislike {
    display: flex;
    gap: 10px;
}
.commentText_iconsAndBtn svg {
    transform: translateY(5px);
}
.commentText_iconsAndBtn span {
    margin-left: 10px;
}
.commentText_iconsAndBtn button{
    font-size: 13px;
    color: #000000;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.commentBtn svg{
    transform: translateY(5px);
}

/* reply styles */ 
.comment-replies .comment{
    direction: ltr;
    float: left;
}
.comment-replies .commentTextBox {
    color: #ffff;
    background-color: #095195;
}
.comment-replies button{
    color: #ffff;
}
.comment.reply {
    /* background-color: #095195; */
}
.icon {
    transform: translateY(10px);
}

@media screen and (max-width:709px) {
    .comment {
        width: 100%;
    }
}
</style>