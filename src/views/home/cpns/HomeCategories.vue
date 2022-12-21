<script setup>
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }



  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 72px;
    flex-shrink: 0;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;

    }
  }
}
</style>
