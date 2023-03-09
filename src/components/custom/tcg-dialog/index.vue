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
      })
      dialog.value?.addEventListener('close', () => {
        dialogVisible.value = false
      })
    }
    else {
      dialog.value?.close()
    }
  },
)
</script>

<template>
  <dialog
    id="dialog"
    ref="dialog"
    p-0 bg="white/0"
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
</style>
