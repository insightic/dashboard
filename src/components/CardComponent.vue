<template>
  <el-card>
    <div class="w-100 h-100 small cursor-font">
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
  }
})
</script>
