<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeSearchBox from './cpns/HomeSearchBox.vue'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()

</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox></HomeSearchBox>
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
