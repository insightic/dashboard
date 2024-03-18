<template>
  <NavBar />

  <div class="container py-2" style="margin-top: 56px">
    <div v-if="!loading" class="mt-2">
      <div class="h1">Stablecoins</div>
      <div class="row">
        <div class="col-md-12">
          <CardTable>
            <thead>
              <tr>
                <th style="width: 15%">Logo</th>
                <th style="width: 35%">Name</th>
                <th style="width: 25%">MarketCap</th>
                <th style="width: 25%">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(project, idx) in projectsStore.stablecoins"
                :key="idx"
                @click="goto('stablecoin', project.id)"
              >
                <td>
                  <div
                    class="rounded p-1 d-flex flex-column align-items-center justify-content-center"
                    style="width: 48px; height: 48px; background-color: white"
                  >
                    <img :src="project.logoUrl" />
                  </div>
                </td>
                <td style="text-transform: uppercase">{{ project.name }}</td>
                <td>-</td>
                <td
                  style="text-transform: uppercase; font-weight: bold"
                  :class="ratingColor(project.rating)"
                >
                  {{ project.rating }}
                </td>
              </tr>
            </tbody>
          </CardTable>
        </div>
      </div>
    </div>

    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import CardTable from '@/components/CardTable.vue'
import { useProjectsStore } from '@/stores/projects'
import { ratingColor } from '@/helpers'

const loading = ref(true)
const router = useRouter()
const projectsStore = useProjectsStore()

onMounted(async () => {
  await projectsStore.fetchStablecoins()
  loading.value = false
})

function goto(type: string, id: string) {
  router.push(`/${type}/${id}`)
}
</script>

<style scoped>
td {
  cursor: pointer;
}

tr:hover {
  background-color: #141c28;
}
</style>
