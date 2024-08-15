<template>
    <div class="flex items-center bg-slate-100 min-h-[29.063rem]  w-full mb-[7.5rem] pt-7">
        <div class=" h-full w-full flex-1 flex gap-7 ">
            <div class="flex h-full items-center flex-col justify-center gap-7 ">
                <div class="w-[16.875rem] h-[16.5rem] overflow-hidden">
                    <img src="@/assets/about/image-1.png" alt="" class="object-cover">
                </div>
                <div class="w-[16.875rem] h-[8.75]  overflow-hidden row-span-3">
                    <img src="@/assets/about/image-3.png" alt="" class="object-cover">
                </div>
            </div>

            <div class="w-[16.875rem]  h-[21.5rem]  overflow-hidden mb-5">
                <img src="@/assets/about/image-2.png" alt="" class="object-cover">
            </div>
        </div>
        <div class=" flex-1 pl-[1.9rem] flex flex-col gap-5 h-full">
            <h1 class="text-[4rem] leading-[4rem] font-light text-[#bdbdbd]">About</h1>
            <p class="w-[25rem] h-[12.5rem]  text-[1rem] leading-[1.5rem] mb-5 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>
            <div
                class="w-[13.875rem] h-[4.5rem]  bg-white p-2  pl-[1.25rem] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                <div class="flex items-center h-full ">
                    <h1 class="font-[] text-[0.75rem] mr-[1.125rem] text-[#333333]">VIEW </h1>
                    <img :src="right" alt="">
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import right from '@/assets/arrow-right.svg'
</script>