<template>
  <div class="h-100 d-flex flex-column">
    <div class="d-flex">
      <div class="h3">Chat with Insightic AI</div>
      <div class="mx-auto"></div>
      <div class="d-flex align-items-center">
        <img class="me-2" src="/logo.png" alt="" width="32" height="32" /> Insightic
      </div>
    </div>

    <div class="text-secondary mb-3">Understand Web 3 Data</div>
    <div
      class="flex-grow-1 rounded d-flex flex-column"
      style="border: 0.5px solid #cccccc55; min-height: 0"
    >
      <div
        class="flex-grow-1 p-3 overflow-auto"
        style="display: flex; flex-direction: column; gap: 10px"
      >
        <ChatItemComponent />
        <ChatItemComponent is-user />
        <ChatItemComponent />
        <ChatItemComponent is-user />
        <ChatItemComponent />
        <ChatItemComponent />
        <ChatItemComponent />
        <ChatItemComponent />
        <ChatItemComponent />
        <ChatItemComponent />
        <ChatItemComponent />
      </div>
      <div style="height: 70px; border-top: 0.5px solid #cccccc55" class="p-2">
        <div class="d-flex h-100 w-100 justify-content-center align-items-center">
          <el-input v-model="textarea" style="width: 100%; height: 56px" placeholder="Please input">
            <template #append>
              <el-button>Send</el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatItemComponent from '@/components/ChatItemComponent.vue'
import difyClient from '@/dify'

// difyClient.sendChatMessage('Hello', (msg)=> {
//   try {
//     const data = JSON.parse(msg.data)
//     console.log(data)
//   } catch (e) {
//     // ignore
//   }
// }, ()=> {});
const textarea = ref('')
</script>
