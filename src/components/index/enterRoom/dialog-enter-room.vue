<script setup lang="ts">
interface Props {
  modelValue?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])
const dialogVisible = useVModel(props, 'modelValue', emit)

// const handleLogin = () => {
//   dialogVisible.value = false
// }
</script>

<template>
  <tcg-dialog v-model="dialogVisible">
    <enter-room />
  </tcg-dialog>
</template>
