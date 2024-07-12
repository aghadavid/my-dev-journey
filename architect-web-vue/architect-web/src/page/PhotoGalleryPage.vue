<template>
    <div class="px-[135px] min-h-[905px] pt-[165px] mb-28 flex flex-col w-full ">
        <div class="w-full text-[64px] leading-[64px] mb-16 ">
            <h1 class="text-[#BDBDBD] font-light">Photo</h1>
            <h1 class="font-bold ">Gallery</h1>
        </div>
        <div class="w-full grid grid-cols-5 gap-7  mb-[60px]">
            <div class="w-[210px] h-[260px] bg-[#c4c4c4]">
                <!-- <img src="" alt="" class="object-cover w-full h-full"> -->
            </div>
            <div v-for="(image, index) in images" :key="index" class="w-[210px] h-[260px] overflow-hidden">
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