<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex justify-self-end text-xl py-4 px-8 lg:px-24">
        <RouterLink class="custom-router-link" to="/">Home</RouterLink>
        <RouterLink class="custom-router-link" to="/projects">Projects</RouterLink>
        <RouterLink class="custom-router-link" to="/work-experience">Work Experience</RouterLink>
        <RouterLink class="custom-router-link" to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
