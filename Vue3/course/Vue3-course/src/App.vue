<template>
  <div class="demo">
    <!-- <MyAnimation />
    <Animation1 /> -->
    <!-- <PlaneTransition /> -->
    <AppT @handle="handle" name="Jasper"></AppT>
  </div>
</template>

<script lang="ts" setup>
import MyAnimation from '@/components/transition/index.vue'
import Animation1 from './components/transition/animation1.vue';
import PlaneTransition from './components/transition/planeTransition.vue';
import AppT from './App'

const handle = (res: any) => {
  console.log('res',res)
}
</script>

