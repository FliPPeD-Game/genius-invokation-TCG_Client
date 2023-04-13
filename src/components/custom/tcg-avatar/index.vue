<script setup lang="ts">
import defaultAvatar from './defaultAvatar.png'

interface Props {
  src?: string
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

    border="double 4 gray-400"

    inline-block flex cursor-pointer items-center justify-center overflow-hidden rounded-full
  >
    <img
      :src="avatarSrc"
      :alt="alt"
      @error="handleError"
    >
  </div>
</template>
