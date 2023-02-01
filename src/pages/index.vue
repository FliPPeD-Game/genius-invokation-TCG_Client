<script setup lang="ts">
import type { UseWebSocketReturn } from '@vueuse/core'
import { getWs } from '@/request/ws'

let ws!: UseWebSocketReturn<any>
const createRoom = () => {
  ws = getWs()
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
        <button btn>
          配置卡牌
        </button>
        <button btn my-5 @click="createRoom">
          创建房间
        </button>
        <button btn>
          加入房间
        </button>
      </div>
      <Footer />
    </div>
  </div>
</template>
