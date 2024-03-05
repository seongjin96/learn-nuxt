<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import { fetchProductById } from '~/api'

export default Vue.extend({
  async asyncData({ params }) {
    const response: AxiosResponse<any> = await fetchProductById(params.id)
    const product: AxiosResponse<any> = response.data
    return { product }
  },
  methods: {
    addToCart() {
      this.$router.push('/cart');
    }
  }
  // created() {
  //   const id: string = this.$route.params.id
  //   fetchProductById(id);
  // },

})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
