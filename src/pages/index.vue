<script setup lang="ts">
import playBefore from '/play/after.png'
import type { UseWebSocketReturn } from '@vueuse/core'
import { getWs } from '@/request/ws'

let ws!: UseWebSocketReturn<any>
const createRoom = () => {
  ws = getWs()
  ws.send(JSON.stringify({
    command: 'create',
    message: 'created',
  }))
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
            @click="createRoom"
          >
            开始游戏
          </div>
          <img rotate-180 :src="playBefore" alt="">
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

