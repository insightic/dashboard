<template>
  <NavBar />

  <div style="margin-top: 56px">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
</script>
