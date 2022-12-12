<template>
  <NuxtLink to="/posts/{{id2}}">
    id: {{id}}
  </NuxtLink>

</template>

<script setup>
  const id = useRoute().params?.id
</script>
