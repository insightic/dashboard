<template>
  <NavBar />
  <SubNavBar :views="views" />

  <div class="container py-2" style="margin-top: 112px">
    <HeaderView :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SubNavBar from '@/components/SubNavBar.vue'
import HeaderView from './projectViews/HeaderView.vue'
import { raw } from '@/http'

const route = useRoute()
const data = ref<any>({})

const views = ref([
  { name: 'Overview', icon: 'bi-house-door' },
  { name: 'Team & Social Media', icon: 'bi-people' },
  { name: 'Smart Contract Validation', icon: 'bi-check2-square' },
  { name: 'Financial Analysis', icon: 'bi-currency-dollar' },
  { name: 'Security and Compliance', icon: 'bi-lock' }
])

onMounted(async () => {
  const project: any = await raw.getProjectData(
    route.params.type as string,
    route.params.id as string
  )
  project.url = raw.resolvePath(`stablecoin/${route.params.id as string}`)
  project.logoUrl = raw.resolvePath(`stablecoin/${route.params.id as string}/${project.logo}`)
  data.value = project
})
</script>
