<script setup lang="ts">
interface Props {
  modelValue?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])
const dialogVisible = useVModel(props, 'modelValue', emit)

const dialog = ref<HTMLDialogElement>()
watch(
  () => dialogVisible.value,
  (val) => {
    if (val) {
      dialog.value?.showModal()
      dialog.value?.addEventListener('click', () => {
        dialog.value?.close()
        dialogVisible.value = false
      })
    }
  },
)
</script>

<template>
  <dialog
    id="dialog"
    ref="dialog"
    p-0 shadow-2xl bg="white/0"
  >
    <div @click.stop>
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
dialog::backdrop{
  background-color: rgba(0, 0, 0, 0.5);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
