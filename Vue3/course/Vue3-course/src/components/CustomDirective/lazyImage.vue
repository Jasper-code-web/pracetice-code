<template>
    <div>

        <div v-for="item in arr">
            <img height="500" v-lazy="item" width="360" alt="">
        </div>

    </div>
</template>

<script setup lang="ts">
import { Directive } from 'vue';

const imgs: Record<string, {default: string}> = import.meta.glob('@/assets/images/*.*', {eager: true})
const arr = Object.values(imgs).map(v => v.default)

const vLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
    const url = (await import('@/assets/vue.svg')).default
    el.src = url

    const observer = new IntersectionObserver((enr) => {
        if(enr[0].intersectionRatio > 0) {
            setTimeout(() => {
                el.src = binding.value
            }, 200)
            observer.unobserve(el)
        }
    })

    observer.observe(el)
}

</script>

<style scoped></style>