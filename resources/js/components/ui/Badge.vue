<template>
  <BaseBadge
    :variant="variant"
    :size="size"
    :color="color"
    :className="className"
    :startIcon="startIcon"
    :endIcon="endIcon"
  >
    <slot />
  </BaseBadge>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/base/BaseBadge.vue'

interface BadgeProps {
  variant?: 'light' | 'solid'
  size?: 'sm' | 'md'
  color?: 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark'
  startIcon?: object
  endIcon?: object
  className?: string
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'light',
  color: 'primary',
  size: 'md',
  className: '',
})
</script>
