<script setup lang="ts">
</script>

<template>
  <div h-full overflow-hidden flex="~ col">
    <user-header h-50 />
    <div
      flex="~ 1"
      w-full
      bg="[url(/bg/mondstadt.jpeg)] cover"
    >
      <user-menu />
      <div flex-1 backdrop-blur-126px>
        <router-view />
      </div>
    </div>
  </div>
</template>
