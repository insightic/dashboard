<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="ms-auto text-secondary small" v-if="updateAt">
        Last Update: {{ formatDate(updateAt) }}
      </div>
    </div>
    <div class="flex-grow-1">
      <div class="table-responsive">
        <table class="table card-table">
          <thead>
            <tr>
              <th>Highest</th>
              <th>Lowest</th>
              <th>Mean</th>
              <th>Median</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ highest }}</td>
              <td>{{ lowest }}</td>
              <td>{{ mean }}</td>
              <td>{{ median }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="height: 500px">
      <apexchart
        v-if="data.length > 0 && data[0].data.length > 0"
        height="100%"
        :type="type"
        :series="fixedData"
        :options="{
          chart: {
            // sparkline: { enabled: true },
            // animations: { enabled: false }
          },
          yaxis: {
            labels: {
              formatter: function (v: number) {
                return v.toFixed(2)
              }
            }
          },
          legend: {
            show: false
          },
          dataLabels: { enabled: false },
          fill: { opacity: 0.16, type: 'solid' },
          stroke: {
            width: 2,
            lineCap: 'round',
            curve: 'smooth'
          },
          labels: labels,
          colors: ['#0054a6', '#43ff64']
        }"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { formatDate, formatNumber } from '../helpers'

const props = defineProps({
  type: { type: String, default: 'area' },
  title: { type: String, required: true },
  labels: { type: Array as PropType<string[]>, required: true },
  data: { type: Array as PropType<{ name: string; data: number[] }[]>, required: true },
  updateAt: { type: Date, default: null }
})

function filterNaN(v: any) {
  v = Number(v)
  if (Number.isNaN(v)) return 0
  return v
}

const fixedData = computed(() => {
  return props.data.map((d) => ({
    name: d.name,
    data: d.data.map((v) => filterNaN(v))
  }))
})

const highest = computed(() => {
  const values = fixedData.value
    .map((d) => d.data)
    .map((d) => (d.length > 0 ? Math.max(...d) : 0))
    .map((d) => formatNumber(d))
  return values.join('/')
})

const lowest = computed(() => {
  const values = fixedData.value
    .map((d) => d.data)
    .map((d) => (d.length > 0 ? Math.min(...d) : 0))
    .map((d) => formatNumber(d))
  return values.join('/')
})

const mean = computed(() => {
  const values = fixedData.value
    .map((d) => d.data)
    .map((d) => (d.length > 0 ? d.reduce((a, b) => a + b) / d.length : 0))
    .map((d) => formatNumber(d))
  return values.join('/')
})

const median = computed(() => {
  const findMedian = function (array: Array<number>) {
    const sorted = Array.from(array).sort((a, b) => filterNaN(a) - filterNaN(b))
    const middle = Math.floor(sorted.length / 2)

    if (sorted.length % 2 === 0) {
      return (filterNaN(sorted[middle - 1]) + filterNaN(sorted[middle])) / 2
    }
    return filterNaN(sorted[middle])
  }

  const values = fixedData.value
    .map((d) => d.data)
    .map((d) => (d.length > 0 ? findMedian(d) : 0))
    .map((d) => formatNumber(d))
  return values.join('/')
})
</script>
