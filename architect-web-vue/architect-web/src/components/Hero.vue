<template>
    <div class="h w-full flex items-center justify-between mb-[7.5rem] ">
        <div class="flex-1">
            <div>
                <h1 class="text-[4rem] leading-[4rem] font-light text-[#bdbdbd] ">PROJECT</h1>
                <h1 class="text-[4rem] leading-[4rem] font-semibold">lorum</h1>
            </div>
            <div class="flex mt-[5.65rem] gap-[1.45rem]">
                <div class="border flex items-center justify-center p-1 w-[3.31rem] h-[3.31rem] hover:bg-[#f9f9f9] cursor-pointer "
                    @click="changeImage(-1)">
                    <img :src="left" alt="">
                </div>
                <div class="border flex items-center justify-center p-1 w-[3.31rem] h-[3.31rem] hover:bg-[#f9f9f9] cursor-pointer"
                    @click="changeImage(+1)">
                    <img :src="right" alt="">
                </div>
            </div>
            <div class="w-[8.85rem] h-[3.25rem]  mt-[5.625rem] flex text-[1.5rem] leading-[1.5rem] text-[#bdbdbd]">
                <div class="flex flex-col ">
                    <p>0</p>
                    <p>{{ currentIndex + 1 }}</p>
                </div>
                <div class="ml-[1.62rem] mr-[2rem]"><img :src="slash" alt=""></div>
                <div>0{{ imageList.length }}</div>
            </div>
        </div>
        <div class="relative flex-1">
            <div
                class="h-[51.8rem] w-[48.125] overflow-hidden ">
                <img :src="currentImage" alt="" class="object-cover w-full h-full   h">
                <router-link to="/projects">
                    <div
                        class=" w-[13.875rem] h-[4.438rem]  bg-white p-2 absolute left-0 -bottom-[1px] pl-[1.25rem] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <div class="flex items-center h-full ">
                            <h1 class="font-[] text-[0.75rem] mr-[1.125rem] text-[#333333]">VIEW PROJECT</h1>
                            <img :src="right" alt="">
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import left from '@/assets/arrow-left.svg'
import right from '@/assets/arrow-right.svg'
import main from "@/assets/hero/main.png"
import main2 from "@/assets/hero/main2.jpg"
import slash from '@/assets/slash.svg'

const imageList = [main, main2]

const currentIndex = ref(0)
const currentImage = computed(() => imageList[currentIndex.value])

const changeImage = (steps) => {

    let newIndex = currentIndex.value + steps;
    if (newIndex < 0) {
        newIndex = 0;
    } else if (newIndex >= imageList.length) {
        newIndex = imageList.length - 1;
    }

    currentIndex.value = newIndex;
};

</script>