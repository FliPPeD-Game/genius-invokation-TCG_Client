<script lang="ts" setup>
const areaName = translateAreaName(USER_INFO.value?.country)

function getHeaderImg(areaName: IconNameType) {
  const picModules = import.meta.glob('./assets/*.jpg', { eager: true })
  const headerImg = picModules[`./assets/${areaName}.jpg`] as { default: string }
  return headerImg.default
}

const headerImg = getHeaderImg(areaName)
</script>

<template>
  <header>
    <img :src="headerImg">
  </header>
</template>
