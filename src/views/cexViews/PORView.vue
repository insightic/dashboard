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
              <el-table :border="true" :data="data?.por?.por?.balanceDetails">
                <el-table-column label="Symbol">
                  <template #default="scope">
                    <div>{{ scope.row.symbol }}</div>
                  </template>
                </el-table-column>

                <el-table-column label="Token Balance">
                  <template #default="scope">
                    <div>{{ formatNumber(scope.row.tokenBalance) }}</div>
                    <div class="small">≈ {{ formatNumber(scope.row.balanceUSDT) }} USDT</div>
                  </template>
                </el-table-column>
                <el-table-column label="Change">
                  <template #default="scope">
                    <div
                      :class="{
                        'text-success': scope.row.tokenBalanceChange >= 0,
                        'text-danger': scope.row.tokenBalanceChange < 0
                      }"
                    >
                      {{ scope.row.tokenBalanceChange.toFixed(2) }}%

                      <IconTrendingUp :size="16" v-if="scope.row.tokenBalanceChange >= 0" />
                      <IconTrendingDown :size="16" v-else />
                    </div>
                    <div
                      class="small"
                      :class="{
                        'text-success': scope.row.balanceUSDTChange >= 0,
                        'text-danger': scope.row.balanceUSDTChange < 0
                      }"
                      v-if="scope.row.symbol.toLowerCase() !== 'others'"
                    >
                      ≈ {{ scope.row.balanceUSDTChange.toFixed(2) }}% USDT

                      <IconTrendingUp :size="16" v-if="scope.row.balanceUSDTChange >= 0" />
                      <IconTrendingDown :size="16" v-else />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Ratio">
                  <template #default="scope">
                    {{ ((scope.row.balanceUSDT / total) * 100).toFixed(2) }}%
                  </template>
                </el-table-column>
              </el-table>
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
