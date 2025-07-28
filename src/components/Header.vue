<template>
  <div data-tauri-drag-region class="titlebar">
    <div id="stage-button">
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
  </div>
</template>

<script setup lang="ts">
import { closeWindow, exitFullscreen, minimizeWindow, toggleFullscreen } from '@/utils';

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

<style scoped lang="scss">
.titlebar {
  display: flex;
  flex-direction: row;
  height: 32px;
  user-select: none;
  width: 100%;
  height: 100%;
}
#stage-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /*在 Flexbox 中，margin-left: auto; 会将元素推到其容器的末尾，而 margin-right: 0; 在 Flexbox 中不会产生相同的效果。*/
  margin-left: auto;
}

#stage-button button {
  border: none;
  outline: none;
  cursor: default;
  background-color: inherit;
}

.min,
.max,
.close {
  width: 32px;
  height: 32px;
  color: #fff;
}
#stage-button .min:hover,
#stage-button .max:hover {
  background: #2f3442;
  transition: background 0.18s;
}
#stage-button .close:hover {
  background: #c42b1c;
  transition: background 0.18s;
}
</style>
