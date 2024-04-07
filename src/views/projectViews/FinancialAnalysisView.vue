<template>
  <div class="mb-3">
    <div class="h1 m-0">Financial Audit</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent class="w-100">
          <table class="mb-3">
            <tr>
              <td style="min-width: 80px">Auditors:</td>
              <td v-html="render(data?.financial_analysis?.financial_audit?.auditors)"></td>
            </tr>
            <tr>
              <td>Score:</td>
              <td v-html="render(data?.financial_analysis?.financial_audit?.score)"></td>
            </tr>
            <tr>
              <td>Analysis:</td>
              <td v-html="render(data?.financial_analysis?.financial_audit?.analysis)"></td>
            </tr>
          </table>
          <div class="d-flex">
            <div
              class="mx-auto"
              style="width: 540px"
              v-if="
                notEmpty(data?.financial_analysis?.financial_audit?.reserve_holdings_percentage)
              "
            >
              <apexchart
                width="540"
                type="pie"
                :options="{
                  labels:
                    data?.financial_analysis?.financial_audit?.reserve_holdings_percentage.map(
                      (t: any) => t.title
                    )
                }"
                :series="
                  data?.financial_analysis?.financial_audit?.reserve_holdings_percentage.map(
                    (t: any) => t.value
                  )
                "
              />
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>

  <div class="mb-3">
    <div class="h1 m-0">Market Capitalization and Liquidity</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable class="w-100 h-100">
          <thead>
            <tr>
              <th>Title</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                item, idx
              ) in data?.financial_analysis?.market_capitalization_and_liquidity.filter(
                (t: any) => t.value
              )"
              :key="idx"
            >
              <td
                v-html="render(item.title)"
                style="width: 30%; min-width: 120px; max-width: 300px; vertical-align: top"
              ></td>
              <td v-html="render(item.value)" style="vertical-align: top"></td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>

  <div class="mb-3">
    <div
      class="h1 m-0"
      v-if="
        data?.financial_analysis?.investments && data?.financial_analysis?.investments.length > 0
      "
    >
      Investments
    </div>
    <div
      class="row"
      v-if="
        data?.financial_analysis?.investments && data?.financial_analysis?.investments.length > 0
      "
    >
      <div class="col-md-12 my-2">
        <CardTable class="w-100 h-100">
          <thead>
            <tr>
              <th>Round</th>
              <th>Amount</th>
              <th>Valuation</th>
              <th>Date</th>
              <th>Investors</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in data?.financial_analysis?.investments" :key="idx">
              <td v-html="render(item.round)" style="vertical-align: top"></td>
              <td v-html="render(item.amount)" style="vertical-align: top"></td>
              <td v-html="render(item.valuation)" style="vertical-align: top"></td>
              <td v-html="render(item.date)" style="vertical-align: top"></td>
              <td v-html="render(item.investors)" style="vertical-align: top"></td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>

  <div
    class="mb-3"
    v-if="
      data?.financial_analysis?.list_of_investors &&
      data?.financial_analysis?.list_of_investors.length > 0
    "
  >
    <div class="h1 m-0">List of Investors</div>
    <div class="row">
      <div
        v-for="(item, idx) in data?.financial_analysis?.list_of_investors"
        :key="idx"
        class="col-md-3 my-2"
      >
        <CardComponent class="h-100">
          <div class="row align-items-center">
            <div class="col-auto">
              <span class="text-white avatar bg-white" style="box-shadow: none !important">
                <img :src="data.baseUrl + '/' + item.logo" class="w-100 h-100" />
              </span>
            </div>
            <div class="col">
              <div class="font-weight-medium">
                {{ item.name }}
              </div>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { render, notEmpty } from '@/helpers'

import CardComponent from '@/components/CardComponent.vue'
import CardTable from '@/components/CardTable.vue'

defineProps({
  data: Object
})
</script>
