<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';

// import { getCityAll } from '@/services'

const router = useRouter()

// 搜索框功能
const searchValue = ref('')
const cancelClick = () => {
  router.back()
}

// tab的切换
const tabActive = ref(0)



/**
 * 1.如果网络请求太对, 页面组件中就包含大量的对于网络请求和数据的处理逻辑
 * 2.如果页面封装了很多的子组件, 子组件需要这些数据, 我们必须一步步将数据传递过去(props)
 */
// 网络请求: 请求城市数据
// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data
// })


// 从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的数据
// 1.获取正确的key: 将tabs绑定的tabActive绑定为key
// 2.根据key从allCities获取数据, 默认不是响应式, 所以使用computed
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.search -->
      <van-search v-model="searchValue" shape="round" show-action @cancel="cancelClick" placeholder="城市/区域/位置" />
      <!-- 2.tab切换, tabActive默认是索引, 改为key -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="item in currentGroup?.cities">
        <p>{{ item }}</p>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  // --van-tabs-line-height: 30px;

  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }

  // .content {
  //   margin-top: 98px;
  // }

  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
