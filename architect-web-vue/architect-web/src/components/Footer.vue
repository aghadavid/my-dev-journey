<template>
    <div class="h-[26rem] w-full bg-[#2c2c2c] flex justify-between flex-col  ">
        <div class="flex items-start justify-around pt-[3.6rem] pb-[3.75rem] w-full text-white">
            <div class="h-[9rem] w-[5.875rem]">
                <img src="@/assets/footer/logo-footer.png" alt="">
            </div>

            <div class="h-[14.3rem]">
                <h2 class="font-medium mb-[1.5rem]">Information</h2>
                <ul class="flex flex-col footer gap-[1rem]">
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div class="h-[14.3rem]  p-2 box-border">
                <h2 class="font-medium mb-[1.5rem]">Contacts</h2>
                <ul class="flex flex-col justify-between footer h-[80%]">
                    <li>
                        <div class="h-4 w-4 mr-4 ">
                            <img src="@/assets/footer/pin-maps.png" alt="" class="object-cover">
                        </div>
                        1234 Sample Street <br>
                        Austin Texas 78704
                    </li>

                    <li>
                        <div class="h-4 w-4 mr-4 ">
                            <img src="@/assets/footer/telp.png" alt="" class="object-cover">
                        </div>
                        <p>512.333.2222</p>
                    </li>

                    <li>
                        <div class="h-4 w-4 mr-4 pt-1 ">
                            <img src="@/assets/footer/mail.png" alt="" class="object-cover">
                        </div>
                        <p>sampleemail@gmail.com</p>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col ">
                <h2 class="font-medium mb-[1.5rem]">Social Media</h2>
                <div class="flex items-center justify-around gap-[3.125rem]">
                    <div class="h-[1.25rem] w-[1.25rem] hover:scale-105 cursor-pointer">
                        <img src="@/assets/footer/facebook.png" alt="" class="object-contain">
                    </div>
                    <div class="h-[1.25rem] w-[1.25rem] hover:scale-105 cursor-pointer">
                        <img src="@/assets/footer/twitter.png" alt="" class="object-contain">
                    </div>
                    <div class="h-[1.25rem] w-[1.25rem] hover:scale-105 cursor-pointer">
                        <img src="@/assets/footer/linkedin.png" alt="" class="object-contain">
                    </div>
                    <div class="h-[1.25rem] w-[1.25rem] hover:scale-105 cursor-pointer">
                        <img src="@/assets/footer/pininterest.png" alt="" class="object-contain">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex h-[4.375rem] w-full items-center relative">
            <hr class="bg-white w-full absolute top-0">
            <p class="text-[#c8c8c8] w-full text-center leading-[1.3rem] text-[0.75rem]">© 2021 All Rights Reserved</p>
        </div>
    </div>
</template>


<style scoped>
.footer {
    font-size: 1rem;
}

.footer li {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.03em;
    display: flex;
    align-items: baseline;
}

.footer li:hover {
    scale: 105%;
    cursor: pointer;
}

</style>