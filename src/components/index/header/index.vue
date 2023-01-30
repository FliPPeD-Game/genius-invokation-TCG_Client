<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import 'element-plus/es/components/tooltip/style/css'
import TCGLogo from '/logo/tcg_logo.png'
// const route = useRoute()
// const router = useRouter()
const dialogOpen = ref(false)
const openLoginDialog = () => {
  dialogOpen.value = true
}

// 获取登录状态
const isLogin = computed(() => {
  return Boolean(USER_INFO.value?.email)
})
const avatarSrc = USER_INFO.value?.avatar
const nickName = USER_INFO.value?.nickname

const logout = () => {
  USER_INFO.value = {} as UserInterface
}
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
        :src="avatarSrc"
        z-20 absolute
        w-14 h-14
        transition-all duration-400
        group-hover="~ scale-120 translate-y-5 translate-x--5"
      />
      <div
        hidden
        opacity-0
        transition-all duration-400 delay-200
        group-hover="block opacity-100"
        z-19
        absolute right-0
        bg-white rounded-lg
        w-60
        shadow-2xl
        pt-10 pb-5 px-5
        flex="col center"
      >
        <div
          text="#18191c xl"
          font-bold
          cursor-default
        >
          {{ nickName }}
        </div>
        <div m="t-5 b-2" bg="#e3e5e7" w-50 h=".25" />
        <div
          p-2 rounded-lg
          w-full
          inline-flex
          cursor-pointer
          c-gray
          hover:bg="#e3e5e7"
        >
          <div i-carbon:user />
          <span
            ml-2
          >
            个人中心
          </span>
        </div>
        <div
          p-2 rounded-lg
          w-full
          inline-flex
          cursor-pointer
          c-gray
          hover:bg="#e3e5e7"
        >
          <div i-ph-cards />
          <span
            ml-2
          >
            卡牌配置
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
