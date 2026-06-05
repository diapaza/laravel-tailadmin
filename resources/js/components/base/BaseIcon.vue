<template>
  <component :is="icon" :class="['inline-flex items-center justify-center', className]" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: object
  className?: string
}>(), {
  className: '',
})
</script>
