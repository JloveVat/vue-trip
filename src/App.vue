<script setup>
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <RouterLink to="/home">首页-</RouterLink>
    <RouterLink to="/favor">收藏-</RouterLink>
    <RouterLink to="/order">订单-</RouterLink>
    <RouterLink to="/message">消息</RouterLink>
  </div>
</template>

<style scoped>
.app{
  font-family: '得意黑';
}
</style>
