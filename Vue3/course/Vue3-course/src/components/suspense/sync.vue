<template>
  <div>
    <div class="sync">
      <div class="sync-content">
        <div><img :src="data.url"></div>
        <div class="sync-pop">
          <div>{{ data.name }}</div>
          <div>&nbsp;</div>
        </div>
      </div>
      <hr>
      <div>{{ data.desc }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { axios } from '@/server/axios';

interface Data {
  data: {
    url: string,
    name: string,
    age: number,
    desc: string
  }
}

const { data } = await axios.get<Data>('./data.json')
</script>

<style lang="less" scoped>

.sync{
  background-color: #d4d9e1;
  padding: 30px;
}
.sync-content {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    // background-color: grey;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
}
</style>