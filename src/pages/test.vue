<script setup lang="ts">
const areaName = translateAreaName(USER_INFO.value?.avatarInfo.country)
const bgImg = `/header/${areaName}.jpg`
</script>

<template>
  <div

    h-full w-full p-20 backdrop-blur-126px
    :style="{
      background: `url(${bgImg}) no-repeat center/cover`,
    }"
  >
    <button

      bg="#88abaf"

      inline-block cursor-pointer rounded-full px-8 py-4 c-white transition duration-200 ease-in-out
      hover="bg-#9acfce"
    >
      按钮
    </button>
  </div>
</template>
