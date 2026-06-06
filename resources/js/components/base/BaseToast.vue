<template>
  <Toaster
    position="bottom-right"
    :close-button="true"
    :duration="4000"
    rich-colors
    :visible-toasts="6"
  />
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>
