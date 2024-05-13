<template>
  <CardComponent>
    <div class="row" v-for="(day, idx) in transactions" :key="idx">
      <div class="col-md-3">
        <h2>{{ formatDate(day.created_date) }}</h2>
      </div>
      <div class="col-md-9">
        <el-timeline style="max-width: 600px">
          <el-timeline-item v-for="(transaction, index) in day.results" :key="index">
            <div class="h3 mb-0">{{ transaction.title }}</div>
            <div class="mb-2">
              {{ formatDate(day.created_date) }} {{ transaction.time_recorded }}
            </div>
            <table>
              <tr>
                <td class="small text-secondary">Token:</td>
                <td>{{ transaction.token }}</td>
              </tr>
              <tr>
                <td class="small text-secondary">Transaction Amount:</td>
                <td>{{ transaction.amount }}</td>
              </tr>
              <tr>
                <td class="small text-secondary">From Address:</td>
                <td>{{ transaction.from_address }}</td>
              </tr>
              <tr>
                <td class="small text-secondary">From Wallet Address:&nbsp;&nbsp;&nbsp;</td>
                <td>{{ transaction.from_wallet_address }}</td>
              </tr>
              <tr>
                <td class="small text-secondary">To Address:</td>
                <td>{{ transaction.to_address }}</td>
              </tr>
              <tr>
                <td class="small text-secondary">To Wallet Address:</td>
                <td>{{ transaction.to_wallet_address }}</td>
              </tr>
            </table>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </CardComponent>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import { computed } from 'vue'
import { formatDate } from '@/helpers'

const props = defineProps(['data'])
const transactions = computed(() =>
  props.data.transactionMonitoring.slice(
    0,
    props.data.transactionMonitoring.length > 5 ? 5 : props.data.transactionMonitoring.length
  )
)
</script>
