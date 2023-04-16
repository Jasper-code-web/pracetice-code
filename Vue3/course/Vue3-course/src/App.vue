<template>
  <div>
    {{ re }}
    <button @click="add">添加</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

let re = reactive([1, 2])

// setTimeout(() => {
//   re = [1]
//   console.log('re', re)
// }, 2000)
const add = () => {
  re = [1]
  console.log('re', re)
}
</script>

<style scoped></style>
