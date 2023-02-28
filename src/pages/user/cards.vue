<script setup lang="ts">
const rotateList = [0, 10, 20]
</script>

<template>
  <div v-for="item in 3" :key="item">
    <Character
      character="Keqing"
      :hp="0"
      :style="{
        transform: `rotate(${item * -10}deg)`,
      }"
    />
  </div>
</template>
