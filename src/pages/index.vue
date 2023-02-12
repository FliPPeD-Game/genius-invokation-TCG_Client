<script setup lang="ts">
import playBefore from '/play/after.png'

const dialogOpen = ref(false)
const openDialog = () => {
  dialogOpen.value = true
}
</script>

<template>
  <div overflow-hidden>
    <BgWrap />
    <div
      flex="~ col"
      justify-between
      h-100vh
      pb-8
      z-1
    >
      <Header />
      <div
        flex="~ col"
        justify-center
        items-center
        h-100vh
      >
        <div flex>
          <img :src="playBefore" alt="">
          <div
            mx-10
            text="white 2xl"
            cursor-pointer
            animate-pulse
            @click="openDialog"
            hover:animate-none
          >
            开始游戏
          </div>
          <!-- #diff-compiler-start: tauri -->
          <div
            mx-10
            text="white 2xl"
            cursor-pointer
            @click="openDialog"
          >
            aaaaa
          </div>
          <!-- #diff-compiler-end: tauri -->
          <img rotate-180 :src="playBefore" alt="">
        </div>
      </div>
      <Footer />
    </div>
    <dialog-enter-room v-model="dialogOpen" />
  </div>
</template>

