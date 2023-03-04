<script setup lang="ts">
interface Props {
  title: string
  cards: any[]
  isDefault: boolean
}

const { title, cards, isDefault } = defineProps<Props>()

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
  <div
    class="character-box"
    relative
    w-80 h-40
    bg="white/20" shadow-lg
    rounded-xl border="xl"
    transition duration-300 ease-in-out
    hover:shadow-2xl
    flex block
    c-white
    cursor="pointer"
  >
    <div
      scale-60
      w-40
      translate-y--5 translate-x--2
    >
      <Character
        v-for="(item, index) in cards"
        :key="index"
        absolute
        :class="computedClassName(index)"
        :src="item.resource"
        transition duration-300 ease-in-out
      />
    </div>
    <div w-40 flex="~ col" justify-center pl-6>
      <div class="text-2xl font-bold">
        {{ title }}
      </div>
      <div class="text-sm mt-2">
        Lv. 80
      </div>
    </div>
    <div
      v-if="isDefault"
      i-material-symbols-swords-outline
      absolute
      bottom-3 right-3
    />
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
