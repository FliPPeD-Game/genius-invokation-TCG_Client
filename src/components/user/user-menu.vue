<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// 菜单信息
const menuList = [
  {
    icon: 'i-carbon:user',
    name: '个人中心',
    path: '/user',
  },
  {
    icon: 'i-ph-cards',
    name: '卡牌配置',
    path: '/user/cards',
  },
  {
    icon: 'i-material-symbols-swords-outline',
    name: '战斗记录',
    path: '',
  },
  {
    icon: 'i-carbon:settings',
    name: '设置',
    path: '',
  },
]
</script>

<template>
  <div
    w="52.5"
    pt-10
    backdrop-blur-3xl
    text="#C1D4DA"
    font-bold
    flex="~ col" items-center
    subpixel-antialiased
  >
    <div
      v-for="item in menuList"
      :key="item.name"
      class="group"
      w-40
      flex justify-start
      py-2 px-5
      my-1
      rounded-lg
      cursor-pointer
      hover:bg="white/20"
      transition-all duration-300
      :class="route.path === item.path ? 'c-white bg-white/50' : ''"
      @click="router.push(item.path)"
    >
      <div :class="item.icon" font-bold />
      <div pl-2>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
