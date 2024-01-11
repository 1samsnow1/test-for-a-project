<template>
    <section class="latest_news_box">
        <!-- titles -->
        <div class="titles_box">

            <div class="last_news_box">
                <img class="last_news_svg" src="@/assets/svgs/Vector_17.png" alt="akhabr_svg">
                <h2 class="last_news_title">اخرین اخبار</h2>
            </div>
            <router-link to="/educationList" class="news_left_title_link"> همه اخبار...</router-link>

        </div>

        <!-- cards -->
        <article class="latest_news_article" v-for="item in test_items.item_list" key="item">
            <!-- article image -->
            <figure>
                <img style="width: 100%;height: 200px;" :src="item.image_url" alt="article_image">
            </figure>

            <!-- article description -->
            <div class="latest_news_desc_box">

                <div>
                    <div class="usless_desc_display">
                        <span>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="3.5" r="3.5" fill="#8DD4DA"/>
</svg>

                        </span>

                        <span  style="color: #8A8A8A;font-size: 10px;">
                            {{item.subtitle}}
                        </span>
                    </div>

                    <h3 class="lastNews_title">
                        {{ item.title }}
                    </h3>
                </div>

                <p style="color: #555555;font-size: 11px;line-height: 23px;">
                    شاخه دانشجویی بسیج مدرسه علمیه معصومیه(س) برگزار می کند: حلقه سوم با هم برای آرمانِ امام نشست هم اندیشی پیرامون "وحدت حوزه و دانشگاه" با حضور مسولین تشکل های دانشجویی استان قم و طلاب مدرسه علمیه معصومیه(س) ...
                </p>

                <div class="latest_news_buttomInfo">

                    <div class="latest_news_buttom_right_info">

                        <div class="infoStyle">
                            <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.88276 3.83902C5.63188 3.83902 5.42383 3.63097 5.42383 3.38009V1.54438C5.42383 1.2935 5.63188 1.08545 5.88276 1.08545C6.13364 1.08545 6.34169 1.2935 6.34169 1.54438V3.38009C6.34169 3.63097 6.13364 3.83902 5.88276 3.83902Z" fill="#095195"/>
