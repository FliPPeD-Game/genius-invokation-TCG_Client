<script setup lang="ts">
import defaultAvatar from './defaultAvatar.png'

interface Props {
  src: string
  alt?: string
}

const { src, alt } = defineProps<Props>()

const avatarSrc = ref(src ?? defaultAvatar)

const handleError = () => {
  avatarSrc.value = defaultAvatar
}
</script>

<template>
  <div
    rounded-full
    border="double 4 gray-400"
    overflow-hidden
    inline-block
    cursor-pointer
    flex justify-center items-center
  >
    <img
      :src="avatarSrc"
      :alt="alt"
      @error="handleError"
    >
  </div>
</template>
