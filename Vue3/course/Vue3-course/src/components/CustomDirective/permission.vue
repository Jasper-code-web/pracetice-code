<template>
    <div class="btns">
        <button v-show-btn="'shop:create'">创建</button>
        <button v-show-btn="'shop:edit'">编辑</button>
        <button v-show-btn="'shop:delete'">删除</button>
    </div>
</template>

<script setup lang="ts">
import type { Directive } from 'vue';

localStorage.setItem('userId', 'jasper')

const permission = [
    'jasper:shop:create',
    // 'jasper:shop:edit',
    'jasper:shop:delete'
]

const userId = localStorage.getItem('userId') as string

const vShowBtn: Directive<HTMLElement, string> = (el, binding) => {
    console.log('binding.value',binding.value)
    if(!permission.includes(userId + ':' + binding.value)) {
        el.style.display = 'none'
    }
}
</script>

<style lang="less" scoped>
.btns {
    button {
        margin: 10px;
    }
}
</style>