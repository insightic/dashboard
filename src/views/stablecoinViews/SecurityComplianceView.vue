<template>
  <div class="mb-3" v-if="data?.securityAssessment">
    <div class="h2 mb-2">Security Assessment</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent>
          <h5 :style="{ color: `var(--el-color-primary)` }">
            {{ data?.securityAssessment?.report_name }}
          </h5>
          <div>{{ data?.securityAssessment?.report_summary }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="small">SCORE</div>
            <div class="d-flex align-items-center justify-content-center" style="font-size: 4.5rem">
              {{ data?.securityAssessment?.final_score?.toFixed('2') }}
            </div>
          </div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100">
          <h3>Final Scores</h3>
          <apexchart
            width="640"
            type="radar"
            :options="{
              chart: {
                toolbar: {
                  show: false
                }
              },
              labels: Object.keys(data?.securityAssessment?.final_score_by_category)
            }"
            :series="[
              {
                name: 'Scores',
                data: Object.keys(data?.securityAssessment?.final_score_by_category).map(
                  (key) => data?.securityAssessment?.final_score_by_category[key]
                )
              }
            ]"
          />
        </CardComponent>
      </div>
    </div>
  </div>

  <div v-for="(info, idx) in data?.security_and_compliance" :key="idx" class="mb-3">
    <div class="h2 mb-2">{{ info.title }}</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <el-table class="cursor-font" :border="true" :data="info.value">
          <el-table-column label="Title">
            <template #default="scope">
              <div v-html="render(scope.row.title)"></div>
            </template>
          </el-table-column>
          <el-table-column label="Value" min-width="250">
            <template #default="scope">
              <div v-html="render(scope.row.value)"></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { render } from '@/helpers'

import CardComponent from '@/components/CardComponent.vue'

defineProps({
  data: Object
})
</script>
