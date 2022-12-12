<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import { formatMonthDay, getDiffDays } from '@/utils/formatDate'

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

// 日期范围处理
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalendar = ref(false)
const onConfirm = (value) => {
  startDate.value = formatMonthDay(value[0])
  endDate.value = formatMonthDay(value[1])
  stayCount.value = getDiffDays(value[0], value[1])
  showCalendar.value = false
}

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
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共 {{ stayCount }} 晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" @confirm="onConfirm" :show-confirm="false" />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
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

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
</style>
