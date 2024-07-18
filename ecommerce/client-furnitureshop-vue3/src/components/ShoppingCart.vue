<template>
    <div class="flex-col flex absolute z-20 bg-white w-[417px] h-[746px] top-[100px] right-0   ">
        <div class="h-full w-full pt-[28px] pr-[40px] pb-[23px] pl-[27px] ">
            <div onclick="">
                <img :src="closeCart" alt="">
            </div>
            <h1>Shopping Cart</h1>
            <hr class="border-[1px] w-[80%]" >
            <div class="">asad</div>
        </div>
        <hr>
        <div class="flex w-full items-center justify-center gap-[14px] mt-4"> 
            <div class="rounded-full border-black border cursor-pointer px-[30px] py-[6px] ">Card</div>
            <div class="rounded-full border-black border cursor-pointer px-[30px] py-[6px] ">Checkout</div>
            <div class="rounded-full border-black border cursor-pointer px-[30px] py-[6px] ">Comparison</div>

        </div>
    </div>
</template>


<script setup>
import closeCart from '@/assets/icons/close-cart.svg'
</script>