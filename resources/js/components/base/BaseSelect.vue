<template>
  <div :class="['relative w-full', wrapperClass]">
    <select
      :id="id"
      :name="name"
      :disabled="disabled"
      :class="selectClasses"
      :value="modelValue"
      @change="onChange"
    >
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>

    <span class="absolute inset-y-0 right-4 z-10 flex items-center text-gray-700 pointer-events-none dark:text-gray-400">
      <ChevronDownIcon class="h-5 w-5" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ChevronDownIcon from '@/icons/ChevronDownIcon.vue'

const props = withDefaults(defineProps<{
  modelValue?: string | number
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>
  placeholder?: string
  disabled?: boolean
  id?: string
  name?: string
  state?: 'default' | 'error' | 'success'
  className?: string
  wrapperClass?: string
}>(), {
  modelValue: '',
  options: () => [],
  placeholder: '',
  disabled: false,
  state: 'default',
  className: '',
  wrapperClass: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', event: Event): void
}>()

const stateClasses = {
  default: 'border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800',
  error: 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800',
  success: 'border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800',
}

const selectClasses = computed(() => [
  'h-11 w-full appearance-none rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30',
  stateClasses[props.state],
  props.className,
])

const onChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  emits('update:modelValue', value)
  emits('change', event)
}
</script>
