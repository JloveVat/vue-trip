<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/loadAssetsImg'

const currentIndex = ref(0)

const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="item.path">
      <div class="tabbar-item" :class="{ active: currentIndex === index }" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;

  border-top: 1px solid #f0f0f0;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 34px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
