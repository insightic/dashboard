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
              <div>Launched at {{ data?.launch_info?.launch_date }}</div>
              <div>{{ data?.launch_info?.growth }}</div>
              <div class="mt-2 small">
                <a class="me-2" v-if="data?.email" :href="`mailto:${data.email}`">
                  <IconMail :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.url"
                  :href="data.website_info.url"
                  target="_blank"
                >
                  <IconAppWindow :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.facebook"
                  :href="data.website_info.facebook"
                  target="_blank"
                >
                  <IconBrandFacebook :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.twitter"
                  :href="data.website_info.twitter"
                  target="_blank"
                >
                  <IconBrandX :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.linkedin"
                  :href="data.website_info.linkedin"
                  target="_blank"
                >
                  <IconBrandLinkedin :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.discord"
                  :href="data.website_info.discord"
                  target="_blank"
                >
                  <IconBrandDiscord :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.reddit"
                  :href="data.website_info.reddit"
                  target="_blank"
                >
                  <IconBrandReddit :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.github"
                  :href="data.website_info.github"
                  target="_blank"
                >
                  <IconBrandGithub :stroke-width="1" :size="18" />
                </a>
                <a
                  class="me-2"
                  :style="{ color: `var(--el-color-primary)` }"
                  v-if="data?.website_info?.telegram"
                  :href="data.website_info.telegram"
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
        <CardComponent class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="small">
              TRUST SCORE
              <el-tooltip
                class="box-item"
                style="max-width: 320px"
                effect="dark"
                :raw-content="true"
                content="Trust Score is a rating algorithm developed by insightic to evaluate the legitimacy of<br/>an exchange. Trust Score is calculated on a range of metrics such as liquidity, scale<br/>of operations, cybersecurity score, and more from various data sources, including<br/>trustworthy third parties and home-grown databases."
                placement="bottom-start"
              >
                <IconInfoCircle :size="16" style="cursor: pointer" />
              </el-tooltip>
            </div>
            <div
              class="d-flex align-items-center justify-content-center"
              style="font-size: 4.5rem"
              v-if="data?.securityScore?.combined_security_score"
            >
              {{ data?.securityScore?.combined_security_score }}
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  IconAppWindow,
  IconMail,
  IconBrandX,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandGithub,
  IconInfoCircle
} from '@tabler/icons-vue'
import CardComponent from '@/components/CardComponent.vue'

defineProps({
  data: Object
})
</script>