<path d="M10.7778 3.83902C10.5269 3.83902 10.3188 3.63097 10.3188 3.38009V1.54438C10.3188 1.2935 10.5269 1.08545 10.7778 1.08545C11.0287 1.08545 11.2367 1.2935 11.2367 1.54438V3.38009C11.2367 3.63097 11.0287 3.83902 10.7778 3.83902Z" fill="#095195"/>
<path d="M6.18856 9.19405C6.10902 9.19405 6.02947 9.1757 5.95604 9.1451C5.87649 9.11451 5.8153 9.07166 5.75411 9.01659C5.64397 8.90033 5.57666 8.74736 5.57666 8.58214C5.57666 8.5026 5.59502 8.42304 5.62561 8.34962C5.65621 8.27619 5.69904 8.20889 5.75411 8.1477C5.8153 8.09262 5.87649 8.04978 5.95604 8.01918C6.17633 7.9274 6.45168 7.97636 6.62302 8.1477C6.73316 8.26396 6.80047 8.42305 6.80047 8.58214C6.80047 8.61886 6.79435 8.6617 6.78823 8.70453C6.78211 8.74125 6.76987 8.77796 6.75152 8.81467C6.73928 8.85138 6.72092 8.88809 6.69645 8.92481C6.67809 8.9554 6.64749 8.98599 6.62302 9.01659C6.50675 9.12673 6.34766 9.19405 6.18856 9.19405Z" fill="#095195"/>
<path d="M8.33017 9.19433C8.25062 9.19433 8.17107 9.17598 8.09764 9.14538C8.01809 9.11479 7.95691 9.07194 7.89571 9.01687C7.78557 8.90061 7.71826 8.74764 7.71826 8.58242C7.71826 8.50287 7.73662 8.42332 7.76722 8.34989C7.79781 8.27647 7.84064 8.20916 7.89571 8.14797C7.95691 8.0929 8.01809 8.05006 8.09764 8.01946C8.31793 7.92156 8.59329 7.97664 8.76462 8.14797C8.87476 8.26424 8.94207 8.42333 8.94207 8.58242C8.94207 8.61914 8.93595 8.66198 8.92983 8.70481C8.92371 8.74152 8.91148 8.77823 8.89312 8.81495C8.88088 8.85166 8.86253 8.88837 8.83805 8.92509C8.81969 8.95568 8.78909 8.98627 8.76462 9.01687C8.64836 9.12701 8.48926 9.19433 8.33017 9.19433Z" fill="#095195"/>
<path d="M10.4718 9.19433C10.3922 9.19433 10.3127 9.17598 10.2392 9.14538C10.1597 9.11479 10.0985 9.07194 10.0373 9.01687C10.0128 8.98627 9.98836 8.95568 9.96389 8.92509C9.93941 8.88837 9.92105 8.85166 9.90882 8.81495C9.89046 8.77823 9.87822 8.74152 9.8721 8.70481C9.86598 8.66198 9.85986 8.61914 9.85986 8.58242C9.85986 8.42333 9.92717 8.26424 10.0373 8.14797C10.0985 8.0929 10.1597 8.05006 10.2392 8.01946C10.4656 7.92156 10.7349 7.97664 10.9062 8.14797C11.0164 8.26424 11.0837 8.42333 11.0837 8.58242C11.0837 8.61914 11.0776 8.66198 11.0714 8.70481C11.0653 8.74152 11.0531 8.77823 11.0347 8.81495C11.0225 8.85166 11.0041 8.88837 10.9797 8.92509C10.9613 8.95568 10.9307 8.98627 10.9062 9.01687C10.79 9.12701 10.6309 9.19433 10.4718 9.19433Z" fill="#095195"/>
<path d="M6.18856 11.3353C6.10902 11.3353 6.02947 11.3169 5.95604 11.2864C5.88261 11.2558 5.8153 11.2129 5.75411 11.1578C5.64397 11.0416 5.57666 10.8825 5.57666 10.7234C5.57666 10.6438 5.59502 10.5643 5.62561 10.4909C5.65621 10.4113 5.69904 10.344 5.75411 10.2889C5.98052 10.0625 6.39661 10.0625 6.62302 10.2889C6.73316 10.4052 6.80047 10.5643 6.80047 10.7234C6.80047 10.8825 6.73316 11.0416 6.62302 11.1578C6.50675 11.268 6.34766 11.3353 6.18856 11.3353Z" fill="#095195"/>
<path d="M8.33017 11.3353C8.17107 11.3353 8.01198 11.268 7.89571 11.1578C7.78557 11.0416 7.71826 10.8825 7.71826 10.7234C7.71826 10.6438 7.73662 10.5643 7.76722 10.4909C7.79781 10.4113 7.84064 10.344 7.89571 10.2889C8.12212 10.0625 8.53821 10.0625 8.76462 10.2889C8.81969 10.344 8.86252 10.4113 8.89312 10.4909C8.92371 10.5643 8.94207 10.6438 8.94207 10.7234C8.94207 10.8825 8.87476 11.0416 8.76462 11.1578C8.64836 11.268 8.48926 11.3353 8.33017 11.3353Z" fill="#095195"/>
<path d="M10.4718 11.3362C10.3127 11.3362 10.1536 11.2689 10.0373 11.1587C9.98224 11.1036 9.93941 11.0363 9.90882 10.9568C9.87822 10.8834 9.85986 10.8038 9.85986 10.7243C9.85986 10.6447 9.87822 10.5652 9.90882 10.4917C9.93941 10.4122 9.98224 10.3449 10.0373 10.2898C10.1781 10.1491 10.3922 10.0818 10.588 10.1246C10.6309 10.1307 10.6676 10.1429 10.7043 10.1613C10.741 10.1735 10.7777 10.1919 10.8144 10.2164C10.845 10.2348 10.8756 10.2653 10.9062 10.2898C11.0164 10.4061 11.0837 10.5652 11.0837 10.7243C11.0837 10.8834 11.0164 11.0425 10.9062 11.1587C10.79 11.2689 10.6309 11.3362 10.4718 11.3362Z" fill="#095195"/>
<path d="M13.5312 6.34169H3.12885C2.87797 6.34169 2.66992 6.13364 2.66992 5.88276C2.66992 5.63188 2.87797 5.42383 3.12885 5.42383H13.5312C13.7821 5.42383 13.9902 5.63188 13.9902 5.88276C13.9902 6.13364 13.7821 6.34169 13.5312 6.34169Z" fill="#095195"/>
<path d="M10.7779 14.2415H5.88271C3.64926 14.2415 2.36426 12.9565 2.36426 10.7231V5.52187C2.36426 3.28842 3.64926 2.00342 5.88271 2.00342H10.7779C13.0114 2.00342 14.2964 3.28842 14.2964 5.52187V10.7231C14.2964 12.9565 13.0114 14.2415 10.7779 14.2415ZM5.88271 2.92128C4.13266 2.92128 3.28211 3.77182 3.28211 5.52187V10.7231C3.28211 12.4731 4.13266 13.3237 5.88271 13.3237H10.7779C12.528 13.3237 13.3785 12.4731 13.3785 10.7231V5.52187C13.3785 3.77182 12.528 2.92128 10.7779 2.92128H5.88271Z" fill="#095195"/>
</svg>

                            </span>

                            <span> 12شهریور1401</span>
                        </div>

                        <div class="infoStyle">
                            <span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.21 8.12285H9.17843C7.65479 8.12285 6.88379 7.26006 6.88379 5.55285V3.79668C6.88379 3.17254 6.95722 2.27916 7.60584 1.78963C8.15043 1.38578 8.93367 1.35518 10.0902 1.69173C11.6077 2.1323 12.8743 3.39894 13.3149 4.91647C13.6515 6.06685 13.6209 6.8562 13.217 7.39468C12.7275 8.04942 11.8341 8.12285 11.21 8.12285ZM8.73786 2.37706C8.48698 2.37706 8.29117 2.42601 8.16267 2.52392C7.92403 2.70137 7.80777 3.11747 7.80777 3.79668V5.55897C7.80777 6.92963 8.334 7.21111 9.18455 7.21111H11.2161C11.8892 7.21111 12.3053 7.09485 12.4888 6.8562C12.703 6.57473 12.6846 6.01178 12.446 5.1857C12.0911 3.98025 11.0509 2.93389 9.84541 2.58511C9.3926 2.44437 9.02546 2.37706 8.73786 2.37706Z" fill="#095195"/>
