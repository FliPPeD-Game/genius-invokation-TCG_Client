<script setup lang="ts">
import { Starport } from 'vue-starport'
import TCGLogo from '/logo/tcg_logo.png'

const router = useRouter()

const areaName = translateAreaName(USER_INFO.value?.country)
const headerImg = `/header/${areaName}.jpg`
</script>

<template>
  <header
    relative
    h="50"
    :style="{
      background: `url(${headerImg}) no-repeat center/cover`,
    }"
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
