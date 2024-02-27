<template>
  <div>
    <p>메인 페이지입니다</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  async created() {
    const response = await axios.get('http://localhost:3000/products');
    console.log(response);
  }
}
</script>

<style scoped>

</style>
