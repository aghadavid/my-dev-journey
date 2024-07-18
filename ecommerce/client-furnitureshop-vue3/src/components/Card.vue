<template>
    <div class="h-[28rem] w-[18rem] bg-[#f4f5f7] flex flex-col  group relative">
        <div class="h-[18.75rem] w-full relative overflow-hidden ">
            <img :src='`${baseUrl}${item.imgUrl}`' alt="" class="object-cover h-[18.75rem] w-full">
            <div
                class="w-[3rem] h-[3rem] rounded-full absolute top-[1.5rem] right-[1.5rem] leading-[150%] z-3 bg-[#E97171] text-white flex items-center justify-center">
                -30%</div>
        </div>
        <div class="p-4">
            <h1 class="text-[1.5rem] leading-[120%] font-semibold ">{{ item.name }}</h1>
            <p class="leading-[150%] text-[#898989]">{{ item.description }}</p>
            <div>
                <p class="font-semibold text-[1.25rem] leading-[150%] ">{{ rupiahCurrency(item.price) }}</p>
            </div>
        </div>

        <div
            class="z-[3] bg-[#333333] h-full w-full absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300  flex items-center justify-">
        </div>
        <div
            class="z-[4] flex flex-col h-full w-[285px] absolute inset-0 items-center justify-center  text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
                class="bg-white text-[#B88E2F] h-12 w-[12.5rem] flex items-center justify-center cursor-pointer font-semibold leading-[150%] mb-[1.5rem]">
                <p>Add to Cart</p>
            </div>

            <div class="w-full px-4 flex gap-[1.25rem]">
                <img :src="share" alt="">
                <img :src="compare" alt="">
                <img :src="love" alt="">


            </div>

        </div>


    </div>
</template>

<script setup>
import share from '@/assets/addtocart/share.svg'
import compare from '@/assets/addtocart/compare.svg'
import love from '@/assets/addtocart/love.svg'
import { useMainStore } from '@/stores';

defineProps({
    item: Object
});


const {baseUrl,rupiahCurrency} = useMainStore()


</script>