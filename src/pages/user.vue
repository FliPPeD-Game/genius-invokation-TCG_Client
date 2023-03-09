<script setup lang="ts">
const areaName = translateAreaName(USER_INFO.value?.avatarInfo.country)
const bgImg = `/header/${areaName}.jpg`
</script>

<template>
  <div h-full overflow-hidden flex="~ col">
    <user-header h-50 />
    <div
      flex="~ 1"
      w-full
      :style="{
        background: `url(${bgImg}) no-repeat center/cover`,
      }"
    >
      <user-menu bg="black/20" />
      <router-view
        bg="black/20"
        flex-1
        backdrop-blur-126px
      />
    </div>
  </div>
</template>
