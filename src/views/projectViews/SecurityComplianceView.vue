<template>
  <div class="mb-3" v-if="data.securityAssessment">
    <div class="h1 m-0">Security Assessment</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent>
          <h3>{{ data.securityAssessment?.report_name }}</h3>
          <div>{{ data.securityAssessment?.report_summary }}</div>
        </CardComponent>
      </div>
      <div class="col-md-6 my-2">
        <CardComponent class="h-100">
          <div
            class="text-center h-100 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="small">SCORE</div>
            <div class="d-flex align-items-center justify-content-center" style="font-size: 4.5rem">
              {{ data.securityAssessment?.final_score?.toFixed('2') }}
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
              labels: Object.keys(data.securityAssessment?.final_score_by_category)
            }"
            :series="[
              {
                name: 'Scores',
                data: Object.keys(data.securityAssessment?.final_score_by_category).map(
                  (key) => data.securityAssessment?.final_score_by_category[key]
                )
              }
            ]"
          />
        </CardComponent>
      </div>
    </div>
  </div>

  <div v-for="(info, idx) in data?.security_and_compliance" :key="idx" class="mb-3">
    <div class="h1 m-0">{{ info.title }}</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable class="w-100 h-100">
          <thead>
            <tr>
              <th>Title</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in info.value" :key="idx">
              <td
                v-html="render(item.title)"
                style="width: 30%; min-width: 120px; max-width: 300px; vertical-align: top"
              ></td>
              <td v-html="render(item.value)" style="vertical-align: top"></td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { render } from '@/helpers'

import CardComponent from '@/components/CardComponent.vue'
import CardTable from '@/components/CardTable.vue'

defineProps({
  data: Object
})
</script>
