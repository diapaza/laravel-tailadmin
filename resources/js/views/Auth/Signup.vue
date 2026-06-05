<template>
  <AuthPageLayout title="Sign Up" description="Enter your email and password to sign up!">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
      <SocialButton provider="google" label="Sign up with Google" />
      <SocialButton provider="x" label="Sign up with X" />
    </div>

    <Divider />

    <form @submit.prevent="handleSubmit">
      <div class="space-y-5">
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <label
              for="fname"
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              First Name<span class="text-error-500">*</span>
            </label>
            <BaseInput
              v-model="firstName"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
            />
          </div>
          <div class="sm:col-span-1">
            <label
              for="lname"
              class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Last Name<span class="text-error-500">*</span>
            </label>
            <BaseInput
              v-model="lastName"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <label
            for="email"
            class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            Email<span class="text-error-500">*</span>
          </label>
          <BaseInput
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            for="password"
            class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            Password<span class="text-error-500">*</span>
          </label>
          <BaseInput
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="Enter your password"
          >
            <template #append>
              <span @click="togglePasswordVisibility" class="cursor-pointer">
                <EyeOffIcon v-if="!showPassword" class="fill-gray-500 dark:fill-gray-400" />
                <EyeIcon v-else class="fill-gray-500 dark:fill-gray-400" />
              </span>
            </template>
          </BaseInput>
        </div>

        <div>
          <BaseCheckbox v-model="agreeToTerms">
            <p class="inline-block font-normal text-gray-500 dark:text-gray-400">
              By creating an account means you agree to the
              <span class="text-gray-800 dark:text-white/90">Terms and Conditions,</span>
              and our
              <span class="text-gray-800 dark:text-white">Privacy Policy</span>
            </p>
          </BaseCheckbox>
        </div>

        <BaseButton type="submit" variant="primary" class="w-full">
          Sign Up
        </BaseButton>
      </div>
    </form>

    <div class="mt-5">
      <p class="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Already have an account?
        <router-link
          to="/signin"
          class="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Sign In
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
import EyeIcon from '@/icons/EyeIcon.vue'
import EyeOffIcon from '@/icons/EyeOffIcon.vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const agreeToTerms = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  console.log('Form submitted', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    agreeToTerms: agreeToTerms.value,
  })
}
</script>
