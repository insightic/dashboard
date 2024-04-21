<template>
  <div class="mb-3">
    <div class="h1 m-0">Overview</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent class="h-100" subheader="Overview">
          {{ data?.overview }}
        </CardComponent>
      </div>
      <div class="col-md-12 my-2">
        <CardComponent class="h-100" subheader="History">
          {{ data?.history }}
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="restricted countries">
          <div v-for="(c, idx) in data?.restricted_countries" :key="idx">{{ c }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="trading information">
          <div>{{ data?.trading_information?.active_pairs }}</div>
          <div>{{ data?.trading_information?.btc_24h }}</div>
          <div>{{ data?.trading_information?.coins }}</div>
          <div>{{ data?.trading_information?.exchange_reserves }}</div>
          <div>{{ data?.trading_information?.total_assets }}</div>
          <div>{{ data?.trading_information?.volume_24h }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="margin trading">
          <div>{{ data?.margin_trading?.availability }}</div>
          <div>{{ data?.margin_trading?.leverage }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="most active trading pair">
          <div>{{ data?.most_active_trading_pair?.pair }}</div>
          <div>{{ data?.most_active_trading_pair?.volume_24h }}</div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'

defineProps({
  data: Object
})
</script>
