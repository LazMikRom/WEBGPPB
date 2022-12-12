<template>
  <NuxtLink to="/posts/create">
    id2: {{id2}}
  </NuxtLink>

</template>

<script setup>
const id2 = useRoute().params?.id
</script>
