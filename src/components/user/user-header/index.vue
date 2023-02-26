<script lang="ts" setup>
import { Starport } from 'vue-starport'
const areaName = translateAreaName(USER_INFO.value?.country)

function getHeaderImg(areaName: IconNameType) {
  const picModules = import.meta.glob('./assets/*.jpg', { eager: true })
  const headerImg = picModules[`./assets/${areaName}.jpg`] as { default: string }
  return headerImg.default
}

const headerImg = getHeaderImg(areaName)
</script>

<template>
  <header relative>
    <img :src="headerImg">
    <Starport
      port="avatar-componet"
      absolute
      left-40 top-38
    >
      <tcg-avatar
        :src="USER_INFO.avatar"
        w-20 h-20
      />
    </Starport>
  </header>
</template>
