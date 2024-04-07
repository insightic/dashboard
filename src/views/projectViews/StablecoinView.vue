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
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardTable from '@/components/CardTable.vue'

defineProps({
  data: Object
})
</script>
