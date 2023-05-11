<template>
    <div>
        <section>{{ name }}</section>
        <section>{{ age }}</section>
        <!-- <input v-model="name"> -->
        <!-- <input 
            :value="name"
            @input="name = $event.target.value"
        > -->
        <CustomInput 
            v-model.capitalize="name"
        />
        <!-- <input v-model="value" /> -->
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CustomInput from './CustomInpute.vue';

// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

const name = ref<string>('jasper')
const age = ref<number>(25)

// const value = computed({
//     get() {
//         return props.modelValue
//     },
//     set(value) {
//         emit('update:modelValue', value)
//     }
// })

</script>

<style scoped>

</style>