<template>
  <el-card>
    <div class="mb-2">{{ title }}</div>
    <div ref="chartDiv"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { type PropType, ref, onMounted } from 'vue'
import { createChart } from 'lightweight-charts'

const props = defineProps({
  title: { type: String, required: true },
  labels: { type: Array as PropType<string[]>, required: true },
  data: { type: Array as PropType<{ name: string; data: number[] }[]>, required: true }
})

const chartDiv = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const rawValues = []
  for (let i = 0; i < props.data.length; i++) {
    const data = props.data[i].data
    const value = []
    for (let j = 0; j < props.labels.length; j++) {
      value.push(j < data.length ? data[j] : 0)
    }
    rawValues.push(value)
  }

  const values = rawValues.map((value) =>
    value.map((v, i) => ({
      time: props.labels[i],
      value: v
    }))
  )

  if (!values || !values.length) {
    return
  }

  const chart = createChart(chartDiv.value as HTMLElement, {
    height: 300,
    layout: {
      background: { color: 'transparent' },
      textColor: '#fff'
    },
    grid: {
      vertLines: { color: 'transparent' },
      horzLines: { color: 'transparent' }
    }
  })

  if (values.length == 1) {
    const lineSeries = chart.addLineSeries()
    lineSeries.setData(values[0])
    const areaSeries = chart.addAreaSeries({
      lastValueVisible: false,
      crosshairMarkerVisible: false,
      lineColor: 'transparent', // hide the line
      topColor: 'rgba(56, 33, 110,0.6)',
      bottomColor: 'rgba(56, 33, 110, 0.1)'
    })
    areaSeries.setData(values[0])
  }

  chart.timeScale().fitContent()
})
</script>
