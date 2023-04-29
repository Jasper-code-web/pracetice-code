<template>
    <div>
        <button @click="random">random</button>
        <TransitionGroup move-class="move" class="wraps" tag="div">
            <div class="items" v-for="item in list" :key="item.id">
                {{ item.number }}
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import lodash from 'lodash'
const list = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => {
    return {
        id: index,
        number: index % 9 + 1
    }
}))
const random = () => {
    list.value = lodash.shuffle(list.value)
}
</script>

<style scoped lang="less">
.wraps{
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9 + 16px);
    .items{
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.move{
    transition: all .5s;
}
</style>