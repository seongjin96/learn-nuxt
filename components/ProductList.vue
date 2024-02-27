<template>
  <div>
    {{ products }}
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from 'axios'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products: AxiosResponse<any> = response.data
    return { products }
  },
}
</script>

<style scoped>

</style>
