import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { dataSource } from '@/http'

export const useProjectsStore = defineStore('projects', () => {
  const stablecoins: Ref<Array<any>> = ref([])
  const cexes: Ref<Array<any>> = ref([])

  async function fetchStablecoins() {
    const ids = await dataSource.getProjectIds('stablecoin')

    stablecoins.value = await Promise.all(
      ids.map(
        async (id: string) => await dataSource.getProjectData('stablecoin', id, { sosovalue: true })
      )
    )
  }

  async function fetchCexes() {
    const ids = await dataSource.getProjectIds('cex')

    cexes.value = await Promise.all(
      ids.map(async (id: string) => await dataSource.getProjectData('cex', id, {}))
    )
  }

  return { stablecoins, fetchStablecoins, cexes, fetchCexes }
})
