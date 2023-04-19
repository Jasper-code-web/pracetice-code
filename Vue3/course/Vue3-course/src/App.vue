<template>
  <div>
    <Suspense>
      <template #default>
        <Sync />
      </template>
      <template #fallback>
        <Skeleton />
      </template>
    </Suspense>

  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Skeleton from '@/components/suspense/skeleton.vue'

const Sync = defineAsyncComponent(() => import('@/components/suspense/sync.vue'))

</script>

<style scoped></style>
