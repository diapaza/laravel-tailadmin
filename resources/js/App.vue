<template>
  <ThemeProvider>
    <SidebarProvider>
      <RouterView />
      <BaseToast />
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
import BaseToast from './components/base/BaseToast.vue'
</script>
