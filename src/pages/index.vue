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
        <div flex items-center>
          <img :src="playBefore" scale-110>
          <div
            mx-10
            text="white 2xl"
            cursor-pointer
            animate-pulse
            hover:animate-none
            @click="openDialog"
          >
            开始游戏
          </div>
          <img rotate-180 :src="playBefore" scale-110>
        </div>
      </div>
      <Footer />
    </div>
    <dialog-enter-room v-model="dialogOpen" />
  </div>
</template>

