<script setup lang="ts">
const areaName = translateAreaName(USER_INFO.value?.country)
const bgImg = `/bg/${areaName}.jpeg`
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
      <user-menu />
      <router-view
        flex-1
        backdrop-blur-126px
      />
    </div>
  </div>
</template>
