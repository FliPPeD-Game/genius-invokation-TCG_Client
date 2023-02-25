<script setup lang="ts">
import playerZeroImg from './assets/player.png'
import playerOneImg from './assets/player1.png'
const playerInfo: UserInterface = USER_INFO.value

const playerImg = computed(() => {
  if (false)
    return playerZeroImg

  else
    return playerOneImg
})
const activeType = computed(() => {
  if (false)
    return 'active'

  else
    return 'inactive'
})

// 384 106
</script>

<template>
  <div>
    <img :src="playerImg" alt="player_content_bg_img">
    <img
      :src="playerInfo.avatar"
      alt="player_avatar_img"
      absolute top="10.5" left="25.5" scale-110
    >

    <div
      absolute top-10 left-68
      text="5xl font-bold white"
    >
      {{ playerInfo.nickname }}
    </div>
    <div
      absolute top-29 left-68
      text="4xl font-bold #E5AD68"
    >
      {{ activeType }}
    </div>
  </div>
</template>

