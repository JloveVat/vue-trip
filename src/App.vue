<script setup>
import Tabbar from '@/components/tabbar/Tabbar.vue'
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <Tabbar></Tabbar>
  </div>
</template>

<style scoped>
.app {
  font-family: '得意黑';
}
</style>
