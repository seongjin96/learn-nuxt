<template>
  <div>
    <header class="title">
      <nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
    </header>
    <Nuxt />
  </div>
</template>

<script lang="ts">
export default {
  // created() {
  //   console.log(this.$route)
  // }
}

</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
