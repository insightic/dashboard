<template>
  <div class="mb-3">
    <div class="row">
      <div class="col-md-8 my-2">
        <Card class="h-100" style="min-height: 180px">
          <div class="row">
            <div class="col-md-3 d-flex align-items-center justify-content-center">
              <img :src="baseUrl + '/' + data.logo" alt="Logo" style="max-width: 128px" />
            </div>
            <div class="col-md-9">
              <div class="h3">{{ data.name }}</div>
              <div>{{ data.description }}</div>
              <div class="mt-2 small">
                <a
                  class="me-2"
                  v-if="data?.links?.website"
                  :href="data.links.website"
                  target="_blank"
                >
                  <IconAppWindow :stroke-width="1" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.twitter"
                  :href="data.links.twitter"
                  target="_blank"
                >
                  <IconBrandTwitter :stroke-width="1" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.linkedin"
                  :href="data.links.linkedin"
                  target="_blank"
                >
                  <IconBrandLinkedin :stroke-width="1" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.reddit"
                  :href="data.links.reddit"
                  target="_blank"
                >
                  <IconBrandReddit :stroke-width="1" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.github"
                  :href="data.links.github"
                  target="_blank"
                >
                  <IconBrandGithub :stroke-width="1" />
                </a>
                <a
                  class="me-2"
                  v-if="data?.links?.telegram"
                  :href="data.links.telegram"
                  target="_blank"
                >
                  <IconBrandTelegram :stroke-width="1" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div class="col-md-4 my-2">
        <Card class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="small">RATING</div>
            <div
              class="d-flex align-items-center justify-content-center"
              style="font-size: 4.5rem"
              :class="ratingColor(data.rating)"
            >
              {{ data.rating }}
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  IconAppWindow,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandGithub
} from '@tabler/icons-vue'

import Card from '@/components/CardComponent.vue'

defineProps({
  data: Object as any,
  baseUrl: String
})

function ratingColor(rating: string): string {
  rating = rating.replaceAll('-', '').replaceAll('+', '').toLowerCase()
  if (rating === 'a') {
    return 'text-success'
  } else if (rating === 'b') {
    return 'text-primary'
  } else if (rating === 'c') {
    return 'text-warning'
  } else if (rating === 'd') {
    return 'text-danger'
  }
  return ''
}
</script>
