<script setup lang="ts">
interface Props {
  title: string
  cards: any[]
  isDefault: boolean
  selfIndex: number
}

const { title, cards, selfIndex } = defineProps<Props>()

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
    class="character-box group"
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
    <div
      w-40
      flex="~ col" justify-center pl-6
    >
      <div
        group-hover="hidden"
        class="animate__animated animate__fadeInRight"
      >
        <div text-2xl font-bold>
          {{ title }}
        </div>
        <div text-sm mt-2>
          Lv. 80
        </div>
      </div>
      <div
        hidden
        group-hover="flex flex-col items-start justify-center"
        class="animate__animated animate__fadeInRight"
        w-full h-full
        text-2xl font-bold decoration-2 underline-offset-5
      >
        <button
          hover-underline
        >
          配置卡牌
        </button>
        <button
          mt-3 hover-underline
          @click="USER_CARDS.index = selfIndex"
        >
          出战
        </button>
      </div>
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div
        v-if="selfIndex === USER_CARDS.index"
        i-material-symbols-swords-outline
        absolute
        bottom-3 right-3
      />
    </Transition>
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
