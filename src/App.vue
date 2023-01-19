<script setup lang="ts">
usePageIcon()
</script>

<template>
  <div overflow-hidden>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-50vh);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(50vh);
}
</style>
