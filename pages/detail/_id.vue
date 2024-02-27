<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      {{ product }}
      <img :src="product.imageUrl" :alt="product.name">
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import { fetchProductById } from '~/api'

export default Vue.extend({
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    const product: AxiosResponse<any> = response.data
    return { product }
  }
  // created() {
  //   const id: string = this.$route.params.id
  //   fetchProductById(id);
  // },

})
</script>

<style scoped>

</style>
