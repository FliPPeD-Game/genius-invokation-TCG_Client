<script setup lang="ts">
interface Props {
  modelValue?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])
const dialogVisible = useVModel(props, 'modelValue', emit)
</script>

<template>
  <el-dialog

    v-model="dialogVisible"
    destroy-on-close
    align-center
    :show-close="false"
  >
    <slot />
  </el-dialog>
</template>
