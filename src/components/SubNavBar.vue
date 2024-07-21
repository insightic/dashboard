<template>
  <el-menu mode="horizontal" :default-active="activeIndex">
    <el-menu-item v-for="(view, idx) in views" :key="idx" :index="idx" @click="changeView(idx)">
      <div class="d-flex">
        <div class="me-2">
          <i class="bi" :class="view.icon"></i>
        </div>
        <div>{{ view.name }}</div>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  views: Array<any>,
  viewIdx: Number
})

const activeIndex = ref(0)

const emit = defineEmits<{
  (event: 'changeView', idx: number): void
}>()

function changeView(idx: number) {
  activeIndex.value = idx
  emit('changeView', idx)
}
</script>
