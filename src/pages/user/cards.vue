<script setup lang="ts">
const computedClassName = (index: number) => {
  if (index === 0)
    return 'first-character-box'
  else if (index === 1)
    return 'second-character-box'
  else if (index === 2)
    return 'three-Character-box'
}
</script>

<template>
  <div relative pl-50 class="character-box">
    <div v-for="item in 3" :key="item" absolute>
      <Character
        :class="computedClassName(item - 1)"
        character="Keqing"
        :hp="0"
        transition duration-400 ease-in-out
        top-0
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.character-box {
  &:hover {
    .first-character-box {
      transform: rotate(3deg) translateX(2rem) translateY(-5rem);
    }
    .second-character-box {
      transform: rotate(-11deg) translateY(-1rem);
    }
    .three-Character-box {
      transform: rotate(12deg) translateX(5rem) translateY(-1rem);
    }
  }
  .first-character-box {
    transform: rotate(-10deg);
  }
  .second-character-box {
    transform: rotate(-2deg) translateX(2rem) translateY(0.2rem);
  }
  .three-Character-box {
    transform: rotate(10deg) translateX(4.2rem);
  }
}
</style>
