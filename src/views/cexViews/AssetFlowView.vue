<template>
  <div class="mb-3">
    <div class="h1 m-0">Asset Flow</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent
          :subheader="`<span class='badge bg-lime-lt'>IN FLOW</span> <span class='badge bg-pink-lt'>OUT FLOW</span>`"
        >
          <div
            class="w-100 chart-canvas"
            style="min-height: 180px; aspect-ratio: 16/9"
            ref="flow"
          ></div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import { Canvas } from 'butterfly-dag'
import FlowNode from '@/components/FlowNode'
import { onMounted, ref } from 'vue'
import { formatNumber } from '@/helpers'

const props = defineProps({
  data: Object
})

const flow = ref(null)
onMounted(() => {
  const flowCanvas = flow.value as HTMLElement | null
  if (!flowCanvas) return
  const nodes = Array<any>()
  const edges = Array<any>()
  nodes.push({
    id: 'root',
    type: 'root',
    left: 400,
    top: 300,
    logoUrl: props.data?.logoUrl,
    name: props.data?.name,
    Class: FlowNode
  })
  props.data?.assetFlow?.asset_flow?.inFlow.forEach((value: any, idx: number) => {
    nodes.push({
      id: `inFlow-${idx}`,
      type: 'inFlow',
      left: 100,
      top: idx * 120 + 50,
      name: value.entities,
      volume: formatNumber(value.totalValue),
      Class: FlowNode
    })
    edges.push({
      source: `inFlow-${idx}`,
      target: `root`,
      arrow: true,
      type: 'node'
    })
  })
  props.data?.assetFlow?.asset_flow?.outFlow.forEach((value: any, idx: number) => {
    nodes.push({
      id: `outFlow-${idx}`,
      type: 'outFlow',
      left: 700,
      top: idx * 120 + 50,
      name: value.entities,
      volume: formatNumber(value.totalValue),
      Class: FlowNode
    })
    edges.push({
      source: `root`,
      target: `outFlow-${idx}`,
      arrow: true,
      type: 'node'
    })
  })

  let canvas = new Canvas({
    root: flowCanvas,
    zoomable: true,
    draggable: true,
    moveable: true
  })
  canvas.draw({
    nodes,
    edges
  })
})
</script>

<style scoped>
.chart-canvas {
  background: white;
  background-image: radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0);
  background-size: 30px 30px;
  background-position: -19px -19px;
}
</style>
