import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { api, raw } from '@/http'

export const useProjectsStore = defineStore('projects', () => {
  const stablecoins: Ref<Array<any>> = ref([])

  async function fetchStablecoins() {
    const ids = await api.getProjectIds('stablecoin')

    stablecoins.value = await Promise.all(
      ids.map(async (id: string) => {
        const data = (await raw.getProjectData('stablecoin', id)) as { [key: string]: any }
        return {
          id: id,
          url: raw.resolvePath(`stablecoin/${id}`),
          logoUrl: raw.resolvePath(`stablecoin/${id}/${data.logo}`),
          ...data
        }
      })
    )
  }

  return { stablecoins, fetchStablecoins }
})
