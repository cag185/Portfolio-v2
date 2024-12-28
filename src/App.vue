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
      </nav>
    </div>
  </header>

  <RouterView />
</template>
