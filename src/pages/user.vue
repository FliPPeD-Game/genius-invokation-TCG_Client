<script setup lang="ts">
</script>

<template>
  <user-header />
  <div
    w-full
    flex h-full
  >
    <user-menu />
    <div bg-red flex-1>
      <router-view />
    </div>
  </div>
</template>
