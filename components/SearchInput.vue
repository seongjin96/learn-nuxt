<template>
  <div>
    <input type="text"
           :value="value"
           @input="$emit('input', $event.target.value)"
    >
    <button>search</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    }
  }
})
</script>

<style scoped>

</style>
