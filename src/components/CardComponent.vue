<template>
  <div class="card">
    <div v-if="topline" class="card-status-top" :class="`bg-${topline}`"></div>
    <div class="card-body">
      <div v-if="subheader" class="subheader">{{ subheader }}</div>

      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  subheader: {
    type: String,
    default: null
  },
  topline: {
    type: String,
    default: null
  }
})
</script>
