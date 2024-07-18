<template>
    <div class=" h-[102px] w-full items-center flex justify-around  px-[135px]  ">
        <div class=" w-[45%] h-full items-center flex">
            <div class=" h-[43.71px] w-[70px]">
                <img src="@/assets/logo.svg" alt="" class="object-cover">
            </div>
        </div>

        <ul class="flex gap-8 w-[55%] h-full items-center text-[16px] font-semibold ">
            <RouterLink to="/" active-class="active">
                <li >MAIN</li>
            </RouterLink >
            <RouterLink to="/gallery" active-class="active">
                <li>GALLERY</li>
            </RouterLink>
            <RouterLink to="/projects" active-class="active">
                <li>PROJECTS</li>
            </RouterLink>
            <RouterLink to="/certifications" active-class="active">
                <li>CERTIFICATIONS</li>
            </RouterLink>
            <RouterLink to="/contact" active-class="active">
                <li>CONTACT</li>
            </RouterLink>
        </ul>
    </div>
</template>

<script setup>
</script>

<style>
.active {
    border-top-width: 1px;
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(0 0 0 / var(--tw-border-opacity))

}
</style>