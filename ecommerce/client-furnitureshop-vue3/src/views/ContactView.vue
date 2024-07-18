<template>
    <Banner bannerTitle="Contact" bannerLink="/contact" />
    <div class="h-[71.5rem] w-full">
        <div class="w-full mt-24 text-center  flex flex-col items-center justify-center ">
            <h1 class="text-[2.25rem] font-semibold mb-2">Get In Touch With Us</h1>
            <p class="text-[1rem] w-[40.25rem] text-[#9f9f9f]">For More Information About Our Product & Services. Please
                Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div class="flex items-start justify-center w-full gap-[1.875rem] pt-[7.5rem] ">
            <div class="flex flex-col gap-[2.5rem]">
                <div class="flex">
                    <div class="w-7 h-7 overflow-hidden">
                        <img :src="addres" alt="" class="object-contain w-full h-full">
                    </div>
                    <ul>
                        <li class="bold-li">Address</li>
                        <li>236 5th SE Avenue, New York NY10000, United States</li>
                    </ul>
                </div>

                <div class="flex">
                    <div class="w-7 h-7 overflow-hidden">
                        <img :src="phone" alt="" class="object-contain w-full h-full">
                    </div>
                    <ul>
                        <li class="bold-li">Phone</li>
                        <li>Mobile: +(84) 546-6789</li>
                        <li>Hotline: +(84) 456-6789</li>
                    </ul>
                </div>

                <div class="flex">
                    <div class="w-6 h-6 overflow-hidden">
                        <img :src="clock" alt="" class="object-contain w-full h-full">
                    </div>
                    <ul>
                        <li class="bold-li">Working Time</li>
                        <li>Monday-Friday: 9:00 - 22:00
                        </li>
                        <li>Saturday-Sunday: 9:00 - 21:00</li>
                    </ul>
                </div>

            </div>
            <form action="" class="h-[57.688rem] w-[39.688rem]  flex flex-col px-[3.1rem]  gap-9">
                <div class="flex flex-col gap-[1.375rem]">
                    <label for="" class="font-medium">Your Name</label>
                    <input type="text" placeholder="Abc"
                        class="rounded-lg h-[4.25rem] outline-none border-[0.1rem] px-[1.9rem] py-[1.5rem]">
                </div>
                <div class="flex flex-col gap-[1.375rem]">
                    <label for="" class="font-medium">Email Addres</label>
                    <input type="email" placeholder="Abc@def.com"
                        class="rounded-lg h-[4.25rem] outline-none border-[0.1rem] px-[1.9rem] py-[1.5rem]">
                </div>
                <div class="flex flex-col gap-[1.375rem]">
                    <label for="" class="font-medium">Subject</label>
                    <input type="text" placeholder="This is an optional"
                        class="rounded-lg h-[4.25rem] outline-none border-[0.1rem] px-[1.9rem] py-[1.5rem]">
                </div>
                <div class="flex flex-col gap-[1.375rem]">
                    <label for="" class="font-medium">Message</label>
                    <textarea name="" id="" placeholder="Hi! i’d like to ask about"
                        class="rounded-lg h-[7.5rem] outline-none border-[0.1rem] px-[1.9rem] py-[1.5rem] resize-none"></textarea>
                </div>
                <button type="submit"
                    class="rounded bg-[#B88E2F] text-center w-[17rem] h-[3.5rem] text-white font-normal hover:bg-[#604a18]">Submit</button>
            </form>
        </div>
    </div>
    <Feature />
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import Feature from '@/components/Feature.vue'
import phone from '@/assets/icons/phone.svg'
import addres from '@/assets/icons/addres.svg'
import clock from '@/assets/icons/clock.svg'
</script>

<style scoped>
.bold-li {
    font-weight: 500;
    font-size: 1.5rem;
}

.normal-li {
    font-weight: 400;
    font-size: 1rem;

}
</style>