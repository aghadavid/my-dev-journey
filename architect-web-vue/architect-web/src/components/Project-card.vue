<template>
    <div class="h-[27.1875rem] flex bg-[#fbfbfb]">
        <div class="w-[41.875rem] h-full bg-slate-200 overflow-hidden">
            <img :src="project.img" alt="" class="object-cover">
        </div>
        <div class="p-[1.875rem] flex justify-between flex-col">
            <h1 class="text-[2.5rem] text-[#bdbdbd] font-light">{{ project.title }}</h1>
            <p class="w-[25rem] text-[1rem] leading-[1.5625rem] font-light">{{ project.text }}</p>
            <div class="w-[13.875rem] h-[4.4375rem] flex items-center justify-center cursor-pointer hover:scale-x-110">
                <p class="text-[0.75rem] leading-[0.75rem] mr-5">VIEW MORE</p>
                <div class="w-[1.5rem] h-[1.5rem] overflow-hidden bg-white">
                    <img :src="rightArrow" alt="" class="object-contain w-[1.5rem] h-[1.5rem]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import rightArrow from "@/assets/arrow-right.svg";
defineProps({
    project: Object
});
</script>
