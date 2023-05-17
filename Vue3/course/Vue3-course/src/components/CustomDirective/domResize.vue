<template>
    <div>
        <div class="resize-dom"></div>
    </div>
</template>

<script setup lang="ts">
import useResize from 'dom-resize-tool';
import { onMounted } from 'vue';
onMounted(() => {
    useResize(document.querySelector('.resize-dom') as HTMLElement, (e: any) => {
        console.log(e)
    })
})
</script>

<style scoped>
.resize-dom{
    width: 100px;
    height: 100px;
    border: 1px solid blue;
    resize: both;
    overflow: hidden;
    background-color: aqua;
}
</style>