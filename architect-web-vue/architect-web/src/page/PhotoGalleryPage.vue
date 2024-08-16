<template>
    <div class="px-[8.5rem] min-h-[56.5rem] pt-[10.3rem] mb-28 flex flex-col w-full ">
        <div class="w-full text-[4rem] leading-[4rem] mb-16 ">
            <h1 class="text-[#BDBDBD] font-light">Photo</h1>
            <h1 class="font-bold ">Gallery</h1>
        </div>
        <div class="w-full grid grid-cols-5 gap-7  mb-[3.7  5rem]">
            <div class="w-[13.125rem] h-[16.25rem] bg-[#c4c4c4] hover:scale-105 hover:shadow-lg shadow-md">
                <!-- <img src="" alt="" class="object-cover w-full h-full"> -->
            </div>
            <div v-for="(image, index) in images" :key="index"
                class="w-[13.125rem] h-[16.25rem] overflow-hidden hover:scale-105 hover:shadow-lg shadow-md">
                <img :src="image" :alt="image" class="object-cover w-full h-full">
            </div>
        </div>
        <div>
            <div></div>
            <div>

            </div>
        </div>
    </div>


</template>

<script setup>
import images from '@/assets/photo-gallery/images';
</script>