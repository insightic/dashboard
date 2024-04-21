<template>
  <div class="mb-3">
    <!-- <div class="h1 m-0">Coin Market Cap</div> -->
    <div class="row">
      <div class="col-md-4 my-2">
        <CardComponent subheader="Total Assets" class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="d-flex align-items-center justify-content-center"
              style="font-size: 1rem"
              v-if="data?.coinMarketCap?.total_assets"
            >
              {{ data?.coinMarketCap?.total_assets }}
            </div>
          </div>
        </CardComponent>
      </div>
      <div class="col-md-4 my-2">
        <CardComponent subheader="Total Assets" class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="d-flex align-items-center justify-content-center"
              style="font-size: 1rem"
              v-if="data?.coinMarketCap?.spot_trading_volume"
            >
              {{ data?.coinMarketCap?.spot_trading_volume }}
            </div>
          </div>
        </CardComponent>
      </div>
      <div class="col-md-4 my-2">
        <CardComponent subheader="Total Assets" class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              class="d-flex align-items-center justify-content-center"
              style="font-size: 1rem"
              v-if="data?.coinMarketCap?.btc_value"
            >
              {{ data?.coinMarketCap?.btc_value }}
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>

  <div class="mb-3">
    <div class="h1 m-0">Tokens Data</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>logo</th>
              <th>token</th>
              <th>balance</th>
              <th>price</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, idx) in data?.coinMarketCap?.tokens_data" :key="idx">
              <td><img :src="value.image" /></td>
              <td>{{ value.token }}</td>
              <td>{{ value.balance }}</td>
              <td>{{ value.price }}</td>
              <td>{{ value.value }}</td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import CardTable from '@/components/CardTable.vue'

defineProps({
  data: Object
})
</script>
