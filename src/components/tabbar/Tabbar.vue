<script setup>
import { ref } from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/loadAssetsImg'

const currentIndex = ref(0)
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)"/>
            <img v-else :src="getAssetURL(item.imageActive)"/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<style lang="less" scoped>
.tabbar {
  // 局部定义一个变量, 只针对.tabbar子元素才生效
  // --van-tabbar-item-font-size: 28px;

  // 穿透修改
  :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }

  img {
    height: 26px;
  }
}
</style>
