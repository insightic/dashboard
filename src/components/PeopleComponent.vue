<template>
  <div class="card">
    <div class="card-body p-4 text-center">
      <span
        class="avatar avatar-xl mb-3 rounded"
        :style="`background-image: url(${avatar})`"
      ></span>
      <h3 class="m-0 mb-1">{{ name }}</h3>
      <div class="text-secondary">{{ title }}</div>
    </div>
    <div class="d-flex">
      <a :href="twitter" class="card-btn" target="_blank" v-if="twitter">
        <IconBrandTwitter class="text-secondary me-2" :stroke-width="1" :size="18" />
        Twitter
      </a>
      <a :href="linkedin" class="card-btn" target="_blank" v-if="linkedin">
        <IconBrandLinkedin class="text-secondary me-2" :stroke-width="1" :size="18" />
        LinkedIn
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-vue'

defineProps({
  avatar: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  twitter: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  }
})
</script>
