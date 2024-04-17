<template>
  <component :is="components[viewType]" />
</template>

<script lang="ts" setup>
import { ref, computed, type Ref, type ComputedRef, type Component, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import StablecoinView from './StablecoinView.vue'
import CEXView from './CEXView.vue'

const components: Ref<{ [key: string]: Component }> = ref({
  stablecoin: markRaw(StablecoinView),
  cex: markRaw(CEXView)
})

const route = useRoute()
const viewType: ComputedRef<string> = computed(() => route.params['type'] as string)
</script>
