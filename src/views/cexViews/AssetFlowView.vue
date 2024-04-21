<template>
  <div class="mb-3">
    <div class="h1 m-0">In Flow</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Entities</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, idx) in data?.assetFlow?.asset_flow?.inFlow" :key="idx">
              <td>{{ idx }}</td>
              <td>{{ value.entities }}</td>
              <td>{{ value.totalValue }}</td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>
  <div class="mb-3">
    <div class="h1 m-0">Out Flow</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Entities</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, idx) in data?.assetFlow?.asset_flow?.outFlow" :key="idx">
              <td>{{ idx }}</td>
              <td>{{ value.entities }}</td>
              <td>{{ value.totalValue }}</td>
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
