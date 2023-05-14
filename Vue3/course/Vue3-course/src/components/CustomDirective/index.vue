<template>
    <div>
        <input v-focus />
    </div>
</template>

<script setup lang="ts">
const vFocus = {
    mounted(el: HTMLInputElement) {
        el.focus()
    },
}
</script>

<style scoped></style>