<template>
  <NavBar />
  <SubNavBar :views="views" :view-idx="viewIdx" @change-view="(idx) => (viewIdx = idx)" />

  <div class="container py-2" style="margin-top: 112px">
    <div v-if="!loading">
      <HeaderView :data="data" />
      <OverviewView v-if="viewIdx == 0" :data="data" />
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
import { useRoute } from 'vue-router'

const route = useRoute()

const data = ref<any>({})
const loading = ref(true)
const views = ref([{ name: 'Overview', icon: 'bi-house-door' }])
const viewIdx = ref(0)

onMounted(async () => {
  const project: any = await dataSource.getProjectData(
    route.params.type as string,
    route.params.id as string
  )
  data.value = project
  console.log(data.value)
  loading.value = false
})
</script>
