<template>
  <NavBar />
  <SubNavBar :views="views" :view-idx="viewIdx" @change-view="(idx) => (viewIdx = idx)" />

  <div class="container py-2" style="margin-top: 112px">
    <div v-if="!loading">
      <OverviewView v-if="viewIdx == 0" />
    </div>
    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import SubNavBar from '@/components/SubNavBar.vue'
import OverviewView from './cexViews/OverviewView.vue'

const loading = ref(true)
const views = ref([{ name: 'Overview', icon: 'bi-house-door' }])
const viewIdx = ref(0)

onMounted(async () => {
  loading.value = false
})
</script>
