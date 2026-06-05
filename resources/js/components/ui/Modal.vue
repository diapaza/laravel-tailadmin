<template>
  <BaseModal
    v-model:isOpen="isOpen"
    :title="title"
    :size="size"
    :ariaLabel="ariaLabel"
    :closeOnBackdrop="closeOnBackdrop"
    :contentClass="contentClass"
    @close="onClose"
  >
    <template #header>
      <slot name="header" />
    </template>
    <template #body>
      <slot name="body">
        <slot />
      </slot>
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
    <template #actions>
      <slot name="actions" />
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/base/BaseModal.vue'

import { computed } from 'vue'

const props = withDefaults(defineProps<{
  isOpen: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'
  ariaLabel?: string
  closeOnBackdrop?: boolean
  contentClass?: string
}>(), {
  size: 'md',
  ariaLabel: 'Modal dialog',
  closeOnBackdrop: true,
  contentClass: '',
})

const emits = defineEmits<{
  (e: 'update:isOpen', val: boolean): void
  (e: 'close'): void
}>()

const isOpen = computed({
  get: () => props.isOpen,
  set: (value: boolean) => emits('update:isOpen', value),
})

const onClose = () => {
  emits('close')
}
</script>
