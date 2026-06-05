<template>
  <Modal v-model:isOpen="isOpen" :title="title" :size="size" @close="handleClose">
    <template #body>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <slot name="form-fields">
          <div class="grid grid-cols-1 gap-4">
            <label class="block">
              <span class="text-sm text-slate-700 dark:text-slate-300">Nombre</span>
              <BaseInput
                v-model="form.name"
                type="text"
                className="mt-1 block w-full"
                :disabled="loading"
              />
            </label>

            <label class="block">
              <span class="text-sm text-slate-700 dark:text-slate-300">Email</span>
              <BaseInput
                v-model="form.email"
                type="email"
                className="mt-1 block w-full"
                :disabled="loading"
              />
            </label>
          </div>
        </slot>
      </form>
    </template>

    <template #actions>
      <BaseButton type="button" variant="outline" @click="handleClose" :disabled="loading">
        Cancelar
      </BaseButton>
      <BaseButton type="button" variant="primary" @click="onSubmit" :disabled="loading">
        <span v-if="!loading">Guardar</span>
        <span v-else>Guardando...</span>
      </BaseButton>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps<{
  isOpen: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'
  loading?: boolean
  initialData?: Record<string, any>
}>()

const emits = defineEmits<{
  (e: 'update:isOpen', val: boolean): void
  (e: 'submit', payload: any): void
  (e: 'close'): void
}>()

const isOpen = computed({
  get: () => props.isOpen,
  set: (val) => emits('update:isOpen', val),
})

const form = reactive({ ...props.initialData })

watch(
  () => props.initialData,
  (v) => {
    Object.assign(form, v || {})
  },
)

const onSubmit = async () => {
  emits('submit', { ...form })
}

const handleClose = () => {
  for (const k in form) {
    // @ts-ignore
    form[k] = props.initialData?.[k] ?? ''
  }
  emits('update:isOpen', false)
  emits('close')
}
</script>