<path d="M6.77378 14.2422C6.44947 14.2422 6.11904 14.2178 5.78861 14.1627C3.28592 13.7588 1.24828 11.7273 0.844423 9.22461C0.324304 6.00599 2.39866 2.97094 5.57445 2.32233C5.82533 2.27337 6.06397 2.43247 6.11904 2.67723C6.16799 2.92811 6.0089 3.16675 5.76414 3.22183C3.07788 3.77254 1.31559 6.34254 1.76228 9.07775C2.10495 11.1949 3.8244 12.9144 5.94159 13.2571C8.68904 13.6976 11.2529 11.9292 11.7975 9.23073C11.8465 8.97985 12.0912 8.82075 12.336 8.86971C12.5869 8.91866 12.746 9.16342 12.697 9.40818C12.1157 12.2658 9.61914 14.2422 6.77378 14.2422Z" fill="#095195"/>
</svg>

                            </span>

                            <span>بازدید5812</span>
                        </div>
                        
                        <div class="infoStyle">
                            <span>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.9385 7.72849L4.99805 7.7285L5.13004 7.72886C6.25101 7.73486 8.877 7.83675 8.877 9.56899C8.877 11.175 6.7203 11.3896 5.0427 11.3977L4.74696 11.3976C3.62599 11.3916 1 11.2898 1 9.55799C1 7.91799 3.2475 7.72849 4.9385 7.72849ZM4.9385 8.47849C2.823 8.47849 1.75 8.84199 1.75 9.55799C1.75 10.281 2.823 10.648 4.9385 10.648C7.054 10.648 8.127 10.2845 8.127 9.56899C8.127 8.84499 7.054 8.47849 4.9385 8.47849ZM4.9385 1.50049C6.405 1.50049 7.5975 2.69349 7.5975 4.15949C7.5975 5.62549 6.405 6.81849 4.9385 6.81849H4.923C4.2135 6.81599 3.5485 6.53749 3.05 6.03549C2.551 5.53299 2.2775 4.86599 2.27998 4.15799C2.27998 2.69349 3.4725 1.50049 4.9385 1.50049ZM4.9385 2.25049C3.8865 2.25049 3.02998 3.10699 3.02998 4.15949C3.028 4.66899 3.224 5.14649 3.5815 5.50699C3.9395 5.86699 4.4165 6.06649 4.9245 6.06849L4.9385 6.43899V6.06849C5.991 6.06849 6.8475 5.21199 6.8475 4.15949C6.8475 3.10699 5.991 2.25049 4.9385 2.25049Z" fill="#095195"/>
