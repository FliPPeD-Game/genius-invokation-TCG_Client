<script setup lang="ts">
import { StarportCarrier } from 'vue-starport'

import userCard from 'mock/cardsInfo'

USER_CARDS.value = userCard

usePageIcon()

const isRouter = ref(true)
const reload = () => {
  isRouter.value = false
  nextTick(() => {
    isRouter.value = true
  })
}

provide('reload', reload)
</script>

<template>
  <StarportCarrier v-if="isRouter">
    <router-view />
  </StarportCarrier>
</template>
