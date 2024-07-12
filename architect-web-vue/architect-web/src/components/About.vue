<template>
    <div class="flex items-center bg-slate-100 min-h-[465px]  w-full mb-[120px] pt-7">
        <div class=" h-full w-full flex-1 flex gap-7 ">
            <div class="flex h-full items-center flex-col justify-center gap-7 ">
                <div class="w-[270px] h-[265px] overflow-hidden">
                    <img src="@/assets/about/image-1.png" alt="" class="object-cover">
                </div>
                <div class="w-[270px] h-[140px]  overflow-hidden row-span-3">
                    <img src="@/assets/about/image-3.png" alt="" class="object-cover">
                </div>
            </div>

            <div class="w-[270px]  h-[345px]  overflow-hidden mb-5">
                <img src="@/assets/about/image-2.png" alt="" class="object-cover">
            </div>
        </div>
        <div class=" flex-1 pl-[30px] flex flex-col gap-5 h-full">
            <h1 class="lg:text-[64px] lg:leading-[64px] font-light text-[#bdbdbd]">About</h1>
            <p
                class="lg:w-[400px] sm:w-[160px] sm:text-ellipsis md:w-[266.7px] md:text-ellipsis h-[200px] md:h-[150px] overflow-ellipsis lg:text-[16px] lg:leading-[25px] sm:text-[6.4px] sm:leading-[10.97px] md:text-[10.67px] md:leading-[16.67px] mb-5 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.</p>
            <div
                class=" lg:w-[221.81px] sm:w-[88.7px] md:w-[147.9px] lg:h-[71px] sm:h-[28.4px] md:h-[47.3px] bg-white p-2  pl-[20px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                <div class="flex items-center h-full ">
                    <h1 class="font-[] text-[12px] mr-[18px] text-[#333333]">VIEW </h1>
                    <img :src="right" alt="">
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import right from '@/assets/arrow-right.svg'
</script>