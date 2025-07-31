<template>
  <div class="home w-full h-screen flex">
    <!-- 聊天区 -->
    <ChatList />
    <div class="right flex-1 h-full flex flex-col">
      <!-- 顶部header -->
      <div class="header h-14 flex items-center border-b min-h-80px">
        <Header :title="'标题'" />
      </div>
      <!-- 聊天内容区 -->
      <div
        class="flex-1 overflow-auto p-4"
        :style="{ backgroundColor: contentConfig.backgroundColor }"
      >
        <!-- 这里是聊天消息内容区域 -->
      </div>
      <!-- 聊天输入框 - 固定在底部 -->
      <div class="border-t">
        <ChatInput />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defaultThemeSetting } from '@/theme/setting';

const contentConfig = defaultThemeSetting.colors.content;
</script>

<style scoped></style>
