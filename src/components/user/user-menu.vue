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

    text="#C1D4DA"

    flex="~ col"
    items-center pt-10 font-bold subpixel-antialiased backdrop-blur-3xl
  >
    <div
      v-for="item in menuList"
      :key="item.name"
      class="group"

      hover:bg="white/20"
      my-1 w-40 flex cursor-pointer justify-start rounded-lg px-5 py-2 transition-all duration-300
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
