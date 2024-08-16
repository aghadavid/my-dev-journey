<template>
    <div class="px-[8.4375rem] min-h-[56.5625rem] pt-[1rem] mb-[7rem] flex flex-col">
        <div class="w-full h-full text-[4rem] leading-[4rem] mb-[3.75rem]">
            <h1 class="text-[#BDBDBD] font-light">Our</h1>
            <h1 class="font-bold">Project</h1>
        </div>

        <div class="flex flex-col gap-[2rem]">
            <ProjectCard v-for="project,index in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '@/components/Project-card.vue';
import projects from '@/assets/our-project-page'
</script>
