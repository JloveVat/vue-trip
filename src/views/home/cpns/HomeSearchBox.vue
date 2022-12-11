<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'

const router = useRouter()

// 位置/城市
const cityClick = () => {
  console.log('city');
  router.push('city')
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功', res);
  }, err => {
    console.log('获取位置失败');
  })
}

// 当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
</script>

<template>
  <div class="search-box">
    <!-- 我的位置 -->
    <div class="location">
      <span class="city" @click="cityClick">
        <span>{{ currentCity.cityName }}</span>
      </span>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range">

    </div>
  </div>
</template>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    height: 18px;
    display: flex;

    span {
      align-self: flex-end;
      font-size: 15px;
    }
  }

  .position {
    width: 74px;
    display: flex;
    justify-content: right;

    .text {
      align-self: flex-end;
      font-size: 12px;
      color: #666;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }
}
</style>
