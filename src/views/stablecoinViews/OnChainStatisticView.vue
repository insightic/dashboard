<template>
  <div class="mb-3">
    <div class="h2 mb-2">Transactions</div>
    <div class="row">
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Daily Frequency"
          :labels="
            data?.stablecoin?.transaction?.daily_frequency?.data.map(
              (d: any) => `${formatDate(d[0], 'YYYY-MM-DD')}`
            )
          "
          :data="[
            {
              name: 'Daily Frequency',
              data: data?.stablecoin?.transaction?.daily_frequency?.data.map((d: any) =>
                Number(d[1])
              )
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Hourly Frequency"
          :labels="
            data?.stablecoin?.transaction?.hourly_frequency.data.map((t: any) =>
              formatTime(t[0]).unix()
            )
          "
          :data="[
            {
              name: 'Hourly Frequency',
              data: data?.stablecoin?.transaction?.hourly_frequency.data.map((d: any) =>
                Number(d[1])
              )
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Daily Bought / Sold Volume"
          :labels="
            data?.stablecoin?.transaction?.daily_bought_vol.data.map(
              (d: any) => `${formatDate(d[0], 'YYYY-MM-DD')}`
            )
          "
          :data="[
            {
              name: 'Daily Bought Volume',
              data: data?.stablecoin?.transaction?.daily_bought_vol.data.map((d: any) =>
                Number(d[1])
              )
            },
            {
              name: 'Daily Sold Volume',
              data: data?.stablecoin?.transaction?.daily_sold_vol.data.map((d: any) => Number(d[1]))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Hourly Bought / Sold Volume"
          :labels="
            data?.stablecoin?.transaction?.hourly_bought_vol.data.map((t: any) =>
              formatTime(t[0]).unix()
            )
          "
          :data="[
            {
              name: 'Hourly Bought Volume',
              data: data?.stablecoin?.transaction?.hourly_bought_vol.data.map((d: any) =>
                Number(d[1])
              )
            },
            {
              name: 'Hourly Sold Volume',
              data: data?.stablecoin?.transaction?.hourly_sold_vol.data.map((d: any) =>
                Number(d[1])
              )
            }
          ]"
        />
      </div>
    </div>
  </div>

  <div class="mb-3">
    <div class="h2 mb-2">Supply</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <TimeSeriesComponent
          title="Token Supply Over Time"
          :labels="data?.stablecoin?.supply?.data.map((d: any) => String(d[0])).reverse()"
          :data="[
            {
              name: 'Token Supply Over Time',
              data: data?.stablecoin?.supply?.data.map((d: any) => Number(d[1])).reverse()
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Token Price in USD over time"
          :labels="data?.stablecoin?.price?.data.map((d: any) => String(d[0])).reverse()"
          :data="[
            {
              name: 'Token Price in USD over time',
              data: data?.stablecoin?.price?.data.map((d: any) => Number(d[1])).reverse()
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <TimeSeriesComponent
          title="Token Price in ETH over time"
          :labels="data?.stablecoin?.price?.data.map((d: any) => String(d[0])).reverse()"
          :data="[
            {
              name: 'Token Price in ETH over time',
              data: data?.stablecoin?.price?.data.map((d: any) => Number(d[3])).reverse()
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <PieChartComponent
          title="Top 10 holders"
          :labels="
            data?.stablecoin?.topKHolder?.data?.map((d: any) => String(d[0]).substring(0, 10))
          "
          :data="data?.stablecoin?.topKHolder?.data?.map((d: any) => d[1])"
        />
      </div>
      <div class="col-md-6 my-2">
        <PieChartComponent
          title="Age Stats"
          :labels="
            data?.stablecoin?.holderAgeFreqPortfolio?.age?.data?.map((d: any) => String(d[1]))
          "
          :data="data?.stablecoin?.holderAgeFreqPortfolio?.age?.data?.map((d: any) => Number(d[2]))"
        />
      </div>
      <div class="col-md-6 my-2">
        <PieChartComponent
          title="Freq Stats"
          :labels="
            data?.stablecoin?.holderAgeFreqPortfolio?.freq?.data?.map((d: any) => String(d[1]))
          "
          :data="
            data?.stablecoin?.holderAgeFreqPortfolio?.freq?.data?.map((d: any) => Number(d[2]))
          "
        />
      </div>
      <div class="col-md-6 my-2">
        <PieChartComponent
          title="Portfolio Stats"
          :labels="
            data?.stablecoin?.holderAgeFreqPortfolio?.portfolio?.data?.map((d: any) => String(d[1]))
          "
          :data="
            data?.stablecoin?.holderAgeFreqPortfolio?.portfolio?.data?.map((d: any) => Number(d[2]))
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimeSeriesComponent from '@/components/TimeSeriesComponent.vue'
import PieChartComponent from '@/components/PieChartComponent.vue'
import { formatDate, formatTime } from '@/helpers'

const props = defineProps({
  data: Object
})

console.log(props?.data?.stablecoin?.transaction)
</script>
