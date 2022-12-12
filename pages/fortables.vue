<template>
  <NuxtLink to="/posts">
    Вторая страница {{response}}
  </NuxtLink>
</template>

<script setup>
const response = await $fetch("/api")

</script>
