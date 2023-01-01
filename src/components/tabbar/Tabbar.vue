<script setup>
import { ref, watch } from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/loadAssetsImg'
import { useRoute } from 'vue-router';

const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item replace :to="item.path" class="tabbar-item">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" />
            <img v-else :src="getAssetURL(item.imageActive)" />
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
  // :deep(.van-tabbar-item__icon) {
  //   font-size: 28px;
  // }

  .tabbar-item {

    img {
      height: 26px;
    }

    &:last-child img {
      position: relative;
      top: -1px;
      height: 28px;
    }
  }
}
</style>
