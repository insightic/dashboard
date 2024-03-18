<template>
  <nav class="fixed-top navbar navbar-expand" style="margin-top: 52px">
    <div class="container-xl">
      <ul class="navbar-nav flex-row subNav">
        <li
          class="nav-item"
          v-for="(item, idx) in views"
          :key="idx"
          :class="{ active: idx == viewIdx }"
          @click="changeView(idx)"
          style="cursor: pointer"
        >
          <a class="nav-link">
            <span class="nav-link-icon" :class="{ 'text-primary': idx == viewIdx }">
              <i class="bi" :class="item.icon"></i>
            </span>
            <span
              class="nav-link-title d-lg-inline-block"
              :class="{ 'text-primary': idx == viewIdx, 'd-none': idx != viewIdx }"
              style="white-space: nowrap"
            >
              {{ item.name }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
defineProps({
  views: Array<any>,
  viewIdx: Number
})

const emit = defineEmits<{
  (event: 'changeView', idx: number): void
}>()

function changeView(idx: number) {
  emit('changeView', idx)
}
</script>
