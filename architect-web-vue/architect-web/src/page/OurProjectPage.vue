<template>
    <div class="px-[135px] min-h-[905px] pt-16 mb-28 flex flex-col">
        <div class="w-full h-full  text-[64px] leading-[64px] mb-[60px] ">
            <h1 class="text-[#BDBDBD] font-light">Our</h1>
            <h1 class="font-bold ">Project</h1>
        </div>

        <div class="flex flex-col gap-8 ">

            <ProjectCard v-for="project,index in projects" :key="project.id" :project="project" />
        
        </div>

    </div>

</template>

<script setup>
import ProjectCard from '@/components/Project-card.vue';
import projects from '@/assets/our-project-page'

</script>