</svg>

                            </span>

                            <span>علیرضالو</span>
                        </div>

                    </div>

                    <router-link to="/" class="latest_news_link">
                        <span>اطلاعات بیشتر</span>
                        <span class="latest_news_link_image">
                            <img src="@/assets/testy_images/newsLinkPointer.png" alt="linkImage">
                        </span>
                    </router-link>
                </div>
            </div>
        </article>
        
    </section>
</template>

<script setup>

import { RouterLink } from 'vue-router';

let test_items = defineProps(['item_list']);


</script>

<style>
.latest_news_article , .titles_box {
    width: 100%;
}
/* title */
.latest_news_box {
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.last_news_title {
    font-size: 18px;
}
/* title box */
.titles_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.last_news_box {
    width: 144px;
    height: 53px;
    transform: translate(18px,-30px);
    color: white;
    text-align: center;
    position: relative;
    line-height: 35px;
}
.last_news_svg {
    position: absolute;
    left: 0;
    z-index: -1;
}
.news_left_title_link {
    color: #095195;
    text-decoration: none;
    font-size: 14px;
}

/* article styles */

.latest_news_article {
   display: grid;
   grid-template-columns: minmax(200px, 1fr) 2fr;
   gap: 20px;
   padding-bottom: 2rem;
   border-bottom: 1px dashed #DADADA;
}
.latest_news_article:last-child {
    border-bottom: none;
}
.latest_news_article img {
    border-radius: 10px;
}
/* description styles */
.usless_desc_display{}
.latest_news_desc_box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 15px;
}
.lastNews_title {
    color: #095195;
    font-size: 15px;
    line-height: 28px;
}
.latest_news_desc_box p {
    line-height: 20px;
    text-align: justify;
}
.latest_news_buttomInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.latest_news_link {
    width: 96px;
    height: 26px;
    text-decoration: none;
    color: #12122F;
    border: 1px solid #095195;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
}
.latest_news_link_image {
    transform: translate(-6px,3px);
}

/* bottom right text styles */
.latest_news_buttom_right_info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #757575;
    font-size: 9px;
}
.infoStyle {
    display: flex;
    align-items: center;
}


/* responsive styles */

@media screen and (max-width:1033px) {
    .infoStyle:last-child {
        display: none;
    }
}
@media screen and (max-width:880px) {
    .latest_news_box {
        padding: 12px;
    }
    .last_news_box {
        transform: translate(13px,-30px);
    }
    .latest_news_desc_box {
        gap: 2px;
    }
    .latest_news_buttom_right_info {
        gap: 5px;
    }
    .lastNews_title {
        font-size: 14px;
        line-height: 24px;
    }
    .usless_desc_display {
        display: none;
    }
}

@media screen and (max-width:805px) {
    .latest_news_link {
        width: 70px;
        height: 20px;
        font-size: 7px;
    }
    .latest_news_link_image {
        transform: translate(-4px,2px);
    }
}

@media screen and (max-width:754px) {
    .last_news_box {
        transform: translate(12px,-25px);
    }
}
@media screen and (max-width:662px) {
    .last_news_box {
        transform: none;
        color: #095195;
    }
}
@media screen and (max-width:589px) {
    .titles_box {
        display: none;
    }
    .latest_news_box {
        background-color: transparent;
        gap: 20px;
        padding: 0;
    }
    .latest_news_article {
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 19px;
        padding: 1rem;
    }
    .latest_news_desc_box {
        gap: 15px;
    }
}
</style>