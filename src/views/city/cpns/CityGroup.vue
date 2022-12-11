<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'

// 定义props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 动态的索引
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 监听城市的点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  console.log(city.cityName);
  // 选中当前的城市
  cityStore.currentCity = city

  // 返回上一级
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, indey) in item.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template> 

<style lang="less" scoped>
.city-group {
  --van-index-bar-index-active-color: var(--primary-color);
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    display: flex;
    justify-content: center;
    line-height: 28px;
    width: 70px;
    height: 28px;
    margin: 6px 0;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
  }
}
</style>
