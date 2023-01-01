<script setup>
import { watch, ref, computed } from 'vue'
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeContent from './cpns/HomeContent.vue'
import SearchBar from '@/components/searchBar/SearchBar.vue'
import useScroll from '@/hooks/useScroll'


const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, newValue => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearch = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearch.value = newTop > 100
// })
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350
})
</script>

<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="search-bar" v-if="isShowSearchBar">
      <SearchBar></SearchBar>
    </div>
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

.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 9;
}
</style>
