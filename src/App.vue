<script setup lang="ts">
usePageIcon()
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
</style>
