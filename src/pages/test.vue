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
    <button
      px-8 py-4
      rounded-full
      inline-block
      bg="#88abaf"
      c-white
      cursor-pointer
      transition duration-200 ease-in-out
      hover="bg-#9acfce"
    >
      按钮
    </button>
  </div>
</template>
