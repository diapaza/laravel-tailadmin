<template>
  <div :class="['inline-flex items-center justify-center', className]">
    <span class="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
    <span v-if="label" class="ml-2 text-sm text-gray-500 dark:text-gray-400">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  className?: string
}>(), {
  label: '',
  className: '',
})
</script>
