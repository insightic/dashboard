<template>
  <div class="mb-3">
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent>
          <div class="row">
            <div class="col-md-4">
              <PieChartComponent
                title="Crypto distribution"
                :labels="data?.por?.por?.balanceDetails.map((d: any) => String(d.symbol))"
                :data="data?.por?.por?.balanceDetails.map((d: any) => Number(d.balanceUSDT))"
              />
            </div>
            <div class="col-md-8">
              <table class="table table-vcenter">
                <thead>
                  <th width="20%">Symbol</th>
                  <th width="30%">Token Balance</th>
                  <th width="30%">Change</th>
                  <th width="20%">Ratio</th>
                </thead>
                <tbody>
                  <tr v-for="(row, idx) in data?.por?.por?.balanceDetails">
                    <td>{{ row.symbol }}</td>
                    <td>
                      <div>{{ formatNumber(row.tokenBalance) }}</div>
                      <div class="small">≈ {{ formatNumber(row.balanceUSDT) }} USDT</div>
                    </td>
                    <td>
                      <div
                        :class="{
                          'text-success': row.tokenBalanceChange >= 0,
                          'text-danger': row.tokenBalanceChange < 0
                        }"
                      >
                        {{ row.tokenBalanceChange.toFixed(2) }}%

                        <IconTrendingUp :size="16" v-if="row.tokenBalanceChange >= 0" />
                        <IconTrendingDown :size="16" v-else />
                      </div>
                      <div
                        class="small"
                        :class="{
                          'text-success': row.balanceUSDTChange >= 0,
                          'text-danger': row.balanceUSDTChange < 0
                        }"
                      >
                        ≈ {{ row.balanceUSDTChange.toFixed(2) }}% USDT

                        <IconTrendingUp :size="16" v-if="row.balanceUSDTChange >= 0" />
                        <IconTrendingDown :size="16" v-else />
                      </div>
                    </td>
                    <td>{{ ((row.balanceUSDT / total) * 100).toFixed(2) }}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import PieChartComponent from '@/components/PieChartComponent.vue'
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue'
import { computed } from 'vue'
import { formatNumber } from '@/helpers'

const props = defineProps({
  data: Object
})

const total = computed(() =>
  props.data?.por?.por?.balanceDetails.reduce((acc: number, row: any) => acc + row.balanceUSDT, 0)
)
</script>

<style scoped>
th {
  background-color: unset !important;
}
</style>
