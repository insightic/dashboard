<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    :ellipsis="false"
    style="background-color: var(--el-color-black)"
  >
    <div class="d-flex justify-content-center align-items-center px-2">
      <img class="me-2" src="/logo.png" alt="" width="24" height="24" />
      <b>Insightic</b>
    </div>
    <div class="flex-grow-1"></div>
    <!--    <div class="d-flex justify-content-center align-items-center me-3">-->
    <!--      <span class="small me-2">Dark Mode</span> <el-switch />-->
    <!--    </div>-->
    <el-menu-item index="1" @click="goto(1, 'stablecoins')">
      <div>Stablecoins</div>
    </el-menu-item>
    <el-menu-item index="2" @click="goto(2, 'cex')">
      <div>CEX</div>
    </el-menu-item>
    <el-menu-item index="3" @click="goto(3, 'lending')">
      <div>Leading</div>
    </el-menu-item>
    <div class="d-flex justify-content-center align-items-center me-3">
      <el-button @click="drawer = true">Insightic AI</el-button>
    </div>
  </el-menu>

  <el-drawer v-model="drawer" :with-header="false">
    <div class="h-100"><ChatComponent /></div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ChartComponent from '@/components/ChartComponent.vue'
import ChatComponent from '@/components/ChatComponent.vue'
const route = useRoute()
const router = useRouter()
const emits = defineEmits(['change'])

let activeTab = '1'
if (route.path.startsWith('/cex')) activeTab = '2'
if (route.path.startsWith('/lending')) activeTab = '3'
const activeIndex = ref(activeTab)

let drawer = ref(false)

function goto(idx: number, type: string) {
  activeIndex.value = idx.toString()
  router.push(`/${type}`)
  emits('change', type)
}
</script>
