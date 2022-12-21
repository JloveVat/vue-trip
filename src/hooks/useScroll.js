import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue';

export default function useScroll() {
  const isReachBottom = ref(false)
  // 监听window窗口的滚动, 加载更多
  const scrollListenerHandler = () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('加载更多');
      isReachBottom.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })
  onActivated(() => {
    window.addEventListener('scroll', scrollListenerHandler)

  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom }
}