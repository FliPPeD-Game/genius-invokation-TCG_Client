<script setup lang="ts">
import TCGLogo from '/logo/tcg_logo.png'
const route = useRoute()
const router = useRouter()

const pushToLoginOrBack = () => {
  if (route.name === 'user-login')
    router.back()
  else
    router.push('/user/login')
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
    <div
      btn
      rounded-xl
      px-4 py-2
      @click="pushToLoginOrBack"
    >
      <div>
        {{ route.name === 'user-login' ? '返&nbsp;回' : '登&nbsp;录' }}
      </div>
      <!-- <div i-carbon:user-avatar-filled w10 h10 /> -->
    </div>
  </div>
</template>
