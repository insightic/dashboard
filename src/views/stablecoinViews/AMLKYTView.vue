<template>
  <div class="mb-3">
    <div class="h1 m-0">AML/KYT</div>
    <div class="row">
      <div class="col-md-6 my-2">
        <ChartComponent
          type="bar"
          title="AVG Top 100 Holder Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="
            data?.zanRiskScore
              ?.filter((d: any) => d?.chain_name == chains[0])
              .map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)
          "
          :data="[
            {
              name: 'Top 100 Holder Risk Score',
              data: data?.zanRiskScore
                ?.filter((d: any) => d?.chain_name == chains[0])
                .map((d: any) => Number(d['avg_top_100_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <ChartComponent
          type="bar"
          title="AVG Top 1000 Holder Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="
            data?.zanRiskScore
              ?.filter((d: any) => d?.chain_name == chains[0])
              .map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)
          "
          :data="[
            {
              name: 'Top 1000 Holder Risk Score',
              data: data?.zanRiskScore
                ?.filter((d: any) => d?.chain_name == chains[0])
                .map((d: any) => Number(d['avg_top_1000_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-12 my-2">
        <ChartComponent
          type="bar"
          title="Top 1000 Holder Risk Score Distribution"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="
            Object.keys(data?.zanRiskScore[data?.zanRiskScore.length - 1].top_1k_holder_score_dist_bin10)
          "
          :data="[
            {
              name: 'Top 1000 Holder Risk Score Bins',
              data: Object.values(data?.zanRiskScore[data?.zanRiskScore.length - 1].top_1k_holder_score_dist_bin10)
            }
          ]"
        />
      </div>
      <div class="col-md-12 my-2">
        <ChartComponent
          type="bar"
          title="Average Transaction Risk Score"
          title-tooltip="100: Critical<br/>67-99: High risk<br/>34-66: Medium risk<br/>1-33: Low risk<br/>0: No risk"
          :labels="
            data?.zanRiskScore
              ?.filter((d: any) => d?.chain_name == chains[0])
              .map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)
          "
          :data="[
            {
              name: 'Average Transaction Risk Score',
              data: data?.zanRiskScore
                ?.filter((d: any) => d?.chain_name == chains[0])
                .map((d: any) => Number(d['avg_tx_risk_score']))
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChartComponent from '@/components/ChartComponent.vue'
import { computed } from 'vue'
import { formatDate } from '@/helpers'

const props = defineProps({
  data: Object
})

const chains = computed(() => {
  function onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index
  }
  return props.data?.zanRiskScore?.map((d: any) => d.chain_name).filter(onlyUnique)
})
</script>
