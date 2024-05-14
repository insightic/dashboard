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
        <CardComponent class="h-100" :subheader="`${data?.name} restricted countries`">
          <div v-html="render(data?.restricted_countries)"></div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="trading information">
          <table>
            <tr>
              <td class="small secondary">Coins:</td>
              <td>{{ data?.trading_information?.coins }}</td>
            </tr>
            <tr>
              <td class="small secondary">Total Assets:</td>
              <td>{{ data?.trading_information?.total_assets }}</td>
            </tr>
            <tr>
              <td class="small secondary">Exchange Reserves:&nbsp;&nbsp;</td>
              <td>{{ data?.trading_information?.exchange_reserves }}</td>
            </tr>
            <tr>
              <td class="small secondary">BTC 24h:</td>
              <td>{{ data?.trading_information?.btc_24h }}</td>
            </tr>
            <tr>
              <td class="small secondary">Volume 24h:</td>
              <td>{{ data?.trading_information?.volume_24h }}</td>
            </tr>
          </table>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent
          class="h-100"
          :subheader="`Is It Possible To Use Leverage or Margin Trading on ${data?.name}?`"
        >
          <div>{{ data?.margin_trading?.details }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="most active trading pair">
          <div>{{ data?.most_active_trading_pair?.pair }}</div>
          <div>{{ data?.most_active_trading_pair?.volume_24h }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="fees">
          <div>
            <a :href="data?.fees?.url" target="_blank">{{ data?.fees?.url }}</a>
          </div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100" subheader="cybersecurity tests">
          <div class="small text-secondary mb-2">
            Last Update: {{ data?.cybersecurity_details?.last_updated }}
          </div>

          <table>
            <tr>
              <td class="small text-secondary">Penetration Test: &nbsp;</td>
              <td>{{ data?.cybersecurity_details?.penetration_test }}</td>
            </tr>
            <tr>
              <td class="small text-secondary">Proof of Funds:</td>
              <td>{{ data?.cybersecurity_details?.proof_of_funds }}</td>
            </tr>
            <tr>
              <td class="small text-secondary">Bug Bounty:</td>
              <td>{{ data?.cybersecurity_details?.bug_bounty }}</td>
            </tr>
          </table>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import { render } from '@/helpers'

const props = defineProps({
  data: Object
})

console.log(props.data)
</script>
