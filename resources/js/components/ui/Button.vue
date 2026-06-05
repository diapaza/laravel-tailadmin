<template>
  <BaseButton
    :type="type"
    :size="size"
    :variant="variant"
    :disabled="disabled"
    :className="className"
    :startIcon="startIcon"
    :endIcon="endIcon"
    @click="onClick"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'danger'
  startIcon?: object
  endIcon?: object
  onClick?: (event: MouseEvent) => void
  className?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  size: 'md',
  variant: 'primary',
  className: '',
  disabled: false,
})

const onClick = (event: MouseEvent) => {
  if (!props.disabled && props.onClick) props.onClick(event)
}
</script>
