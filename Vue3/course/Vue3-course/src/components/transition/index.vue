<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <Transition name="slide">
            <div v-if="show">Hello</div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(true)
</script>

<style lang="less" scoped>
.slide-enter-from,
.slide-leave-to{
    transform: translateX(20px);
    opacity: 0;
}

.slide-enter-active{
    transition: all 0.8s cubic-bezier(0, 0.3, 0.58, 1);
}
.slide-leave-active{
    transition: all 0.8s cubic-bezier(0.25, 0.1, 0.8, 0.5);
}
</style>