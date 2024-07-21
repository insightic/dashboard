<template>
  <div class="mb-3">
    <div class="h2 mb-2">Financial Audit</div>
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
    <div class="h2 mb-2">Market Capitalization and Liquidity</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <el-table
          class="cursor-font"
          :border="true"
          :data="
            data?.financial_analysis?.market_capitalization_and_liquidity.filter(
              (t: any) => t.value
            )
          "
        >
          <el-table-column label="Title">
            <template #default="scope">
              <div v-html="render(scope.row.title)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Value">
            <template #default="scope">
              <div v-html="render(scope.row.value)"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <div class="mb-3">
    <div
      class="h2 mb-2"
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
        <el-table class="cursor-font" :border="true" :data="data?.financial_analysis?.investments">
          <el-table-column label="Round">
            <template #default="scope">
              <div v-html="render(scope.row.round)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Amount">
            <template #default="scope">
              <div v-html="render(scope.row.amount)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Valuation">
            <template #default="scope">
              <div v-html="render(scope.row.valuation)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Date">
            <template #default="scope">
              <div v-html="render(scope.row.date)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Investors" min-width="200">
            <template #default="scope">
              <div v-html="render(scope.row.investors)"></div>
            </template>
          </el-table-column>
        </el-table>
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
    <div class="h2 mb-2">List of Investors</div>
    <div class="row">
      <div
        v-for="(item, idx) in data?.financial_analysis?.list_of_investors"
        :key="idx"
        class="col-md-3 my-2"
      >
        <CardComponent class="h-100">
          <div class="row align-items-center">
            <div class="col-4">
              <span class="text-white avatar bg-white" style="box-shadow: none !important">
                <img :src="data.baseUrl + '/' + item.logo" class="w-100 h-100" />
              </span>
            </div>
            <div class="col-8">
              <div class="small">
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
