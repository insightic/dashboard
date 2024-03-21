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
                <th
                  style="width: 35%; cursor: pointer"
                  @click="(nameInc = !nameInc), (activeSorts = 'name')"
                >
                  Name

                  <IconSortAscendingLetters :size="16" v-if="nameInc" />
                  <IconSortDescendingLetters :size="16" v-if="!nameInc" />
                </th>
                <th
                  style="width: 25%"
                  @click="(marketcapInc = !marketcapInc), (activeSorts = 'marketcap')"
                >
                  MarketCap

                  <IconSortAscendingNumbers :size="16" v-if="marketcapInc" />
                  <IconSortDescendingNumbers :size="16" v-if="!marketcapInc" />
                </th>
                <th style="width: 25%" @click="(ratingInc = !ratingInc), (activeSorts = 'rating')">
                  Rating

                  <IconSortAscendingLetters :size="16" v-if="ratingInc" />
                  <IconSortDescendingLetters :size="16" v-if="!ratingInc" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(project, idx) in stablecoins"
                :key="idx"
                @click="goto('stablecoin', project?.id)"
              >
                <td>
                  <div
                    class="rounded p-1 d-flex flex-column align-items-center justify-content-center"
                    style="width: 48px; height: 48px; background-color: white"
                  >
                    <img :src="project?.logoUrl" />
                  </div>
                </td>
                <td style="text-transform: uppercase">{{ project?.name }}</td>
                <td>
                  {{ project?.sosovalue?.market_cap_value }}
                </td>
                <td
                  style="text-transform: uppercase; font-weight: bold"
                  :class="ratingColor(project?.rating)"
                >
                  {{ project?.rating }}
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
import { ref, onMounted, computed, type ComputedRef } from 'vue'
import { useRouter } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import CardTable from '@/components/CardTable.vue'
import { useProjectsStore } from '@/stores/projects'
import { ratingColor } from '@/helpers'
import {
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconSortAscendingNumbers,
  IconSortDescendingNumbers
} from '@tabler/icons-vue'

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

const nameInc = ref(true)
const marketcapInc = ref(true)
const ratingInc = ref(true)
const activeSorts = ref('name')

const stablecoins: ComputedRef<Array<any>> = computed(() => {
  const data = projectsStore.stablecoins
  return data.sort((lhs: any, rhs: any) => {
    if (activeSorts.value == 'name') {
      let result = lhs.name.localeCompare(rhs.name)
      return nameInc.value ? result : -result
    }

    if (activeSorts.value == 'marketcap') {
      let lhsMarketcap = lhs?.sosovalue?.market_cap_value || 0
      let rhsMarketcap = rhs?.sosovalue?.market_cap_value || 0
      let result = lhsMarketcap - rhsMarketcap
      return marketcapInc.value ? result : -result
    }

    if (activeSorts.value == 'rating') {
      let result = lhs.rating.localeCompare(rhs.rating)
      return ratingInc.value ? result : -result
    }

    return 0
  })
})
</script>

<style scoped>
td {
  cursor: pointer;
}

tr:hover {
  background-color: #141c28;
}
</style>
