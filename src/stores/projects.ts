import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { dataSource } from '@/http'

export const useProjectsStore = defineStore('projects', () => {
  const stablecoins: Ref<Array<any>> = ref([])

  async function fetchStablecoins() {
    const ids = await dataSource.getProjectIds('stablecoin')

    stablecoins.value = await Promise.all(
      ids.map(async (id: string) => await dataSource.getProjectData('stablecoin', id, false))
    )
  }

  return { stablecoins, fetchStablecoins }
})
