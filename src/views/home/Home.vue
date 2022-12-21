<script setup>
import { watch } from 'vue'
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeContent from './cpns/HomeContent.vue'
import useScroll from '@/hooks/useScroll'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const { isReachBottom } = useScroll()
watch(isReachBottom, newValue => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})
</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <HomeContent></HomeContent>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}
</style>
