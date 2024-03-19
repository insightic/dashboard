<template>
  <div class="mb-3" v-if="data">
    <div class="h1 m-0">Smart Contract Validation</div>
    <div class="row">
      <div class="col-md-4 my-2" v-for="(info, idx) in data?.scv" :key="idx">
        <CardComponent class="h-100" :topline="calculateTopline(info.pass)">
          <div class="h3 mb-0">#{{ info.id }} - {{ info.title }}</div>
          <div class="fix-line mb-2" v-html="render(info.description)"></div>
          <div style="text-decoration: underline">whitepaper</div>
          <div class="fix-line" v-html="render(info.whitepaper)"></div>
          <div style="text-decoration: underline">code</div>
          <div class="fix-line" v-html="render(info.code)"></div>
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

function calculateTopline(pass: string) {
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
