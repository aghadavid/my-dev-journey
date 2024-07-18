<template>
    <div class="w-full h-full">
        <div
            class="z-[2] bg-[#333333] h-full w-full absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300 ">
        </div>
        <div
            class="z-[3] flex-col flex  h-full w-full absolute inset-0  text-white pl-[79px] pt-[48px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 class="z-[3] text-[64px] font-bold leading-[64px] ">Sample</h1>
            <h1 class="z-[3] text-[64px] font-bold leading-[64px] ">Project</h1>
            <div class="flex z-[3] w-[129px] h-6 justify-between mt-2 items-center ">
                <p class="text-[12px]">VIEW MORE </p>
                <div class="w-6 h-6 overflow-hidden ">
                    <img :src="rightWhite" alt="" class="object-contain w-6 h-6">
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import rightWhite from "@/assets/arrow-right-white.svg"
</script>