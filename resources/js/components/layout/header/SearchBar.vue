<template>
  <div class="hidden lg:block">
    <form>
      <div class="relative">
        <BaseInput
          type="text"
          placeholder="Search or type command..."
          className="dark:bg-dark-900 w-full bg-transparent py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
        >
          <template #prepend>
            <button class="absolute left-0">
              <SearchIcon class="fill-gray-500 dark:fill-gray-400" />
            </button>
          </template>
          <template #append>
            <button
              class="inline-flex items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400"
            >
              <span> ⌘ </span>
              <span> K </span>
            </button>
          </template>
        </BaseInput>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import SearchIcon from '@/icons/SearchIcon.vue'
</script>
