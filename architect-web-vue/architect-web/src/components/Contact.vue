<template>
    <div class="h-[603px] relative  w-full mb-[120px] ">
        <h1 class="text-[64px] leading-[64px] text-[#BDBDBD] mb-5">Contact Us</h1>
        <div class="flex gap-[20px]">
            <div class="h-full">
                <form action="flex flex-col relative">
                    <div class="h-11 w-[391px] bg-[#f3f3f3] flex items-center justify-start pl-9 py-4 mb-[10px] ">
                        <label for="">Name</label>
                        <input type="text" class="bg-transparent ml-1 outline-none">
                    </div>
                    <div class="h-11 w-[391px] bg-[#f3f3f3] flex items-center justify-start pl-9 py-4 mb-[10px] ">
                        <label for="">Phone Number<span class="text-red-600">*</span></label>
                        <input type="text" class="bg-transparent ml-1 outline-none">
                    </div>
                    <div class="h-11 w-[391px] bg-[#f3f3f3] flex items-center justify-start pl-9 py-4 mb-[10px] ">
                        <label for="">E-mail<span class="text-red-600">*</span></label>
                        <input type="text" class="bg-transparent ml-1 outline-none">
                    </div>
                    <div class="h-11 w-[391px] bg-[#f3f3f3] flex items-center justify-start pl-9 py-4 mb-[10px] ">
                        <label for="">Interested in</label>
                        <input type="text" class="bg-transparent ml-1 outline-none ">
                    </div>
                    <div
                        class="w-[391px] bg-[#f3f3f3] flex items-start justify-start pl-9 py-4 mb-[10px] h-[147px] pr-2">
                        <label for="">Message<span class="text-red-600">*</span></label>
                        <textarea class="bg-transparent ml-1 outline-none w-full h-full resize-none "></textarea>
                    </div>
                    <div
                        class="h-[71px] absolute bottom-0 left-0 bg-[#333333] w-[222px] text-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                        <p class="mr-3">SEND EMAIL </p>
                        <img :src="rightWhite" alt="">
                    </div>
                </form>
            </div>
            <div class=" w-[749px] h-[369px] overflow-hidden bg-yellow-200 " typ>
                <img src="@/assets/contact.png" alt="" class="object-cover">
            </div>
        </div>

    </div>

</template>

<script setup>
import rightWhite from "@/assets/arrow-right-white.svg"

</script>