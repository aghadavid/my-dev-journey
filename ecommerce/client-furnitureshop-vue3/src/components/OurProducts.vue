<template>
    <div class="px-[6.25rem] w-full flex flex-col items-center justify-center  text-[#3a3a3a] mb-16">
        <h1 class="text-[2.5rem] leading-[120%] font-bold mb-8">Our Products</h1>
        <Suspense>
            <div class="w-[77.25rem] h-[924px] grid grid-cols-4 gap-8 mb-8">
                <Card v-for="item in data" :key="item.id" :item="item" />
            </div>
        </Suspense>
        <div
            class="border-[#B88E2F] border flex items-center justify-center h-12 w-[245px] text-[#B88E2F] bg-white hover:bg-[#B88E2F] hover:text-white cursor-pointer ">
            <p class="">show more</p>
        </div>
    </div>

</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Card from './Card.vue';
import { useMainStore } from '@/stores';
const store = useMainStore()
const baseUrl = store.baseUrl

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product?limit=8`);
        data.value = response.data;
    } catch (err) {
        error.value = err;
    }
};

onMounted(() => {
    fetchData();
    console.log(data.value);
});


</script>