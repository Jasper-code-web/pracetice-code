<template>
    <div>
        <div class="outer">
            <h3>Tooltips with Vue 3 Teleport</h3>
            <div>
                <MyModal />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MyModal from './myModal.vue';
</script>

<style lang="less" scoped>
.outer{
    transform: translate(30%,30%);
    // perspective: 100px;
    filter: grayscale(100%);
}
</style>