<template>
  <div class="mb-3">
    <div class="h2 mb-2">Overview</div>
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
      <div class="col-md-12 my-2">
        <el-table :border="true" :data="data?.coinMarketCap?.pair_table_data">
          <el-table-column label="Rank" prop="Rank" />
          <el-table-column label="Currency" prop="Currency" />
          <el-table-column label="Pair" prop="Pair" />
          <el-table-column label="Price" prop="Price" />
          <el-table-column label="+2% Depth" prop="+2% Depth" />
          <el-table-column label="-2% Depth" prop="-2% Depth" />
          <el-table-column label="Volume" prop="Volume" />
          <el-table-column label="Volume %" prop="Volume %" />
        </el-table>
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
              <td class="small secondary">BTC Value:</td>
              <td>{{ data?.coinMarketCap?.btc_value }}</td>
            </tr>
            <tr>
              <td class="small secondary">Total Assets:</td>
              <td>{{ data?.coinMarketCap?.total_assets }}</td>
            </tr>
            <tr>
              <td class="small secondary">Spot Trading Volume:&nbsp;&nbsp;</td>
              <td>{{ data?.coinMarketCap?.spot_trading_volume }}</td>
            </tr>
            <tr>
              <td class="small secondary">Exchange Report Status 24h:&nbsp;&nbsp;</td>
              <td>{{ data?.coinMarketCap?.exchange_report_status }}</td>
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

defineProps({
  data: Object
})
</script>
