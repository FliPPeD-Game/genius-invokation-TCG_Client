<script setup lang="ts">
</script>

<template>
  <div h-full overflow-hidden>
    <user-header />
    <div
      flex="~ 1"
      w-full h-full
      bg="[url(/bg/mondstadt.jpeg)] cover"
    >
      <user-menu />
      <div flex-1 backdrop-blur-126px>
        <router-view />
      </div>
    </div>
  </div>
</template>
