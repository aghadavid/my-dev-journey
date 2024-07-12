<template>
    <div class="h-[765px] relative w-full mb-[120px]">

        <h1 class="text-[64px] leading-[64px] text-[#BDBDBD] mb-[60px]">Our Project</h1>
        <div class="flex flex-col gap-[30px]">
            <div class="flex gap-[30px]">
                <div class="flex-1 h-[255px] relative cursor-pointer group">
                    <img src="@/assets/our-project/image-1.png" alt="" class="object-cover w-full h-full z-[1]">
                    <hoverImage/>
                </div>
                <div class="flex-1 h-[255px] relative ">
                    <img src="@/assets/our-project/image-2.png" alt="" class="object-cover w-full h-full">
                </div>

            </div>
            <div class="flex gap-[30px] ">
                <div class="h-[255px]  overflow-hidden relative">
                    <img src="@/assets/our-project/image-3.png" alt="" class="object-cover w-full h-full">
                </div>
                <div class="h-[255px] flex-1 overflow-hidden relative">
                    <img src="@/assets/our-project/image-4.png" alt="" class="object-cover w-full h-full">
                </div>
                <div class="h-[255px] flex-1 overflow-hidden relative">
                    <img src="@/assets/our-project/image-5.png" alt="" class="object-cover w-full h-full">
                </div>
            </div>
        </div>
        <div
            class="h-[71px] absolute bottom-0 right-0 bg-[#333333] w-[222px] text-white flex items-center cursor-pointer justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <router-link to="/projects" ><p class="mr-3">All PROJECTS</p></router-link>
            <img :src="rightWhite" alt="">
        </div>
    </div>

</template>

<script setup>
import rightWhite from "@/assets/arrow-right-white.svg"
import right from '@/assets/arrow-right.svg'
import hoverImage from "@/components/img-hover.vue"
</script>