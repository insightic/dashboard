<template>
  <NavBar />
  <SubNavBar :views="views" :view-idx="viewIdx" @change-view="changeView" />

  <div class="container py-2" style="margin-top: 112px">
    <div v-if="!loading">
      <HeaderView :data="data" />
      <OverviewView v-if="viewIdx == 0" :data="data" />
      <AssetFlowView v-if="viewIdx == 1" :data="data" />
      <PORView v-if="viewIdx == 2" :data="data" />
    </div>
    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { dataSource } from '@/http'
import NavBar from '@/components/NavBar.vue'
import SubNavBar from '@/components/SubNavBar.vue'
import HeaderView from './cexViews/HeaderView.vue'
import OverviewView from './cexViews/OverviewView.vue'
import AssetFlowView from './cexViews/AssetFlowView.vue'
import PORView from './cexViews/PORView.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const data = ref<any>({})
const loading = ref(true)
const views = ref([
  { name: 'Overview', icon: 'bi-house-door' },
  { name: 'Asset Flow', icon: 'bi-activity' },
  { name: 'Proof of Reserve', icon: 'bi-check2-square' }
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
      assetFlow: true,
      coinMarketCap: true,
      securityScore: true
    }
  )
  data.value = project
  loading.value = false
})
</script>
