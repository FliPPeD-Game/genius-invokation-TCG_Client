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

      z-1 h-100vh justify-between pb-8
    >
      <Header />
      <div
        flex="~ col"

        h-100vh items-center justify-center
      >
        <div flex items-center>
          <img :src="playBefore" scale-110>
          <div
            mx-10
            text="white 2xl"
            cursor-pointer
            class="my-pulse"
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

<style>
.my-pulse {
  -webkit-animation: myPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation: myPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes myPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
@-webkit-keyframes myPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>

