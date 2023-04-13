<script setup lang="ts">
import { Starport } from 'vue-starport'
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
  USER_CARDS.value = {} as CardInterface
  ElMessage({
    message: '已退出登录',
    type: 'success',
  })
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

    fixed h-18 w-full flex items-center justify-between px-8
  >
    <img :src="TCGLogo" alt="TCGLogo" h-18>
    <div
      v-if="isLogin"
      class="group"

      relative h-14 w-14
    >
      <Starport
        port="avatar-componet"

        absolute z-20 h-14 w-14 transition-all duration-400
        group-hover="scale-120 translate-y-5 translate-x--5"
      >
        <tcg-avatar
          :src="USER_INFO?.avatarInfo?.url"
          cursor-pointer
        />
      </Starport>
      <div

        group-hover="scale-100 opacity-100 right-0 top-0"

        absolute right--26 top--34 z-19 scale-0 rounded-lg bg-white px-5 pb-5 pt-10 opacity-0 shadow-2xl transition-all duration-400 delay-200 ease-in-out
        flex="col center"
      >
        <div
          text="#18191c xl"

          w-full cursor-default font-bold
        >
          {{ USER_INFO.nickname }}
        </div>
        <div m="t-5 b-2" bg="#e3e5e7" w-50 h=".25" />
        <div
          v-for="item in menuList"
          :key="item.name"

          w-full inline-flex cursor-pointer rounded-lg p-2 c-gray
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

          w-full inline-flex cursor-pointer rounded-lg p-2 c-gray
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
        h-14 w-14
        @click="openLoginDialog"
      />
    </ElTooltip>
  </div>
  <dialog-login v-model="dialogOpen" />
</template>
