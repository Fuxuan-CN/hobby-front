<template>
  <div
    data-tauri-drag-region
    class="system-bar"
    :style="{ backgroundColor: headerConfig.backgroundColor }"
  >
    <!-- 按钮区域 -->
    <div
      id="stage-button"
      :style="{
        '--icon-color': headerConfig.iconColor,
        '--hover-color': headerConfig.hoverColor,
      }"
      class="flex-shrink-0"
    >
      <!-- 最小化按钮 -->
      <button class="min" @click="minimize">
        <ElIcon><SemiSelect /></ElIcon>
      </button>
      <!-- 最大化按钮 -->
      <button class="max" @click="maximize">
        <ElIcon v-if="!isMaximized"><FullScreen /></ElIcon>
        <ElIcon :size="16" v-else><Connection /></ElIcon>
      </button>
      <!-- 关闭按钮 -->
      <button class="close" @click="close">
        <ElIcon><Close /></ElIcon>
      </button>
    </div>

    <!-- 标题区域-->
    <div class="title" :style="{ color: headerConfig.textColor }">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultThemeSetting } from '@/theme/setting';
import { closeWindow, exitFullscreen, minimizeWindow, toggleFullscreen } from '@/utils';
import { ref, watch } from 'vue';

defineProps<{
  title: string;
}>();

const headerConfig = defaultThemeSetting.colors.content.header;

const isMaximized = ref(false);
watch(
  () => isMaximized.value,
  (val) => {
    if (val) {
      toggleFullscreen();
    } else {
      exitFullscreen();
    }
  },
);

function maximize() {
  isMaximized.value = !isMaximized.value;
}

function minimize() {
  minimizeWindow();
}

function close() {
  closeWindow();
}
</script>

<style scoped>
.system-bar {
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 100%;
  box-sizing: border-box;
}

#stage-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end; /* 按钮靠右显示 */
}

#stage-button button {
  border: none;
  outline: none;
  cursor: default;
  background-color: transparent;
}

.min,
.max,
.close {
  width: 32px;
  height: 32px;
  color: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

#stage-button .min:hover,
#stage-button .max:hover {
  background: var(--hover-color);
  transition: background 0.18s;
}

#stage-button .close:hover {
  background: #c42b1c;
  transition: background 0.18s;
}

.title {
  margin-left: 18px;
  margin-bottom: 8px;
}
</style>
