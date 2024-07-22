<template>
  <div class="mb-3">
    <div class="d-flex">
      <div class="h1 m-0">AML/KYT</div>
      <div class="ms-auto">
        <el-select v-model="activeChain" placeholder="Select" style="width: 240px">
          <el-option v-for="item in chains" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 my-2" v-if="activeChainData">
        <TimeSeriesComponent
          title="AVG Top 100 Holder Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="activeChainData.map((d: any) => `${formatDate(d?.created_date, 'YYYY-MM-DD')}`)"
          :data="[
            {
              name: 'Top 100 Holder Risk Score',
              data: activeChainData.map((d: any) => Number(d['avg_top_100_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2" v-if="activeChainData">
        <TimeSeriesComponent
          title="AVG Top 1000 Holder Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="activeChainData.map((d: any) => `${formatDate(d?.created_date, 'YYYY-MM-DD')}`)"
          :data="[
            {
              name: 'Top 1000 Holder Risk Score',
              data: activeChainData.map((d: any) => Number(d['avg_top_1000_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-12 my-2" v-if="activeChainData">
        <ChartComponent
          type="bar"
          title="Top 1000 Holder Risk Score Distribution"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="
            Object.keys(activeChainData[activeChainData.length - 1].top_1k_holder_score_dist_bin10)
          "
          :data="[
            {
              name: 'Top 1000 Holder Risk Score Bins',
              data: Object.values(
                activeChainData[activeChainData.length - 1].top_1k_holder_score_dist_bin10
              ).map((t: any) => t.toFixed(0))
            }
          ]"
        />
      </div>
      <div class="col-md-12 my-2" v-if="activeChainData">
        <ChartComponent
          type="bar"
          title="Average Transaction Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="activeChainData.map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)"
          :data="[
            {
              name: 'Average Transaction Risk Score',
              data: activeChainData.map((d: any) => Number(d['avg_tx_risk_score']))
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChartComponent from '@/components/ChartComponent.vue'
import { computed, ref } from 'vue'
import { formatDate } from '@/helpers'
import TimeSeriesComponent from '@/components/TimeSeriesComponent.vue'

const props = defineProps({
  data: Object
})

const chains = computed(() => {
  function onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index
  }
  return props.data?.zanRiskScore?.map((d: any) => d.chain_name).filter(onlyUnique)
})

const activeChain = ref(chains.value && chains.value.length > 0 ? chains.value[0] : null)
const activeChainData = computed(() => {
  return props.data?.zanRiskScore?.filter((d: any) => d.chain_name == activeChain.value)
})
</script>
