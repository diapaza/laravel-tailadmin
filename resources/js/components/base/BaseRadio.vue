<template>
  <div :class="['space-y-2', className]">
    <label v-for="option in options" :key="option.value" :class="['flex items-center gap-3 text-sm font-medium cursor-pointer select-none', optionClass]">
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === modelValue"
        :disabled="disabled || option.disabled"
        class="sr-only"
        @change="onChange(option.value, $event)"
      />
      <span
        :class="[
          'flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-all',
          option.value === modelValue ? 'border-brand-500 bg-brand-500' : 'bg-transparent dark:border-gray-700',
          disabled || option.disabled ? 'opacity-50 cursor-not-allowed' : '',
        ]"
      >
        <span v-if="option.value === modelValue" class="h-2.5 w-2.5 rounded-full bg-white"></span>
      </span>
      <span>{{ option.label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string | number
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>
  name?: string
  disabled?: boolean
  className?: string
  optionClass?: string
}>(), {
  modelValue: '',
  options: () => [],
  name: 'radio-group',
  disabled: false,
  className: '',
  optionClass: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onChange = (value: string | number, event: Event) => {
  if (!(props.disabled || (event.target as HTMLInputElement).disabled)) {
    emits('update:modelValue', value)
  }
}
</script>
