<template>
  <NavBar @change="onChange" />

  <div class="container py-2" style="margin-top: 56px">
    <div v-if="!loading && type === 'stablecoins'" class="mt-2">
      <div class="h1">Stablecoins</div>
      <div class="row">
        <div class="col-md-12">
          <el-table :data="stablecoins" style="width: 100%">
            <el-table-column label="Logo" min-width="100">
              <template #default="scope">
                <div
                  class="rounded p-1 d-flex flex-column align-items-center justify-content-center"
                  style="width: 48px; height: 48px; background-color: white"
                >
                  <img :src="scope?.row?.logoUrl" />
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Name" sortable min-width="200" />
            <el-table-column
              label="MarketCap"
              sortable
              :sort-method="sortMethod((row: any) => row?.sosovalue?.market_cap_value)"
              min-width="200"
            >
              <template #default="scope">
                <div>{{ toFixed(scope?.row?.sosovalue?.market_cap_value) }}</div>
              </template>
            </el-table-column>
            <el-table-column
              label="Rating"
              sortable
              :sort-method="sortMethod((row: any) => row?.rating, true)"
              min-width="200"
            >
              <template #default="scope">
                <div
                  style="text-transform: uppercase; font-weight: bold"
                  :class="ratingColor(scope?.row?.rating)"
                >
                  {{ scope?.row?.rating }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div v-if="!loading && type === 'cex'" class="mt-2">
      <div class="h1">Centralized Exchange</div>
      <div class="row">
        <div class="col-md-12">
          <el-table :data="cexes" style="width: 100%">
            <el-table-column label="Logo" min-width="100">
              <template #default="scope">
                <div
                  class="rounded p-1 d-flex flex-column align-items-center justify-content-center"
                  style="width: 48px; height: 48px; background-color: white"
                >
                  <img :src="scope?.row?.logoUrl" />
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Name" sortable min-width="200" />
            <el-table-column
              label="Trust Score"
              sortable
              :sort-method="sortMethod((row: any) => row?.securityScore?.combined_security_score)"
              min-width="200"
            >
              <template #default="scope">
                <div>{{ scope?.row?.securityScore?.combined_security_score }}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div v-if="!loading && type === 'lending'" class="mt-2">
      <div class="text-center mt-5">
        <img src="/logo.png" alt="" width="64" height="64" />
        <div class="h3 mt-2">Coming soon...</div>
      </div>
    </div>

    <div v-if="loading" class="p-3 mx-auto" style="max-width: 960px">
      <div class="loading mx-auto mt-5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, type ComputedRef } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import { useProjectsStore } from '@/stores/projects'
import { ratingColor, formatNumber } from '@/helpers'

const loading = ref(true)
const router = useRouter()
const route = useRoute()
const projectsStore = useProjectsStore()

onMounted(async () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  await fetch()
})

const type = computed(() => route.params.type as string)

async function onChange(type: string) {
  router.push(`/${type}`)
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  await fetch()
}

async function fetch() {
  loading.value = true
  if (type.value === 'stablecoins') await projectsStore.fetchStablecoins()
  if (type.value === 'cex') await projectsStore.fetchCexes()
  loading.value = false
}

function goto(type: string, id: string) {
  router.push(`/${type}/${id}`)
}

function toFixed(value: unknown) {
  if (Number.isNaN(Number(value))) return '-'
  return `$${formatNumber(Number(value))}`
}

function sortMethod(getter: any, isRating?: boolean) {
  function toNumber(value: unknown) {
    if (Number.isNaN(Number(value))) return -Number.MAX_VALUE
    return Number(value)
  }

  return (lhs: any, rhs: any) => {
    if (isRating) {
      let lhsRating: string = getter(lhs)
      lhsRating = lhsRating.toLowerCase()
      let lhsScore = 0
      if (lhsRating.length >= 1) lhsScore += 10 * (1000 - lhsRating.charCodeAt(0)) + 5
      if (lhsRating.length >= 2) {
        if (lhsRating[1] == '+') lhsScore += 1
        else if (lhsRating[1] == '-') lhsScore -= 1
      }
      let rhsRating: string = getter(rhs)
      rhsRating = rhsRating.toLowerCase()
      let rhsScore = 0
      if (rhsRating.length >= 1) rhsScore += 10 * (1000 - rhsRating.charCodeAt(0)) + 5
      if (rhsRating.length >= 2) {
        if (rhsRating[1] == '+') rhsScore += 1
        else if (rhsRating[1] == '-') rhsScore -= 1
      }
      return lhsScore - rhsScore
    }
    return toNumber(getter(lhs)) - toNumber(getter(rhs))
  }
}

const stablecoins: ComputedRef<Array<any>> = computed(() => projectsStore.stablecoins)

const cexes: ComputedRef<Array<any>> = computed(() => projectsStore.cexes)
</script>

<style scoped>
td {
  cursor: pointer;
}

tr:hover {
  background-color: rgb(0, 0, 0, 0.05);
}
</style>
