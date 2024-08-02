<template>
  <div v-if="notEmpty(data?.team)">
    <div class="h2 mb-2">Team</div>
    <div class="row mb-3">
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

  <div v-if="data?.twitter">
    <div class="h2">Twitter Profile</div>
    <CardComponent class="mb-3">
      <div class="d-flex align-items-center">
        <div class="rounded me-4" :style="{height: '100px', width: '100px', backgroundSize: 'cover', backgroundImage: `url(${data?.twitter?.profile_imageURL})`}">
        </div>

        <div>
          <div>{{data?.twitter?.profile_name}}</div>
          <div>{{data?.twitter?.profile_handle}}</div>
          <div>{{data?.twitter?.profile_joining_date}}</div>
        </div>

        <div class="mx-auto"></div>

        <div class="text-center" style="width: 200px">
          <div class="h4">{{data?.twitter?.profile_followers}}</div>
          <div class="text-secondary">Followers</div>
        </div>

        <div class="text-center" style="width: 200px">
          <div class="h4">{{data?.twitter?.profile_following}}</div>
          <div class="text-secondary">Following</div>
        </div>
      </div>
    </CardComponent>

    <div class="h2 mb-2">Twitter</div>
    <div class="row mb-3">
      <div class="col-md-12 my-2">
        <CardComponent subheader="Overall Prompt Summary">
          {{ data?.twitter?.overall_prompt_summary }}
        </CardComponent>
      </div>
      <div class="col-md-6 my-2" v-for="(prompt, idx) in twitterPromptsOutput" :key="idx">
        <CardComponent :subheader="prompt.category" class="h-100">
          {{ prompt.Output }}
        </CardComponent>
      </div>
      <div class="col-md-12 my-2">
        <el-table :border="true" :data="twitterExtractedPost">
          <el-table-column prop="post_content" label="Post Content" min-width="200" />
          <el-table-column prop="sentiment_analysis" label="Sentiment Analysis">
            <template #default="scope">
              <div
                class="rounded px-2 py-1 d-inline"
                :class="formatSentimentAnalysis(scope.row.sentiment_analysis)"
              >
                {{ scope.row.sentiment_analysis }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <div v-if="data?.linkedin">
    <div class="h2">LinkedIn Profile</div>
    <CardComponent class="mb-3">
      <div class="d-flex align-items-center">
        <div>
          <div>{{data?.linkedin?.profile_title}}</div>
          <div>{{data?.linkedin?.profile_overview}}</div>
          <div>{{data?.linkedin?.industry}}</div>
        </div>

        <div class="mx-auto"></div>

        <div class="text-center" style="width: 200px">
          <div class="h4">{{data?.linkedin?.profile_followers ?? '0'}}</div>
          <div class="text-secondary">Followers</div>
        </div>

        <div class="text-center" style="width: 200px">
          <div class="h4">{{data?.linkedin?.profile_following ?? '0'}}</div>
          <div class="text-secondary">Following</div>
        </div>
      </div>
    </CardComponent>

    <div class="h2 mb-2">LinkedIn</div>
    <div class="row mb-3">
      <div class="col-md-12 my-2">
        <el-table :border="true" :data="linkedinExtractedPost">
          <el-table-column prop="post_content" label="Post Content" min-width="200" />
          <el-table-column prop="sentiment_analysis" label="Sentiment Analysis">
            <template #default="scope">
              <div
                class="rounded px-2 py-1 d-inline"
                :class="formatSentimentAnalysis(scope.row.sentiment_analysis)"
              >
                {{ scope.row.sentiment_analysis }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <div class="mb-3" v-if="data?.sosoValueNews">
    <div class="h2 mb-2">News</div>
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
        <el-table :border="true" :data="extractedNews">
          <el-table-column prop="title" label="Title" />
          <el-table-column prop="body" label="Content" />
          <el-table-column prop="created_time" label="Date" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { notEmpty } from '@/helpers'
import PeopleComponent from '@/components/PeopleComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import { computed } from 'vue'

const props = defineProps({
  data: Object
})

const twitterPromptsOutput = computed(() => {
  const output = props.data?.twitter?.prompts_output;
  if (output && output.length > 4) {
    return output.slice(0, 4)
  }
  return output;
})

const twitterExtractedPost = computed(() => {
  const output = props.data?.twitter?.extracted_posts;
  if (output && output.length > 10) {
    return output.slice(0, 10)
  }
  return output;
})

const linkedinExtractedPost = computed(() => {
  const output = props.data?.linkedin?.extracted_posts;
  if (output && output.length > 10) {
    return output.slice(0, 10)
  }
  return output;
})

const extractedNews = computed(() => {
  const news: Array<any> = props.data?.sosoValueNews?.extracted_news
  if (news && news.length > 10) {
    return news.slice(0, 10)
  }
  return news
})

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
