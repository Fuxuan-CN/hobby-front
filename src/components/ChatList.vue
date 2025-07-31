<template>
  <!-- 消息区域 -->
  <div
    class="message w-248px h-full flex-shrink-0 flex flex-col"
    :style="{
      backgroundColor: chatListConfig.backgroundColor,
      '--slider-thumb-color': sliderConfig.thumbColor,
      '--slider-track-color': sliderConfig.trackColor,
      '--slider-thumb-hover-color': sliderConfig.thumbHoverColor,
      '--slider-background-color': sliderConfig.backgroundColor,
    }"
  >
    <div
      class="search px-12px"
      :style="{ backgroundColor: chatListConfig.searchBar.backgroundColor }"
    >
      <div class="flex items-center mb-12px mt-24px">
        <ElInput
          v-model="searchText"
          placeholder="搜索"
          class="search-input"
          :input-style="{
            height: '24px',
            backgroundColor: `transparent`,
            '--inner-background-color': `${chatListConfig.searchBar.innerBackgroundColor}`,
          }"
          :style="{ '--placeholder-color': chatListConfig.searchBar.placeholderColor }"
          clearable
        >
          <template #prefix>
            <!-- 搜索框 -->
            <ElIcon><Search /></ElIcon>
          </template>
        </ElInput>
        <!-- + 按钮 -->

        <ElButton
          icon="Plus"
          class="ml-12px"
          style="width: 24px; height: 24px"
          :color="chatListConfig.searchBar.buttonBackgroundColor"
          :style="{ color: chatListConfig.searchBar.buttonTextColor }"
        />
      </div>
    </div>
    <!-- 聊天列表 -->
    <div class="chat-list flex-1 h-full flex flex-col overflow-auto">
      <div>
        <div
          v-for="(item, index) in chatList"
          class="flex items-center px-16px py-12px border-none h-74px card user-select-none"
          :style="{
            backgroundColor: chatListConfig.itemColor,
            '--item-hover-color': chatListConfig.itemHoverColor,
            '--item-active-color': chatListConfig.itemActiveColor,
          }"
          :index="index"
          @click="selectChat"
        >
          <!-- 头像 -->
          <ElAvatar class="ml-18px flex-shrink-0" :size="50" :src="item.avatarUrl"></ElAvatar>
          <!-- 标题和内容 -->
          <div class="flex-1 ml-12px py-12px min-w-0">
            <div class="text-sm" :style="{ color: chatListConfig.titleColor }">
              {{ item.title }}
            </div>
            <div class="text-xs mt-4px truncate" :style="{ color: chatListConfig.contentColor }">
              {{ item.content }}
            </div>
          </div>
          <div class="flex flex-col items-center">
            <!-- 时间 -->
            <div class="text-xs flex-shrink-0" :style="{ color: chatListConfig.timeColor }">
              {{ item.time }}
            </div>
            <!-- 未读数 -->
            <ElTag
              round
              size="small"
              :color="chatListConfig.unreadTag.backgroundColor"
              effect="plain"
              :hit="false"
              v-if="item.unread !== 0"
              class="unread ml-12px flex-shrink-0 mt-4px"
              :style="{ color: chatListConfig.unreadTag.textColor }"
            >
              {{ item.unread }}
            </ElTag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultThemeSetting } from '@/theme/setting';

const searchText = ref<string>('');

const chatListConfig = defaultThemeSetting.colors.chatList;
const sliderConfig = defaultThemeSetting.colors.slider;

const chatList = [
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '张三',
    content: '你好，请问这个项目的截止日期是哪天？',
    time: '09:23',
    unread: 2,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '李四',
    content: '上次说的文件我已经发送到你邮箱了，请注意查收',
    time: '昨天',
    unread: 1,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '产品部群聊',
    content: '王经理：下周我们将召开新产品发布会',
    time: '昨天',
    unread: 5,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '技术支持',
    content: '您反馈的问题我们已经修复，请更新到最新版本',
    time: '07-26',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '赵五',
    content: '周末有空一起打球吗？',
    time: '07-25',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '人力资源部',
    content: '请在本周内完成员工信息更新',
    time: '07-25',
    unread: 1,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '前端开发组',
    content: '李华：今天下午3点进行技术分享',
    time: '07-24',
    unread: 3,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '客户A',
    content: '这个方案我看了，有几个地方需要修改',
    time: '07-24',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '财务部门',
    content: '本月报销截止到30号，请及时提交',
    time: '07-23',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '市场部',
    content: '最新的营销活动方案已经上传到共享盘',
    time: '07-23',
    unread: 2,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '王五',
    content: '上次的会议纪要能发我一份吗？',
    time: '07-22',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '客服中心',
    content: '您的投诉我们已经收到，会尽快处理',
    time: '07-22',
    unread: 1,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '项目组群聊',
    content: '张工：服务器已经部署完毕',
    time: '07-21',
    unread: 4,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '合作伙伴B',
    content: '关于合作细节，我们再沟通一下',
    time: '07-20',
    unread: 0,
  },
  {
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    title: '总经理办公室',
    content: '下周一开始实行新的考勤制度',
    time: '07-19',
    unread: 1,
  },
];

const selectChat = (e: MouseEvent) => {
  // 取消其他的样式类
  const chatList = document.querySelectorAll('.card');
  chatList.forEach((item) => {
    item.classList.remove('card-active');
  });
  // 添加当前样式类
  (e.currentTarget as HTMLElement).classList.add('card-active');
};
</script>

<style scoped>
.chat-list {
  /* 滚动条整体 */
  &::-webkit-scrollbar {
    width: 6px;
    background: var(--slider-background-color);
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    background: var(--slider-thumb-color);
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--slider-thumb-hover-color);
  }
  /* 滚动条轨道 */
  &::-webkit-scrollbar-track {
    background: var(--slider-track-color);
  }
}

.unread {
  border-color: transparent;
}

:deep(.search-input) {
  .el-input__inner::placeholder {
    color: var(--placeholder-color);
  }

  .el-input__wrapper {
    background-color: var(--inner-background-color);
    box-shadow: none;
  }
}

.card:hover {
  background-color: var(--item-hover-color) !important;
}

.card-active {
  background-color: var(--item-active-color) !important;
}

.user-select-none {
  user-select: none;
}
</style>
