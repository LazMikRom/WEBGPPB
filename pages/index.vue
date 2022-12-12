<template>
   <NuxtLink to="/posts">
     Первая страница {{response}}
   </NuxtLink>
</template>

<script setup>
  const response = await $fetch("/api")

</script>

