<template>
  <nav class="fixed-top navbar navbar-expand navbar-dark bg-dark text-light" style="height: 56px">
    <div class="container-xl">
      <div
        class="d-flex align-items-center"
        style="width: 128px; cursor: pointer"
        @click="router.push('/')"
      >
        <div class="me-2 rounded bg-light" style="padding: 4px">
          <img src="/logo.png" alt="" width="24" height="24" />
        </div>
        <div class="m-0">Insightic</div>
      </div>
      <div class="m-0" style="cursor: pointer" @click="router.push('/')">
        <span>Web3 Dashboard <IconSwitchHorizontal :size="16" /></span>
      </div>
      <div style="width: 128px"></div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { IconSwitchHorizontal } from '@tabler/icons-vue'

const router = useRouter()
</script>
