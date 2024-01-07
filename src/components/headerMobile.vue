<template>

    <section class="headerBox">

        <div class="headerBox_content">
            <!-- logo -->
            <router-link to="/">
              <div class="logo">
                <!-- logo icon -->
                <img class="logo_img" src="@/assets/svgs/mask.png" alt="headerMobile_logo">
                            
                <!-- logo text -->
                <h1 class="logo_text">
                    حوزه علمیه خوهران
                </h1>

              </div>
            </router-link>

            <div class="sideNavbar">

                <div id="mySidenav" class="sidenav">
                    <span class="closebtn" @click="closeNav()">&times;</span>
                    <router-link to="/">درباره ما</router-link>
                    <router-link to="/contactUs">تماس با ما</router-link>
                    <router-link to="/education">چند رسانه ای</router-link>
                </div>

                <span style="font-size:30px;cursor:pointer" class="openbtn" @click="openNav()">&#9776;</span>

            </div>

        </div>

    </section>

</template>

<script setup>

import { RouterLink } from 'vue-router'
// side navbar functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>

<style>
.headerBox {
    width: 100%;
    background-color: #095195;
}
.logo_img {
  width: 40px;
  height: 40px;
}
.headerBox_content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* left side navbar */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #095195;
  overflow-x: hidden;
  transition: 0.5s;
  /* padding: 1rem; */
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.sidenav a {
  text-decoration: none;
  font-size: 15px;
  color: #ffffff;
  transition: 0.3s;
  padding-right: 1rem;
}

.openbtn {
  color: #ffffff;
}
.sidenav .closebtn {
  font-size: 30px;
  padding-right: 10px;
}
.closebtn {
  color: #ffff;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>