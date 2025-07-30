<template>
  <div></div>
</template>

<script setup lang="ts">
import { defaultThemeSetting } from '@/theme/setting';
import { deepThemeMerge } from '@/utils';

const userTheme: App.Theme.ThemeSettingPartial = {
  id: 'custom',
  name: '自定义主题',
  description: '自定义主题',
  author: 'admin',
  colors: {
    sidebar: {
      backgroundColor: '#nihao',
    },
    chatList: {
      backgroundColor: '#nihao',
      itemHoverColor: '#nihao',
      itemActiveColor: '#nihao',
      unreadTag: {
        backgroundColor: '#nihao',
      },
    },
  },
};

// 合并配置
const finalTheme = deepThemeMerge(defaultThemeSetting, userTheme);
console.log(finalTheme);
</script>

<style scoped></style>
