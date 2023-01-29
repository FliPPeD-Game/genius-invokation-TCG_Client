<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import 'element-plus/es/components/tooltip/style/css'
import TCGLogo from '/logo/tcg_logo.png'
// const route = useRoute()
// const router = useRouter()
const dialogOpen = ref(false)

const pushToLoginOrBack = () => {
  dialogOpen.value = true
}
</script>

<template>
  <div
    w-full h-18
    flex justify-between items-center
    text-white
    px-8
    fixed
  >
    <img :src="TCGLogo" alt="TCGLogo" h-18>
    <!-- <div
      btn
      rounded-xl
      px-4 py-2

    >
      <div>
        登&nbsp;录
      </div>
    </div> -->
    <ElTooltip
      effect="dark"
      content="点击登录"
      placement="top"
    >
      <tcg-avatar
        w-14 h-14
        @click="pushToLoginOrBack"
      />
    </ElTooltip>
  </div>
  <dialog-login v-model="dialogOpen" />
</template>
