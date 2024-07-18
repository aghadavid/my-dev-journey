<template>
    <div class="flex h-[100px] w-full justify-around items-center">
        <div class="flex gap-[5px] items-center justify-start h-full cursor-pointer">
            <div class="w-[50px] h-[32px] overflow-hidde ">
                <img src="@/assets/navbar/logo.png" alt="" class="object-cover h-full w-full">
            </div>
            <h1 class="text-[2rem] font-bold font-montserrat">Furniro.</h1>
        </div>
        <ul class="flex w-[316px] gap-[75px] font-medium justify-between">
            <router-link to="/" ><li class="nav-li">Home</li></router-link>
            <router-link to="/shop"><li class="nav-li">Shop</li></router-link>
            <router-link to="/about"><li class="nav-li">About</li></router-link>
            <router-link to="/contact"><li class="nav-li">Contact</li></router-link>
        </ul>
        <div class="flex items-center justify-center gap-[2.8rem]">
            <div class="w-[1.75rem] h-[1.75rem] hover:scale-105 cursor-pointer ">
                <img :src='account' alt="" class=" object-center w-full h-full">
            </div>
            <div class="w-[1.75rem] h-[1.75rem] hover:scale-105 cursor-pointer">
                <img :src='search' alt="" class=" object-center w-full h-full">
            </div>
            <div class="w-[1.75rem] h-[1.75rem] hover:scale-105 cursor-pointer">
                <img :src='heart' alt="" class=" object-center w-full h-full">
            </div>
            <div class="w-[1.75rem] h-[1.75rem] hover:scale-105 cursor-pointer" :on-click="handleShowCart()">
                <img :src='cart' alt="" class=" object-center w-full h-full">
            </div>
        </div>
    </div>
        <!-- <shopping-cart :v-show="{cartShow}"/> -->

</template>

<script setup>
import cart from "@/assets/navbar/cart.svg"
import heart from "@/assets/navbar/heart.svg"
import account from "@/assets/navbar/account.svg"
import search from "@/assets/navbar/search.svg"
import ShoppingCart from "./ShoppingCart.vue"
import { ref } from "vue"
const cartShow = ref(false)

const handleShowCart = () => !cartShow

</script>


<style scoped>
.nav-li{
    cursor: pointer;
    list-style: none;
}

.nav-li:hover{
    scale: 110%;
}
</style>