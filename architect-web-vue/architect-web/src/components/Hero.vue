<template>
    <div class="h w-full flex items-center justify-between mb-[120px] ">
        <div class="flex-1">
            <div>
                <h1 class="sm:text-[25.6px] sm:leading-[25.6px] md:text-[42.67px] md:leading-[42.67px] lg:text-[64px] lg:leading-[64px] font-light ">PROJECT</h1>
                <h1 class="sm:text-[25.6px] sm:leading-[25.6px] md:text-[42.67px] md:leading-[42.67px] lg:text-[64px] lg:leading-[64px] font-semibold">lorum</h1>
            </div>
            <div class="flex">
                <div class="border flex items-center justify-center p-1">

                    <img :src="left" alt="">
                </div>
                <div class="border flex items-center justify-center p-1">
                    <img :src="right" alt="">
                </div>
            </div>
        </div>
        <div class="relative flex-1">
            <div class=" sm:h-[332px] sm:w-[308px] md:h-[553px] md:w-[513px] lg:h-[829px] lg:w-[770px] overflow-hidden ">
                <img src="@/assets/Rectangle 6.png" alt="" class="object-cover ">
                <router-link to="/projects">
                    <div
                        class=" w-[221.81px] h-[71px]  bg-white p-2 absolute left-0 -bottom-[1px] pl-[20px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <div class="flex items-center h-full ">
                            <h1 class="font-[] text-[12px] mr-[18px] text-[#333333]">VIEW PROJECT</h1>
                            <img :src="right" alt="">
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import left from '@/assets/arrow-left.svg'
import right from '@/assets/arrow-right.svg'
</script>