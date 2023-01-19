<script setup lang="ts">
import '@/styles/routerTransition.css'
usePageIcon()
</script>

<template>
  <div overflow-hidden>
    <router-view v-slot="{ Component, route }">
      <transition
        :name="route.name as string || 'fade'"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .25s;
}

.fade-enter-from {

  transform: translateY(-20vh);
}

.fade-leave-to {

  transform: translateY(20vh);
}
</style>
