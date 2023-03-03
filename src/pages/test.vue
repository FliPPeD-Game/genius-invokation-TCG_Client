<script setup lang="ts">
const areaName = translateAreaName(USER_INFO.value?.avatarInfo.country)
const bgImg = `/header/${areaName}.jpg`
</script>

<template>
  <div
    w-full h-full
    backdrop-blur-126px
    p-20
    :style="{
      background: `url(${bgImg}) no-repeat center/cover`,
    }"
  >
    <cards-box />
  </div>
</template>
