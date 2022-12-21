<script setup>
import HouseItemFill from '@/components/houseItemFill/HouseItemFill.vue'
import HouseItemHalf from '@/components/houseItemHalf/HouseItemHalf.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <HouseItemFill v-if="item.discoveryContentType === 9" :itemData="item.data"></HouseItemFill>
        <HouseItemHalf v-else :itemData="item.data"></HouseItemHalf>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
