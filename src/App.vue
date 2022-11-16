<script setup>
import { useRoute } from 'vue-router';
import Tabbar from '@/components/tabbar/Tabbar.vue'

// 隐藏底部tabbar
// const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <!-- 隐藏底部tabbar -->
    <!-- <Tabbar v-if="!route.meta.hideTabbar"></Tabbar> -->
    <Tabbar></Tabbar>
  </div>
</template>

<style scoped>
.app {
  /* font-family: '得意黑'; */
}
</style>
