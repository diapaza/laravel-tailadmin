<template>
  <AuthPageLayout title="Sign In" description="Enter your email and password to sign in!">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
      <SocialButton provider="google" label="Sign in with Google" />
      <SocialButton provider="x" label="Sign in with X" />
    </div>

    <Divider />

    <form @submit.prevent="handleSubmit">
      <div class="space-y-5">
        <FormField label="Email" labelFor="email" required>
          <BaseInput
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="info@gmail.com"
          />
        </FormField>

        <FormField label="Password" labelFor="password" required>
          <PasswordInput
            v-model="password"
            id="password"
            placeholder="Enter your password"
          />
        </FormField>

        <div class="flex items-center justify-between">
          <BaseCheckbox v-model="keepLoggedIn" label="Keep me logged in" />
          <router-link
            to="/reset-password"
            class="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Forgot password?
          </router-link>
        </div>

        <BaseButton type="submit" variant="primary" class="w-full">
          Sign In
        </BaseButton>
      </div>
    </form>

    <div class="mt-5">
      <p class="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Don't have an account?
        <router-link
          to="/signup"
          class="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Sign Up
        </router-link>
      </p>
    </div>
  </AuthPageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthPageLayout from '@/components/base/AuthPageLayout.vue'
import SocialButton from '@/components/base/SocialButton.vue'
import Divider from '@/components/base/Divider.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import FormField from '@/components/base/FormField.vue'
import PasswordInput from '@/components/base/PasswordInput.vue'

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', {
    email: email.value,
    password: password.value,
    keepLoggedIn: keepLoggedIn.value,
  })
}
</script>
