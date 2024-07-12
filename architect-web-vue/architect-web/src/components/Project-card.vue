<template>
            <div class="h-[435px] flex  bg-[#fbfbfb]">
                <div class="w-[670px] h-full bg-slate-200 overflow-hidden">
                    <img :src="project.img" alt="" class="object-cover">
                </div>
                <div class="p-[30px] flex justify-between flex-col">
                    <h1 class="text-[40px] text-[#bdbdbd] font-light">{{project.title}}</h1>
                    <p class="w-[400px] text-[16px] leading-[25px] font-light">{{ project.text }}</p>
                    <div class="w-[222px] h-[71px] flex items-center justify-center  cursor-pointer hover:scale-x-110">
                        <p class="text-[12px] leading-[12px] mr-5">VIEW MORE</p>
                        <div class="w-6 h-6 overflow-hidden bg-white ">
                                <img :src="rightArrow" alt="" class="object-contain w-6 h-6">
                            </div>
                    </div>

                </div>

            </div>
</template>

<script setup>
import rightArrow from "@/assets/arrow-right.svg"
defineProps({
    project: Object
});
</script>
