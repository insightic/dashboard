import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { api, raw } from '@/http'

export const useProjectsStore = defineStore('projects', () => {
  const projects: Ref<Array<any>> = ref([])

  async function fetch() {
    const names = await api.getProjectNames('stablecoin')
    console.log(names)

    projects.value = await Promise.all(
      names.map(async (name: string) => {
        const data = (await raw.getProjectData(name)) as { [key: string]: any }
        return {
          url: raw.resolvePath(`stablecoin/${name}`),
          logoUrl: raw.resolvePath(`stablecoin/${name}/${data.logo}`),
          ...data
        }
      })
    )
  }

  return { projects, fetch }
})
