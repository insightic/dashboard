<template>
  <el-card>
    <div class="p-2 text-center d-flex flex-column">
      <div
        class="avatar avatar-xl mb-3 rounded mx-auto"
        :style="{
          backgroundImage: `url(${avatar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '64px',
          height: '64px'
        }"
      ></div>
      <h4 class="m-0 mb-1">{{ name }}</h4>
      <div class="text-secondary">{{ title }}</div>
      <div class="d-flex justify-content-center">
        <a :href="twitter" class="card-btn" target="_blank" v-if="twitter">
          <IconBrandX
            class="me-2"
            :style="{ color: `var(--el-color-primary)` }"
            :stroke-width="1"
            :size="18"
          />
        </a>
        <a :href="linkedin" class="card-btn" target="_blank" v-if="linkedin">
          <IconBrandLinkedin
            class="me-2"
            :style="{ color: `var(--el-color-primary)` }"
            :stroke-width="1"
            :size="18"
          />
        </a>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { IconBrandLinkedin, IconBrandX } from '@tabler/icons-vue'

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
