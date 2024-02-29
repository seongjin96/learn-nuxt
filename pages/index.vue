<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword"></SearchInput>
      <ul>
        <li v-for="product in products" :key="product.id  " class="item flex"
        @click="moveToDetailPage(product.id)">
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from 'axios'
import Vue from 'vue';
import SearchInput from '~/components/SearchInput.vue'

export default Vue.extend({
  components: { SearchInput },
  // 페이지 진입하기 전에 호출됨 => this 접근 불가
  // return 값이 Vue의 인스턴스 데이터처럼 동작함
  // pages 폴더의 컴포넌트에만 유효한 인스턴스 옵션 속성 => components 폴더에서 사용 불가
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products: AxiosResponse<any> = response.data.map((item: any) => {
      return {
        ...item,
        imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 30)}/640/480`,
      }
    })
    return { products }
  },
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    moveToDetailPage(id: bigint) {
      this.$router.push(`detail/${id}`);
    },
    updateSearchKeyword(keyword: string) {
      this.searchKeyword = keyword;
    }
  }
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
  // async created() {},
})
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
