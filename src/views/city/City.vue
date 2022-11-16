<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

// 搜索框功能
const searchValue = ref('')
const cancelClick = () => {
  router.back()
}
</script>

<template>
  <div class="city top-page">
    <van-search v-model="searchValue" shape="round" show-action @cancel="cancelClick" placeholder="城市/区域/位置" />
  </div>
</template>

<style lang="less" scoped>
.city {}
</style>
