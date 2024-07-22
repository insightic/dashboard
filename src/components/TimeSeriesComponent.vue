<template>
  <el-card>
    <div class="mb-2 d-flex align-items-center">
      <div class="me-2">{{ title }}</div>
      <el-tooltip
        v-if="titleTooltip"
        class="box-item"
        effect="dark"
        :content="titleTooltip"
        raw-content
        placement="top-start"
      >
        <IconInfoCircle :size="16" style="cursor: pointer" />
      </el-tooltip>
    </div>
    <div ref="chartDiv"></div>
  </el-card>
</template>

<script lang="ts" setup>
import { type PropType, ref, onMounted } from 'vue'
import { createChart, CrosshairMode, type Time } from 'lightweight-charts'
import { IconInfoCircle } from '@tabler/icons-vue'

const props = defineProps({
  title: { type: String, required: true },
  titleTooltip: { type: String, default: null },
  labels: { type: Array as PropType<string[]>, required: true },
  data: { type: Array as PropType<{ name: string; data: number[] }[]>, required: true },
  useHistogramChart: { type: Boolean, default: false },
  useBins: { type: Boolean, default: false }
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
      time: props.useBins ? (i as Time) : props.labels[i],
      value: v
    }))
  )

  if (!values || !values.length) {
    return
  }

  const chart = createChart(chartDiv.value as HTMLElement, {
    height: 300,
    layout: {
      fontFamily: `'Lucida Console', Monaco, monospace`,
      background: { color: 'transparent' },
      textColor: '#fff'
    },
    grid: {
      vertLines: { color: 'transparent' },
      horzLines: { color: 'transparent' }
    },
    crosshair: {
      mode: CrosshairMode.Normal
    },
    handleScale: false,
    handleScroll: false
  })

  if (props.useBins) {
    chart.applyOptions({
      crosshair: {
        mode: CrosshairMode.Hidden
      },
      timeScale: {
        timeVisible: false,
        secondsVisible: false,
        tickMarkFormatter: (time: any) => {
          return props.labels[time]
        }
      }
    })
  }

  if (!props.useHistogramChart) {
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
    } else {
      const colors = ['#0054a6', '#43ff64']
      for (let i = 0; i < values.length; i++) {
        const lineSeries = chart.addLineSeries()
        lineSeries.applyOptions({
          color: colors[i]
        })
        lineSeries.setData(values[i])
      }
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      const histogramSeries = chart.addHistogramSeries()
      histogramSeries.setData(values[i])
    }
  }

  chart.timeScale().fitContent()
})
</script>
