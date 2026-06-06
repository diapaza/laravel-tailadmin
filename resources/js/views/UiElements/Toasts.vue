<template>
  <AdminLayout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />
    <div class="space-y-5 sm:space-y-6">
      <ComponentCard title="Toast Notifications">
        <div class="flex flex-wrap gap-3">
          <BaseButton variant="primary" @click="showSuccess">
            Success Toast
          </BaseButton>
          <BaseButton variant="danger" @click="showError">
            Error Toast
          </BaseButton>
          <BaseButton variant="outline" @click="showWarning">
            Warning Toast
          </BaseButton>
          <BaseButton variant="secondary" @click="showInfo">
            Info Toast
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

const currentPageTitle = ref('Toasts')

const showSuccess = () => toast.success('Operation completed successfully!')
const showError = () => toast.error('An error occurred while processing your request.')
const showWarning = () => toast.warning('Please review your input data before submitting.')
const showInfo = () => toast.info('A new version is available. Refresh to update.')
</script>
