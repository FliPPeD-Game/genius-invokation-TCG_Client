<script setup lang="ts">
import opponentImg from './assets/opponent.png'
const playerInfo: UserInterface = USER_INFO.value

const activeType = computed(() => {
  if (false)
    return 'active'

  else
    return 'inactive'
})
</script>

<template>
  <div relative>
    <img :src="opponentImg" alt="player_content_bg_img">
    <img
      :src="playerInfo.avatarInfo.url"
      alt="player_avatar_img"
      absolute top="9" left="23.3"
    >

    <div
      absolute top-10 left-68
      text="5xl font-bold white"
    >
      {{ playerInfo.nickname }}
    </div>
    <div
      absolute top-27 left-68
      text="4xl font-bold #E5AD68"
    >
      {{ activeType }}
    </div>
    <div
      absolute z--1
      top-25 left-55
      w-110 h-15
      rounded-br-3xl
      bg-gradient-to-b from="black/60" to="black/10"
    />
  </div>
</template>

