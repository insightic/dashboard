<template>
  <div class="container py-2">
    <div class="mt-2">
      <div class="h1">Stablecoins</div>
      <div class="row">
        <div class="col-md-12">
          <CardTable>
            <thead>
              <tr>
                <th style="width: 25%">Logo</th>
                <th style="width: 25%">Name</th>
                <th style="width: 25%">MarketCap</th>
                <th style="width: 25%">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(project, idx) in projects" :key="idx">
                <td></td>
                <td style="text-transform: uppercase">{{ project.name }}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </CardTable>
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue'

import CardTable from '@/components/CardTable.vue'
import { getStablecoinProjects } from '@/http'

const projects: Ref<Array<any>> = ref([])

onMounted(async () => {
  projects.value = await getStablecoinProjects()
})
</script>
