<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    :ellipsis="false"
    class="fixed-top"
    style="position: fixed !important"
  >
    <div class="d-flex justify-content-center align-items-center px-2">
      <img class="me-2" src="/logo.png" alt="" width="24" height="24" />
      <b>Insightic</b>
    </div>
    <div class="flex-grow-1"></div>
    <el-menu-item index="1" @click="goto(1, 'stablecoins')">
      <div>Stablecoins</div>
    </el-menu-item>
    <el-menu-item index="2" @click="goto(2, 'cex')">
      <div>CEX</div>
    </el-menu-item>
    <el-menu-item index="3" @click="goto(3, 'lending')">
      <div>Leading</div>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const emits = defineEmits(['change'])

const activeIndex = ref('1')

function goto(idx: number, type: string) {
  activeIndex.value = idx.toString()
  router.push(`/${type}`)
  emits('change', type)
}
</script>
