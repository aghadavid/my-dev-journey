<template>
    <Banner bannerTitle="Cart" bannerLink="/cart" />
    <div class="pt-[4.5rem] px-[6.25rem] flex gap-[1.9rem] mb-[5.25rem]">
        <div class="w-[875px]">
            <table class="w-full ">
                <tr class="bg-[#F9F1E7] h-[3.5rem] mb-[3.5rem] w-full text-left">
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
                <tr class="w-full " v-for="e in products" :key="e.id">
                    <td class="w-[105px] h-[105px] rounded-xl overflow-hidden">
                        <img src="@/assets/living.png" alt="" class="objet-cover w-full h-full">
                    </td>
                    <td>{{ e.name }}</td>
                    <td>{{ rupiahCurrency(e.price) }}</td>
                    <td>{{ e.quantity }}</td>
                    <td>{{ total(e.price, e.quantity) }}</td>
                    <td>
                        <div class="h-[1.35rem] w-[1.35rem] hover:scale-105  cursor-pointer">
                            <img src="@/assets/trash.svg" alt="" class="object-contain ">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div
            class="h-[393px] w-[390px] bg-[#F9F1E7] px-[4.70rem] pt-4 flex items-center justify-center text-center flex-col">
            <h1 class="font-semibold text-[2rem] mb-[3.8rem]">Cart Totals</h1>
            <div class="flex justify-between items-center w-full">
                <p class="font-medium text-[1rem]">Subtotal</p>
                <p>{{ rupiahCurrency(totalBelanja) }}</p>
            </div>
            <div class="flex justify-between items-center w-full">
                <p class="font-medium text-[1rem]">total</p>
                <p class="font-medium text-[#B88E2F] text-[1.25rem]">{{ rupiahCurrency(totalBelanja) }}
                </p>
            </div>
            <div
                class="border rounded-[15px] w-[13.875rem] h-[3.7rem] text-[1.25rem] flex items-center justify-center mt-[2.65rem]">
                <p>Check Out</p>
            </div>
        </div>
    </div>
    <Feature />
</template>

<script setup>
import Banner from "@/components/Banner.vue"
import Feature from "@/components/Feature.vue";
import { useMainStore } from "@/stores";
import { ref } from "vue";

let totalBelanja = ref(0)
const products = [{
    id: 53,
    imgUrl: "@/assets/living.png",
    name: "Asgaard sofa",
    price: 250000,
    quantity: 3,
}, {
    id: 32,
    imgUrl: "@/assets/living.png",
    name: "valhalla pillow",
    price: 750000,
    quantity: 1,
}, {
    id: 2,
    imgUrl: "@/assets/living.png",
    name: "nordic table",
    price: 400000,
    quantity: 2,
}]

const { rupiahCurrency } = useMainStore()

console.log(typeof totalBelanja);

const total = (price, qty) => {
    const result = price * qty
    totalBelanja.value += result
    return rupiahCurrency(result)
}

</script>