<template>
  <div class="mb-3">
    <div class="h1 m-0">Transcations</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable style="max-height: 300px">
          <thead class="sticky-top">
            <tr>
              <th v-for="column in data?.stablecoin?.transaction?.avg_rate?.columns">
                {{ column }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data?.stablecoin?.transaction?.avg_rate?.data">
              <td v-for="item in row">{{ item }}</td>
            </tr>
          </tbody>
        </CardTable>
      </div>
      <div class="col-md-6 my-2">
        <ChartComponent
          type="bar"
          title="Daily Frequency"
          :labels="[
            data?.stablecoin?.transaction?.daily_frequency?.data.map((d: any) => `${d[0]}`)
          ]"
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
        <ChartComponent
          type="bar"
          title="Hourly Frequency"
          :labels="[
            data?.stablecoin?.transaction?.hourly_frequency.data.map((d: any) => `${d[0]}:00`)
          ]"
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
        <ChartComponent
          title="Daily Bought/Sold Volume"
          :labels="[
            data?.stablecoin?.transaction?.daily_bought_vol.data.map((d: any) => `${d[0]}`),
            data?.stablecoin?.transaction?.daily_sold_vol.data.map((d: any) => `${d[0]}`)
          ]"
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
        <ChartComponent
          title="Hourly Bought/Sold Volume"
          :labels="[
            data?.stablecoin?.transaction?.hourly_bought_vol.data.map((d: any) => `${d[0]}:00`),
            data?.stablecoin?.transaction?.hourly_sold_vol.data.map((d: any) => `${d[0]}:00`)
          ]"
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
    <div class="h1 m-0">Supply</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <ChartComponent
          title="Token Supply Over Time"
          :labels="[data?.stablecoin?.supply?.data.map((d: any) => String(d[0]))]"
          :data="[
            {
              name: 'Token Supply Over Time',
              data: data?.stablecoin?.supply?.data.map((d: any) => Number(d[1]))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <ChartComponent
          title="Token Price in USD over time"
          :labels="[data?.stablecoin?.price?.data.map((d: any) => String(d[0]))]"
          :data="[
            {
              name: 'Token Price in USD over time',
              data: data?.stablecoin?.price?.data.map((d: any) => Number(d[1]))
            }
          ]"
        />
      </div>
      <div class="col-md-6 my-2">
        <ChartComponent
          title="Token Price in ETH over time"
          :labels="[data?.stablecoin?.price?.data.map((d: any) => String(d[0]))]"
          :data="[
            {
              name: 'Token Price in ETH over time',
              data: data?.stablecoin?.price?.data.map((d: any) => Number(d[3]))
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTable from '@/components/CardTable.vue'
import ChartComponent from '@/components/ChartComponent.vue'

defineProps({
  data: Object
})
</script>
