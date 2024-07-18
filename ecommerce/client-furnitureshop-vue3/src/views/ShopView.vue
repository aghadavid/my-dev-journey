<template>
    <div class="w-full">
        <Banner bannerTitle="Shop" bannerLink="/shop" />
        <div class="px-[6.25rem] h-auto w-full flex flex-col items-center justify-center pt-[46px] mb-[85px]">
            <Suspense>
                <div class="w-[77.25rem] h-auto grid grid-cols-4 gap-8 mb-8">
                    <Card v-for="item in data" :key="item.id" :item="item" />
                </div>
            </Suspense>
        </div>

        <Feature />
    </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import Feature from '@/components/Feature.vue'
import Card from '@/components/Card.vue'
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useMainStore } from '@/stores'

const store = useMainStore();
const baseUrl = store.baseUrl;

const data = ref(null);
const error = ref(null);


const fetchData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product?limit=16`);
        data.value = response.data;
    } catch (err) {
        error.value = err;
    }
};

onMounted(() => {
    fetchData();
    // console.log(data.value);
});

</script>