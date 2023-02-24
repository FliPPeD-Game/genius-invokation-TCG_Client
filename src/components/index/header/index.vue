<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import 'element-plus/es/components/tooltip/style/css'
import TCGLogo from '/logo/tcg_logo.png'
import { removeLoginToken } from '@/request/token'
// const route = useRoute()
const router = useRouter()
const dialogOpen = ref(false)
const openLoginDialog = () => {
  dialogOpen.value = true
}

// 获取登录状态
const isLogin = computed(() => {
  return Boolean(USER_INFO.value?.email)
})

const logout = () => {
  USER_INFO.value = {} as UserInterface
  removeLoginToken()
}

const menuList = [
  {
    icon: 'i-carbon:user',
    name: '个人中心',
    path: '/user',
  },
  {
    icon: 'i-ph-cards',
    name: '卡牌配置',
    path: '',
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
    w-full h-18
    flex justify-between items-center
    px-8
    fixed
  >
    <img :src="TCGLogo" alt="TCGLogo" h-18>
    <div
      v-if="isLogin"
      class="group"
      w-14 h-14
      relative
    >
      <tcg-avatar
        :src="USER_INFO.avatar"
        z-20 absolute
        w-14 h-14
        transition-all duration-400
        group-hover="scale-120 translate-y-5 translate-x--5"
      />
      <div
        scale-0 opacity-0
        right--26 top--34
        transition-all duration-400 delay-200 ease-in-out
        group-hover="scale-100 opacity-100 right-0 top-0"
        z-19
        absolute
        bg-white rounded-lg
        shadow-2xl
        pt-10 pb-5 px-5
        flex="col center"
      >
        <div
          text="#18191c xl"
          font-bold w-full
          cursor-default
        >
          {{ USER_INFO.nickname }}
        </div>
        <div m="t-5 b-2" bg="#e3e5e7" w-50 h=".25" />
        <div
          v-for="item in menuList"
          :key="item.name"
          p-2 rounded-lg
          w-full
          inline-flex
          cursor-pointer
          c-gray
          hover:bg="#e3e5e7"
          @click="router.push(item.path)"
        >
          <div :class="item.icon" />
          <span
            ml-2
          >
            {{ item.name }}
          </span>
        </div>
        <div my-2 bg="#e3e5e7" w-50 h=".25" />
        <div
          p-2 rounded-lg
          w-full
          inline-flex
          cursor-pointer
          c-gray
          hover:bg="#e3e5e7"
          @click="logout"
        >
          <div i-carbon:logout />
          <span
            ml-2
          >
            退出登录
          </span>
        </div>
      </div>
    </div>
    <ElTooltip
      v-else
      effect="dark"
      content="点击登录"
      placement="top"
    >
      <tcg-avatar
        w-14 h-14
        @click="openLoginDialog"
      />
    </ElTooltip>
  </div>
  <dialog-login v-model="dialogOpen" />
</template>
