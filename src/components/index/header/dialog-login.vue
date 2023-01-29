<script setup lang="ts">
interface Props {
  modelValue?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])
const dialogVisible = useVModel(props, 'modelValue', emit)
</script>

<template>
  <tcg-dialog v-model="dialogVisible">
    <user-login />
  </tcg-dialog>
</template>
