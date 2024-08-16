<template>
    <div class=" px-[8.5rem] w-full flex flex-col items-center gap-4 ">
        <Hero />
        <About />
        <Focus />
        <Project />
        <Contact />
    </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Focus from '@/components/Mainfocus.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'
</script>