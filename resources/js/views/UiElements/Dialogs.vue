<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Dialog Notifications">
        <div class="flex flex-wrap gap-3">
          <BaseButton variant="danger" @click="handleDelete">
            Delete
          </BaseButton>
          <BaseButton variant="primary" @click="handleSuccess">
            Success
          </BaseButton>
          <BaseButton variant="outline" @click="handleInfo">
            Continue
          </BaseButton>
          <BaseButton variant="secondary" @click="handlePrompt">
            Prompt
          </BaseButton>
        </div>
      </ComponentCard>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/shared/PageBreadcrumb.vue'
import ComponentCard from '@/components/shared/ComponentCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useDialog } from '@/composables/useDialog'

const { confirm, alert, prompt } = useDialog()
const currentPageTitle = ref('Dialogs')

async function handleDelete() {
  const ok = await confirm({
    title: 'Delete item?',
    description: 'This action cannot be undone.',
    icon: 'warning',
    confirmLabel: 'Delete',
    destructive: true,
  })
  if (ok) toast.success('Item deleted')
}

async function handleSuccess() {
  await alert({
    title: 'Saved',
    description: 'Changes saved successfully.',
    icon: 'success',
  })
}

async function handleInfo() {
  const ok = await confirm({
    title: 'Continue?',
    description: 'Proceed with this action?',
    icon: 'info',
    confirmLabel: 'Continue',
  })
  if (ok) toast.success('Action completed')
}

async function handlePrompt() {
  const value = await prompt({
    title: 'Your name',
    placeholder: 'Enter your name',
    icon: 'question',
  })
  if (value) toast.success(`Hello, ${value}!`)
}
</script>
