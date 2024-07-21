<template>
  <div class="mb-3" v-if="data">
    <div class="h1 mb-2">Smart Contract Validation</div>
    <div class="row">
      <div class="col-md-4 my-2" v-for="(info, idx) in data?.scv" :key="idx">
        <CardComponent class="h-100">
          <div class="mb-2" :style="{ color: `var(--el-color-${calculateType(info.pass)}` }">
            #{{ info.id }} - {{ info.title }}
          </div>
          <div style="font-size: 0.75rem">
            <div class="fix-line mb-2" v-html="render(info.description)"></div>
            <div style="text-decoration: underline">whitepaper</div>
            <div class="fix-line mb-1" v-html="render(info.whitepaper)"></div>
            <div style="text-decoration: underline">code</div>
            <div class="fix-line" v-html="render(info.code)"></div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { render } from '@/helpers'
import CardComponent from '@/components/CardComponent.vue'

defineProps({
  data: Object
})

function calculateType(pass: string) {
  pass = pass.toLowerCase()
  if (pass === 'yes') {
    return 'success'
  }
  if (pass === 'no') {
    return 'danger'
  }
  return 'warning'
}
</script>

<style>
.fix-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
