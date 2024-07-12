<template>
    <div class="h-[417px] w-full bg-[#2c2c2c] flex justify-between flex-col  ">
        <div class="flex items-start justify-around pt-[58px] pb-[60px] w-full text-white">
            <div class="h-[145px] w-[94px]">
                <img src="@/assets/footer/logo-footer.png" alt="">
            </div>

            <div class="h-[229px]">
                <h2 class="font-medium mb-[25px]">Information</h2>
                <ul class="flex flex-col footer">
                    <li>Main</li>
                    <li>Gallery</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div class="h-[229px]  p-2 box-border">
                <h2 class="font-medium mb-[25px]">Contacts</h2>
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
                <h2 class="font-medium mb-[25px]">Social Media</h2>
                <div class="flex items-center justify-around gap-[50px]">
                    <div class="h-[20px] w-[20px] overflow-hidden">
                        <img src="@/assets/footer/facebook.png" alt="" class="object-cover">
                    </div>
                    <div class="h-[20px] w-[20px] overflow-hidden">
                        <img src="@/assets/footer/twitter.png" alt="" class="object-cover">
                    </div>
                    <div class="h-[20px] w-[20px] overflow-hidden">
                        <img src="@/assets/footer/linkedin.png" alt="" class="object-cover">
                    </div>
                    <div class="h-[20px] w-[20px] overflow-hidden">
                        <img src="@/assets/footer/pininterest.png" alt="" class="object-cover">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex h-[70px] w-full items-center relative">
            <hr class="bg-white w-full absolute top-0">
            <p class="text-[#c8c8c8] w-full text-center leading-[21px] text-[12px]">© 2021 All Rights Reserved</p>
        </div>
    </div>
</template>


<style scoped>
.footer {
    font-size: 16px;
}

.footer li {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 3%;
    display: flex;
    align-items: first baseline;
}

</style>