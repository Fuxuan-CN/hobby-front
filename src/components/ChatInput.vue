<template>
  <div
    class="chat-input-container border-t min-h-200px"
    :style="{
      '--text-color': inputBoxConfig.textColor,
      '--placeholder-color': inputBoxConfig.placeholderColor,
    }"
  >
    <!-- 工具栏 -->
    <div
      class="flex items-center gap-1 px-2 py-1"
      :style="{
        '--icon-color': inputBoxConfig.toolBar.iconColor,
        '--icon-hover-color': inputBoxConfig.toolBar.iconHoverColor,
      }"
    >
      <!-- 表情选择器 -->
      <ElPopover
        v-model:visible="showEmoji"
        placement="top-start"
        :width="400"
        popper-style="border: none;background-color: #303030;"
      >
        <div class="grid grid-cols-7 gap-1 p-2">
          <div
            v-for="(emoji, index) in emojis"
            :key="index"
            class="text-2xl text-center p-1 !color-[#ffffff] rounded cursor-pointer"
            @click="selectEmoji(emoji)"
          >
            {{ emoji }}
          </div>
        </div>

        <template #reference>
          <ElIcon
            class="cursor-pointer !color-[var(--icon-color)] !hover:color-[var(--icon-hover-color)] transition-colors"
            @click="showEmoji = !showEmoji"
            size="24"
            ><Watermelon
          /></ElIcon>
        </template>
      </ElPopover>

      <!-- 图片图标 -->
      <ElIcon
        class="cursor-pointer !color-[var(--icon-color)] !hover:color-[var(--icon-hover-color)] transition-colors"
        @click="handleImageUpload"
        size="24"
      >
        <Picture />
      </ElIcon>

      <!-- 文件图标 -->
      <ElIcon
        class="cursor-pointer !color-[var(--icon-color)] !hover:color-[var(--icon-hover-color)] transition-colors"
        @click="handleFileUpload"
        size="24"
      >
        <Document />
      </ElIcon>

      <div class="flex-1"></div>

      <!-- 聊天记录图标 -->
      <ElIcon
        class="cursor-pointer !color-[var(--icon-color)] !hover:color-[var(--icon-hover-color)] transition-colors"
        size="24"
      >
        <ChatDotSquare />
      </ElIcon>
    </div>

    <!-- 输入区域 -->
    <div class="relative mt-1 h-200px" :style="{ backgroundColor: inputBoxConfig.backgroundColor }">
      <ElInput
        v-model="message"
        type="textarea"
        placeholder="请输入消息..."
        class="focus:border-primary chat-input"
        input-style="background-color: transparent; border: none; outline: none;box-shadow: none;"
      />
    </div>

    <!-- 底部操作栏 -->
    <div class="flex items-center justify-between p-10px">
      <div class="text-sm" :style="{ color: inputBoxConfig.placeholderColor }">
        {{ messageLength }}/2000
      </div>
      <div class="flex gap-1px">
        <ElButton
          size="small"
          :style="{
            color: inputBoxConfig.clearButtonTextColor,
            backgroundColor: inputBoxConfig.clearButtonColor,
          }"
          class="!border-none"
          @click="clearMessage"
        >
          清空
        </ElButton>
        <ElButton
          size="small"
          type="primary"
          :disabled="!message.trim()"
          class="!border-none"
          :style="{
            color: inputBoxConfig.sendButtonTextColor,
            backgroundColor: inputBoxConfig.sendButtonColor,
          }"
          @click="sendMessage"
        >
          发送
        </ElButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defaultThemeSetting } from '@/theme/setting';
import { computed, ref } from 'vue';

const inputBoxConfig = defaultThemeSetting.colors.content.inputBox;

// 状态管理
const message = ref('');
const showEmoji = ref(false);

// 表情列表
const emojis = ref([
  '😀',
  '😁',
  '😂',
  '🤣',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '🙂',
  '🙃',
  '😋',
  '😎',
  '😍',
  '😘',
  '🥰',
  '😗',
  '😙',
  '👍',
  '👎',
  '👏',
  '🙌',
  '❤️',
  '💔',
  '🔥',
  '🎉',
  '🎊',
]);

// 计算属性
const messageLength = computed(() => message.value.length);

// 方法
const selectEmoji = (emoji) => {
  message.value += emoji;
};

const clearMessage = () => {
  message.value = '';
};

const sendMessage = () => {
  if (!message.value.trim()) return;

  // 发送消息逻辑
  message.value = '';
  showEmoji.value = false;
};
const handleImageUpload = () => {};

const handleFileUpload = () => {};
</script>

<style scoped>
.chat-input-container {
  border-top: #202734 1px solid;
  overflow: hidden;
}
/* 自定义滚动条 */
:deep(.el-textarea__inner::-webkit-scrollbar) {
  width: 6px;
}

:deep(.el-textarea__inner::-webkit-scrollbar-thumb) {
  background-color: #ccc;
  border-radius: 3px;
}
:deep(.el-textarea) {
  .el-textarea__inner {
    resize: none;
    color: var(--text-color);
  }

  .el-textarea__inner::placeholder {
    color: var(--placeholder-color) !important;
  }
}
</style>
