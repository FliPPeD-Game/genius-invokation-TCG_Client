<script setup lang="ts">
const open = ref(true)
const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <!-- <Character character="Keqing" :hp="10" /> -->
  <button btn @click="open = !open">
    {{ !open }}
  </button>
  <tcg-dialog :open="open">
    <h1 @click="handleClick">
      123123123
    </h1>
  </tcg-dialog>
</template>
