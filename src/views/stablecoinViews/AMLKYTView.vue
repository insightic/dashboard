<template>
  <div class="mb-3">
    <div class="h1 m-0">AML/KYT</div>
    <div class="row">
      <div class="col-md-6 my-2">
        <ChartComponent
          type="bar"
          title="AVG Top 100 Holder Risk Score"
          :labels="data?.zanRiskScore?.map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)"
          :data="[
            {
              name: 'Top 100 Holder Risk Score',
              data: data?.zanRiskScore?.map((d: any) => Number(d['avg_top_100_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <ChartComponent
          type="bar"
          title="AVG Top 1000 Holder Risk Score"
          :labels="data?.zanRiskScore?.map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)"
          :data="[
            {
              name: 'Top 1000 Holder Risk Score',
              data: data?.zanRiskScore?.map((d: any) => Number(d['avg_top_1000_holder_risk_score']))
            }
          ]"
        />
      </div>
      <div class="col-md-12 my-2">
        <ChartComponent
          type="bar"
          title="Average Transaction Risk Score"
          :labels="data?.zanRiskScore?.map((d: any) => `${formatDate(d?.created_date, 'MM/DD')}`)"
          :data="[
            {
              name: 'Average Transaction Risk Score',
              data: data?.zanRiskScore?.map((d: any) => Number(d['avg_tx_risk_score']))
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChartComponent from '@/components/ChartComponent.vue'
import { formatDate } from '@/helpers'

defineProps({
  data: Object
})
</script>
