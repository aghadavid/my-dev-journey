<template>
    <hr>
    <div class="h-[31.5rem] w-full px-[6.25rem] pt-12 flex flex-col ">
        <div class=" h-[19.5rem] mb-12 flex gap-[8.5rem]">
            <div class=" h-full w-[17.813rem]">
                <h1 class="mb-12 font-bold text-[1.25rem] font-montserrat">Furino.</h1>
                <p class="text-[#9F9F9fF] w-full text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,
                    <br>FL 33134 USA
                </p>
            </div>
            <div class=" h-full">
                <div class="flex items-start ">
                    <ul class="flex-col w-[4.125rem] flex gap-[2.9rem] mr-[144px] ">
                        <li class="text-[#9F9F9F] cursor-pointer hover:font-semibold ">Links</li>
                        <li class="list">Home</li>
                        <li class="list">Shop</li>
                        <li class="list">About</li>
                        <li class="list">Contact</li>
                    </ul>
                    <ul class="w-[15.125rem] flex-col flex gap-[2.9rem] mr-[72px] ul ">
                        <li class="text-[#9F9F9F] cursor-pointer hover:font-semibold ">Help</li>
                        <li class="list">Payment Options</li>
                        <li class="list">Return</li>
                        <li class="list">Privacy Policies</li>
                    </ul>
                    <div class="w-[17.875rem] h-full ">
                        <p class="mb-[2.9rem] text-[#9F9F9F] ">Enter yor email</p>
                        <form action="" class="flex gap-3">
                            <input type="text" class="outline-none border-b-[1px] border-black"
                                placeholder="Enter your Email Addres">
                            <button type="submit" class="border-b-[1px] font-[500] text-[0.875rem] border-black hover:scale-105 hocer:font-semibold ">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <p class="mt-[2.2rem]">2023 furino. All rights reverved</p>
        </div>
    </div>
</template>


<style scoped>
.list {
    color: #000000;
    font-size: 1rem;
    line-height: auto;
    font-weight: 500;
    cursor: pointer;

}

.list:hover {
    font-weight: 600;
}
</style>