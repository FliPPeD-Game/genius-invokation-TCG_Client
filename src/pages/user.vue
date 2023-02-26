<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// 菜单信息
const menuList = [
  {
    icon: 'i-carbon:user',
    name: '个人信息',
    path: '/user/userInfo',
  },
  {
    icon: 'i-carbon:settings',
    name: '设置',
    path: '/user/setting',
  },
]
</script>

<template>
  <user-header />
  <div
    w-full
    flex h-full
  >
    <div w="52.5" bg-blue>
      <div
        v-for="item in menuList"
        :key="item.name"
        class="group"
        w-20 h-20
        relative
        flex justify-center items-center
        cursor-pointer
        hover:bg-blue-100
        @click="router.push(item.path)"
      >
        <i :class="item.icon" class="text-2xl" />
        <div
          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
          :class="{
            'opacity-100': route.fullPath === item.path,
            'opacity-0': route.fullPath !== item.path,
          }"
        />
      </div>
    </div>
    <div bg-red flex-1>
      <router-view />
    </div>
  </div>
</template>
