<template>
  <div class="h2 mb-2">Summary</div>
  <div class="row">
    <div class="col-md-12 my-2">
      <CardComponent>
        {{ data.webReview.overall_prompt_summary }}
      </CardComponent>
    </div>
    <div class="col-md-6 my-2" v-for="(prompt, idx) in data.webReview.prompts_output" :key="idx">
      <CardComponent :subheader="prompt.category" class="h-100">
        {{ prompt.Output }}
      </CardComponent>
    </div>
  </div>
  <div class="h2 mb-2">Reviews</div>
  <div class="row">
    <div class="col-md-6 my-2" v-for="(review, idx) in data.webReview.list_of_reviews" :key="idx">
      <CardComponent :subheader="review.review_title" class="h-100">
        <div class="small text-secondary mb-2">{{ review.reviewer }}, {{ review.review_date }}</div>
        <div>{{ review.review }}</div>
      </CardComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
defineProps(['data'])
</script>
