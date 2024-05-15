<template>
  <div class="mb-3" v-if="notEmpty(data?.team)">
    <div class="h1 m-0">Team</div>
    <div class="row">
      <div class="col-sm-6 col-md-4 my-2" v-for="(people, idx) in data?.team" :key="idx">
        <PeopleComponent
          class="h-100"
          :avatar="people.avatar"
          :name="people.name"
          :title="people.title"
          :twitter="people.twitter"
          :linkedin="people.linkedin"
        />
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="notEmpty(data?.social_media?.twitter)">
    <div class="h1 m-0">Social Media</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>Total/Average</th>
              <th>Last Week</th>
              <th>2 Weeks Ago</th>
              <th>3 Weeks Ago</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in data?.social_media?.twitter" :key="idx">
              <td>{{ item.title }}</td>
              <td v-for="(value, idx2) in item.value" :key="idx2">{{ value }}</td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="data?.twitter">
    <div class="h1 m-0">Twitter</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent subheader="Overall Prompt Summary">
          {{ data?.twitter?.overall_prompt_summary }}
        </CardComponent>
      </div>
      <div class="col-md-6 my-2" v-for="(prompt, idx) in data?.twitter?.prompts_output" :key="idx">
        <CardComponent :subheader="prompt.category" class="h-100">
          {{ prompt.Output }}
        </CardComponent>
      </div>
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>Post Content</th>
              <th style="min-width: 200px">Sentiment Analysis</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in data?.twitter?.extracted_posts" :key="idx">
              <td>{{ item.post_content }}</td>
              <td>
                <span
                  class="badge me-1"
                  :class="formatSentimentAnalysis(item.sentiment_analysis)"
                ></span>
                <span style="text-transform: capitalize">{{ item.sentiment_analysis }}</span>
              </td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="data?.sosoValueNews">
    <div class="h1 m-0">News</div>
    <div class="row">
      <div class="col-md-12 my-2">
        <CardComponent>
          {{ data?.sosoValueNews?.overall_prompt_summary }}
        </CardComponent>
      </div>
      <div class="col-md-12 my-2">
        <CardComponent>
          <apexchart
            width="540"
            type="pie"
            :options="{
              labels: Object.keys(data?.sosoValueNews?.overall_sentiment_analysis?.distribution)
            }"
            :series="Object.values(data?.sosoValueNews?.overall_sentiment_analysis?.distribution)"
          />
        </CardComponent>
      </div>
      <div class="col-md-12 my-2">
        <CardTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in data?.sosoValueNews?.extracted_news" :key="idx">
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
              <td>{{ item.created_time }}</td>
            </tr>
          </tbody>
        </CardTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { notEmpty } from '@/helpers'
import PeopleComponent from '@/components/PeopleComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import CardTable from '@/components/CardTable.vue'

const props = defineProps({
  data: Object
})

console.log(props.data)

function formatSentimentAnalysis(value: string) {
  if (value === 'positive') {
    return 'bg-success'
  }
  if (value === 'negative') {
    return 'bg-danger'
  }
  return 'bg-secondary'
}
</script>
