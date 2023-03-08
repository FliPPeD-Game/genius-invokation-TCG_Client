<script setup lang="ts">

</script>

<template>
  <div
    flex="~ row" gap-x-2
  >
    <Character
      v-for="item in USER_CARDS.configs[0].roleCardInfos"
      :key="item"
      :src="item.resource"
    />
  </div>
</template>
