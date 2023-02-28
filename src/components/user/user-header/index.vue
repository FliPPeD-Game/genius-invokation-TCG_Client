<script setup lang="ts">
import { Starport } from 'vue-starport'
import TCGLogo from '/logo/tcg_logo.png'

const router = useRouter()

const areaName = translateAreaName(USER_INFO.value?.country)

function getHeaderImg(areaName: IconNameType) {
  const picModules = import.meta.glob('./assets/*.jpg', { eager: true })
  const headerImg = picModules[`./assets/${areaName}.jpg`] as { default: string }
  return headerImg.default
}

const headerImg = getHeaderImg(areaName)
</script>

<template>
  <header
    relative
    h="50"
  >
    <div
      fixed w-full h-15
      flex justify-between items-center
      px-8 z-999
      backdrop-blur-sm
      shadow-sm
      text="white 3xl"
    >
      <img :src="TCGLogo" alt="TCGLogo" h-18 cursor-pointer @click="router.push('/')">
      <div i-carbon-home cursor-pointer @click="router.push('/')" />
    </div>
    <img :src="headerImg" w-full>
    <Starport
      port="avatar-componet"
      z-99
      absolute
      w-26 h-26
      left-40 top-37
    >
      <tcg-avatar
        :src="USER_INFO.avatar"
        backdrop-blur-64
      />
    </Starport>
  </header>
</template>
