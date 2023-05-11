<template>
    <div>
        <input 
            :value="modelValue"
            @input="emitValue"
        />
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface ModelModifiers {
    capitalize: boolean
}

const props = defineProps({
    modelValue: String,
    modelModifiers: {
        type: Object as PropType<ModelModifiers>,
        default: () => ({})
    }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
    let value = (<HTMLInputElement>e.target).value
    if(props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}



</script>

<style scoped>

</style>