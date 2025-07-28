<template>
  <div class="chat-input-container border-t p-2 min-h-200px">
    <!-- 工具栏 -->
    <div class="flex items-center gap-1 px-2 py-1">
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
            class="text-2xl text-center p-1 hover:bg-gray-100 rounded cursor-pointer"
            @click="selectEmoji(emoji)"
          >
            {{ emoji }}
          </div>
        </div>

        <template #reference>
          <ElIcon
            class="cursor-pointer !hover:color-[#0066CC] !color-[#ffffff] transition-colors"
            @click="showEmoji = !showEmoji"
            size="24"
            ><Watermelon
          /></ElIcon>
        </template>
      </ElPopover>

      <!-- 图片图标 -->
      <ElIcon
        class="cursor-pointer !hover:color-[#0066CC] !color-[#ffffff] transition-colors"
        @click="handleImageUpload"
        size="24"
      >
        <Picture />
      </ElIcon>

      <!-- 文件图标 -->
      <ElIcon
        class="cursor-pointer !hover:color-[#0066CC] !color-[#ffffff] transition-colors"
        @click="handleFileUpload"
        size="24"
      >
        <Document />
      </ElIcon>

      <div class="flex-1"></div>

      <!-- 聊天记录图标 -->
      <ElIcon
        class="cursor-pointer !hover:color-[#0066CC] !color-[#ffffff] transition-colors"
        size="24"
      >
        <ChatDotSquare />
      </ElIcon>
    </div>

    <!-- 输入区域 -->
    <div class="relative mt-1 bg-transparent">
      <ElInput
        v-model="message"
        type="textarea"
        placeholder="请输入消息..."
        class="focus:border-primary chat-input"
        input-style="background-color: transparent; border: none; color: #ffffffff; outline: none;box-shadow: none;"
      />
    </div>

    <!-- 底部操作栏 -->
    <div class="flex items-center justify-between mt-68px">
      <div class="text-sm text-gray-500">{{ messageLength }}/2000</div>
      <div class="flex gap-2">
        <ElButton size="small" class="text-gray-700 hover:bg-gray-200" @click="clearMessage">
          清空
        </ElButton>
        <ElButton size="small" type="primary" :disabled="!message.trim()" @click="sendMessage">
          发送
        </ElButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

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
  }
}
</style>
