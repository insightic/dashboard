<template>
  <div class="mb-3">
    <div class="h1 m-0">Overview</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent class="h-100">
          <div v-html="render(data?.overview)"></div>
        </CardComponent>
      </div>
    </div>
  </div>

  <div v-for="(info, idx) in data?.details" :key="idx" class="mb-3">
    <div class="h1 m-0">{{ info.title }}</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent class="h-100">
          <div v-html="render(info.value)"></div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { render } from '@/helpers'
import CardComponent from '@/components/CardComponent.vue'

const props = defineProps({
  data: Object
})

console.log(props)
</script>
