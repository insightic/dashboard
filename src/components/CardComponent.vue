<template>
  <el-card>
    <div v-if="topline" class="card-status-top" :class="`bg-${topline}`"></div>
    <div class="card-body">
      <div v-if="subheader" class="subheader" v-html="subheader"></div>
      <slot />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
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
