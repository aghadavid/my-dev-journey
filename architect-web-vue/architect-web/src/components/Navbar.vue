<template>
    <div class=" h-[6.4rem] w-full items-center flex justify-around  px-[8.5rem]  ">
        <div class=" w-[45%] h-full items-center flex">
            <div class=" h-[2.75rem] w-[4.4rem]">
                <img src="@/assets/logo.svg" alt="" class="object-contain w-full h-full">
            </div>
        </div>

        <ul class="flex gap-8 w-[55%] h-full items-center text-[1rem] font-semibold ">
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