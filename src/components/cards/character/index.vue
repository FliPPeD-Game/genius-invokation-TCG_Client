<script setup lang="ts">
interface Props {
  src: string
  hp?: number
}
const { hp, src } = defineProps<Props>()

// const getCharacterSrc = (name: string): string => {
//   const picModules = import.meta.glob('./assets/*.png', { eager: true })
//   const path = `./assets/${name}.png`
//   return (picModules[path]! as { default: string }).default
// }
</script>

<template>
  <div
    w-30 h-52
  >
    <img
      class="animate__animated animate__fadeInDown"
      :src="src"
      absolute
      w-30 h-52
      align-bottom
    >
    <div
      class="bg-bar animate__animated animate__fadeInDown"
      w-30 h-52
      absolute
      bg="[url(/cards/card_bg.png)] no-repeat cover"
    />
    <div
      v-if="hp !== undefined"
      class="hp-icon"
      absolute
      flex justify-center items-center
    >
      <span text-shadow translate-y-2>
        {{ hp }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.hp-icon {
  font-family: 'Game Font';
  font-size: 4.5vw;
  color: #fff;
  background-size: 100% 100%;
  width: 6.4vw;
  height: 7.4vw;
  left: -1vw;
  top: -2vw;
  background-image:url(/cards/hp_icon.png);
  font-weight: 500;
}
</style>
