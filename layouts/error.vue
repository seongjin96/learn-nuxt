<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'error',
  props: {
    'error': {
      type: String,
      required: true
    }
  } // you can set a custom layout for the error page
}
</script>

<style scoped>

</style>
