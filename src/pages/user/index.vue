<script setup lang="ts">
import { Starport } from 'vue-starport'
const route = useRoute()
const router = useRouter()

// 初始化
// onBeforeMount(() => {
//   if (route.fullPath === '/user')
//     router.replace('/user/userInfo')
// })

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
  <Starport port="avatar-componet">
    <tcg-avatar
      :src="USER_INFO.avatar"
      z-20 absolute
      w-14 h-14
      transition-all duration-400
      group-hover="scale-120 translate-y-5 translate-x--5"
    />
  </Starport>
</template>

<style lang="scss" scoped>
.isActive {
  background: #cfd1d2;
  border-right: 5px solid #736868;
}
</style>
