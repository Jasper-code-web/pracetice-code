<template>
  <div>
    {{ Man }}
    <br />
    shallowRef: {{ state.count.name }}
    <br/>
    <button @click="change">改变</button>
  </div>
</template>

<script setup lang="ts">
import { track } from '@vue/reactivity';
import { trigger } from '@vue/reactivity';
import { ref, isRef, shallowRef, customRef } from 'vue';
import type { Ref } from 'vue';

const Man: Ref<string> = ref('小满')
const Man1 = 'a'
const state: any = shallowRef({ count: {name: 1} })


const change = () => {
  Man.value= '我是ref'
  state.value.count.name = '我是shallowRef'
}

function myRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        value = newValue
        trigger()
      }
    }
  })
}


</script>

<style scoped>
</style>
