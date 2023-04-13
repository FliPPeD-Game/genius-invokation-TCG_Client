<script setup lang="ts">
import ownImg from './assets/own.png'
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
    <img :src="ownImg" alt="player_content_bg_img">
    <img
      :src="playerInfo.avatarInfo.url"
      alt="player_avatar_img"
      absolute top="8.5" left="27"
    >
    <div
      absolute left-70 top-9
      text="5xl font-bold white"
    >
      {{ playerInfo.nickname }}
    </div>
    <div
      absolute left-70 top-27
      text="4xl font-bold #E5AD68"
    >
      {{ activeType }}
    </div>
    <div
      absolute left-55 top-24 z--1 h-15 w-110 rounded-br-3xl bg-gradient-to-b from="black/60" to="black/10"
    />
  </div>
</template>

