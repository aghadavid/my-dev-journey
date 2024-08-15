<template>
    <div class="w-full h-[20rem] bg-banner flex items-center justify-center  ">
    <div class="flex flex-col justify-center items-center">
        <div class="h-[4.813rem] w-[4.813rem] overflow-hidden ">
            <img :src="logo" alt="" class="object-contain w-full h-full">
            </div>
        <h1 class="text-[3rem] font-medium mb-0.5">{{ bannerTitle }}</h1>
        <ul class="flex items-center justify-center gap-0.5">
            <router-link to="/" ><li class="font-medium text-[1rem] ">Home  </li></router-link>
            <div class="h-5 w-5 overflow-hidden mx-0.5">
            <img :src="arrow" alt="" class="object-cover w-5 h-5">
            </div>
            <router-link :to="{ bannerLink }"><li>{{bannerTitle}}</li></router-link>    
        </ul>
    </div>
</div>
</template>

<script setup>
import arrow from "@/assets/arrow.svg"
import logo from "@/assets/logo.svg"

const props = defineProps({
bannerTitle: String,
bannerLink: String
})



</script>

<style scoped>
.bg-banner {
    background-image: url("@/assets/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>