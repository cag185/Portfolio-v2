<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex justify-center space-x-4 text-xl">
        <RouterLink
          class="transition-all ease-in-out hover:text-2xl hover:font-semibold delay-100 duration-1000"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="transition-all ease-in-out hover:text-2xl hover:font-semibold delay-100 duration-1000"
          to="/about"
          >About</RouterLink
        >
        <RouterLink
          class="transition-all ease-in-out hover:text-2xl hover:font-semibold delay-100 duration-1000"
          to="/projects"
          >Projects</RouterLink
        >
        <RouterLink
          class="transition-all ease-in-out hover:text-2xl hover:font-semibold delay-100 duration-1000"
          to="/work-experience"
          >Work Experience</RouterLink
        >

        <RouterLink
          class="transition-all ease-in-out hover:text-2xl hover:font-semibold delay-100 duration-1000"
          to="/resume"
          >Resume</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>
