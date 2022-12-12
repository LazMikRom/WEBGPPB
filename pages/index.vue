<template>
   <NuxtLink to="/posts">
     Первая страница {{response}}
   </NuxtLink>
	<div v-for="i in 10">{{ i }}</div>
</template>

<script setup>
  const response = await $fetch("/api")

</script>

