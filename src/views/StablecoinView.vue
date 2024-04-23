<template>
  <NavBar />
  <SubNavBar :views="views" :view-idx="viewIdx" @change-view="changeView" />

  <div class="container py-2" style="margin-top: 112px">
    <div v-if="!loading">
      <HeaderView :data="data" />
      <OverviewView :data="data" v-if="viewIdx == 0" />
      <AMLKYTView :data="data" v-if="viewIdx == 1" />
      <TeamSocialMediaView :data="data" v-if="viewIdx == 2" />
      <SmartContractValidationView :data="data" v-if="viewIdx == 3" />
      <FinancialAnalysisView :data="data" v-if="viewIdx == 4" />
      <SecurityComplianceView :data="data" v-if="viewIdx == 5" />
      <StablecoinView :data="data" v-if="viewIdx == 6" />
    </div>

    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { dataSource } from '@/http'
import NavBar from '@/components/NavBar.vue'
import SubNavBar from '@/components/SubNavBar.vue'
import HeaderView from './stablecoinViews/HeaderView.vue'
import OverviewView from './stablecoinViews/OverviewView.vue'
import AMLKYTView from './stablecoinViews/AMLKYTView.vue'
import TeamSocialMediaView from './stablecoinViews/TeamSocialMediaView.vue'
import SmartContractValidationView from './stablecoinViews/SmartContractValidationView.vue'
import FinancialAnalysisView from './stablecoinViews/FinancialAnalysisView.vue'
import SecurityComplianceView from './stablecoinViews/SecurityComplianceView.vue'
import StablecoinView from './stablecoinViews/StablecoinView.vue'

const loading = ref(true)
const route = useRoute()
const data = ref<any>({})

const views = ref([
  { name: 'Overview', icon: 'bi-house-door' },
  { name: 'AML/KYT', icon: 'bi-shield-check' },
  { name: 'Team & Social Media', icon: 'bi-people' },
  { name: 'Smart Contract Validation', icon: 'bi-check2-square' },
  { name: 'Financial Analysis', icon: 'bi-currency-dollar' },
  { name: 'Security and Compliance', icon: 'bi-lock' },
  { name: 'Stablecoin', icon: 'bi-coin' }
])
const viewIdx = ref(0)
function changeView(idx: number) {
  viewIdx.value = idx
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

onMounted(async () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  const project: any = await dataSource.getProjectData(
    route.params.type as string,
    route.params.id as string,
    {
      sosovalue: true,
      scv: true,
      securityAssessment: true,
      twitter: true,
      sosoValueNews: true,
      stablecoin: true,
      zanRiskScore: true
    }
  )
  data.value = project
  loading.value = false
})
</script>
