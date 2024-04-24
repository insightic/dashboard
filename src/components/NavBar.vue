<template>
  <nav class="fixed-top navbar navbar-expand navbar-dark bg-dark text-light" style="height: 56px">
    <div class="container-xl">
      <div
        class="d-flex align-items-center"
        style="width: 128px; cursor: pointer"
        @click="router.push('/')"
      >
        <div class="me-2 rounded bg-light" style="padding: 4px">
          <img src="/logo.png" alt="" width="24" height="24" />
        </div>
        <div class="m-0">Insightic</div>
      </div>
      <div class="m-0"></div>
      <ul class="navbar-nav">
        <li class="nav-item" style="cursor: pointer">
          <a class="nav-link text-light" @click="goto('stablecoins')">Stablecoins</a>
        </li>
        <li class="nav-item" style="cursor: pointer">
          <a class="nav-link text-light" @click="goto('cex')">CEX</a>
        </li>
        <li class="nav-item" style="cursor: pointer">
          <a class="nav-link text-light" @click="goto('lending')">Lending</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const emits = defineEmits(['change'])

function goto(type: string) {
  router.push(`/${type}`)
  emits('change', type)
}
</script>
