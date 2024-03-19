<template>
  <NavBar />
  <SubNavBar :views="views" :view-idx="viewIdx" @change-view="(idx) => (viewIdx = idx)" />

  <div class="container py-2" style="margin-top: 112px">
    <div v-if="!loading">
      <HeaderView :data="data" />
      <OverviewView :data="data" v-if="viewIdx == 0" />
      <TeamSocialMediaView :data="data" v-if="viewIdx == 1" />
      <SmartContractValidationView :data="data" v-if="viewIdx == 2" />
      <FinancialAnalysisView :data="data" v-if="viewIdx == 3" />
      <SecurityComplianceView :data="data" v-if="viewIdx == 4" />
    </div>

    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { raw } from '@/http'
import NavBar from '@/components/NavBar.vue'
import SubNavBar from '@/components/SubNavBar.vue'
import HeaderView from './projectViews/HeaderView.vue'
import OverviewView from './projectViews/OverviewView.vue'
import TeamSocialMediaView from './projectViews/TeamSocialMediaView.vue'
import SmartContractValidationView from './projectViews/SmartContractValidationView.vue'
import FinancialAnalysisView from './projectViews/FinancialAnalysisView.vue'
import SecurityComplianceView from './projectViews/SecurityComplianceView.vue'

const loading = ref(true)
const route = useRoute()
const data = ref<any>({})

const views = ref([
  { name: 'Overview', icon: 'bi-house-door' },
  { name: 'Team & Social Media', icon: 'bi-people' },
  { name: 'Smart Contract Validation', icon: 'bi-check2-square' },
  { name: 'Financial Analysis', icon: 'bi-currency-dollar' },
  { name: 'Security and Compliance', icon: 'bi-lock' }
])
const viewIdx = ref(0)

onMounted(async () => {
  const project: any = await raw.getProjectData(
    route.params.type as string,
    route.params.id as string
  )
  project.url = raw.resolvePath(`stablecoin/${route.params.id as string}`)
  project.logoUrl = raw.resolvePath(`stablecoin/${route.params.id as string}/${project.logo}`)
  data.value = project
  loading.value = false
})
</script>
./projectViews/FinancialAnalysisView.vue
