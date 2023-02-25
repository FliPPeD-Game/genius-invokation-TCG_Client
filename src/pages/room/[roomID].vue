<script setup lang="ts">
const props = defineProps<{ roomID: string }>()
const router = useRouter()
</script>

<template>
  <div
    class="bg-bar"
    bg="[url(/wait_bg/diona_bg.png)] center cover"
    h-screen flex
  >
    <div
      w-50vw h-screen
      flex="~ col"
      justify-around
    >
      <own-player scale-55 />
      <div h-20vh />
    </div>
    <div
      w-50vw h-screen
      flex="~ col"
      justify-around
    >
      <opponent-player scale-55 />
      <div h-20vh />
    </div>
  </div>
</template>
