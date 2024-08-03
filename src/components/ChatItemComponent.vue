<template>
  <div class="d-flex mb-3" :class="isUser && 'flex-row-reverse'">
    <div :class="isUser ? 'ms-2' : 'me-2'">
      <div
        class="rounded p-1"
        :style="{
          backgroundColor: '#ffffffdd',
          width: '42px',
          height: '42px'
        }"
      >
        <img class="me-2" :src="avatarSrc" alt="" width="100%" height="100%" />
      </div>
    </div>
    <div
      class="p-2 rounded"
      :style="{
        backgroundColor: isUser ? 'var(--el-color-success)' : 'var(--el-color-primary)',
        minWidth: '300px',
        maxWidth: '80%'
      }"
    >
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isUser: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  }
})

const avatarSrc = computed(() => {
  return props.isUser
    ? 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    : 'https://insightic.io/logo.png'
})
</script>
