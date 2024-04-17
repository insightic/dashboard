<template>
  <div class="mb-3">
    <div class="row">
      <div class="col-md-8 my-2">
        <CardComponent class="h-100" style="min-height: 180px">
          <div class="row">
            <div class="col-md-3 d-flex align-items-center justify-content-center">
              <img :src="data?.logoUrl" alt="Logo" style="max-width: 128px" />
            </div>
            <div class="col-md-9">
              <div class="h3 mb-0">{{ data?.name }}</div>
              <div>{{ data?.type }} @ {{ data?.registration }}</div>
              <div>Established at {{ data?.established }}</div>
              <div class="mt-2 small">
                <a
                  class="me-2"
                  v-if="data?.website_info?.url"
                  :href="data.website_info.url"
                  target="_blank"
                >
                  <IconAppWindow :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.twitter"
                  :href="data.links.twitter"
                  target="_blank"
                >
                  <IconBrandX :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.linkedin"
                  :href="data.links.linkedin"
                  target="_blank"
                >
                  <IconBrandLinkedin :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.reddit"
                  :href="data.links.reddit"
                  target="_blank"
                >
                  <IconBrandReddit :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.github"
                  :href="data.links.github"
                  target="_blank"
                >
                  <IconBrandGithub :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.telegram"
                  :href="data.links.telegram"
                  target="_blank"
                >
                  <IconBrandTelegram :stroke-width="1" :size="18" />
                </a>
              </div>
            </div>
          </div>
        </CardComponent>
      </div>

      <div class="col-md-4 my-2">
        <CardComponent class="h-100"> </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  IconAppWindow,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandGithub
} from '@tabler/icons-vue'
import CardComponent from '@/components/CardComponent.vue'

defineProps({
  data: Object
})
</script>
