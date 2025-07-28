<template>
  <div class="home w-full h-screen flex">
    <!-- 消息区域 -->
    <div class="message w-248px h-full flex-shrink-0 bg-[#2f3442] flex flex-col">
      <div class="search bg-[#1b1b1b] px-12px">
        <div class="flex items-center mb-12px mt-24px">
          <ElInput
            v-model="searchText"
            placeholder="搜索"
            class="search-input"
            style="height: 24px"
          >
            <template #prefix>
              <!-- 搜索框 -->
              <ElIcon><search /></ElIcon>
            </template>
          </ElInput>
          <!-- + 按钮 -->

          <ElButton icon="Plus" class="ml-12px" style="width: 24px; height: 24px" color="#282828" />
        </div>
      </div>
      <!-- 聊天列表 -->
      <div class="chat-list flex-1 h-full flex flex-col overflow-auto">
        <div>
          <div
            v-for="item in chatList"
            class="flex items-center px-16px py-12px border-none h-74px card bg-[#1B1B1B]"
          >
            <!-- 头像 -->
            <ElAvatar
              class="ml-18px flex-shrink-0"
              :size="50"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></ElAvatar>
            <!-- 标题和内容 -->
            <div class="flex-1 ml-12px py-12px min-w-0">
              <div class="text-sm">{{ item.title }}</div>
              <div class="text-xs text-gray-500 mt-4px truncate">{{ item.content }}</div>
            </div>
            <div class="flex flex-col items-center">
              <!-- 时间 -->
              <div class="text-xs text-gray-500 flex-shrink-0">{{ item.time }}</div>
              <!-- 未读数 -->
              <ElTag
                round
                size="small"
                color="#575757"
                effect="plain"
                :hit="false"
                v-if="item.unread !== 0"
                class="unread ml-12px flex-shrink-0 mt-4px"
                >{{ item.unread }}</ElTag
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 聊天区 -->
    <div class="right flex-1 h-full flex flex-col">
      <!-- 顶部header -->
      <div class="header h-14 flex items-center border-b">
        <Header />
      </div>
      <!-- 聊天内容区 -->
      <div class="content flex-1 overflow-auto p-4">
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
import { ref } from 'vue';
const searchText = ref('');
const chatList = [
  {
    title: '张三',
    content: '你好，请问这个项目的截止日期是哪天？',
    time: '09:23',
    unread: 2,
  },
  {
    title: '李四',
    content: '上次说的文件我已经发送到你邮箱了，请注意查收',
    time: '昨天',
    unread: 1,
  },
  {
    title: '产品部群聊',
    content: '王经理：下周我们将召开新产品发布会',
    time: '昨天',
    unread: 5,
  },
  {
    title: '技术支持',
    content: '您反馈的问题我们已经修复，请更新到最新版本',
    time: '07-26',
    unread: 0,
  },
  {
    title: '赵五',
    content: '周末有空一起打球吗？',
    time: '07-25',
    unread: 0,
  },
  {
    title: '人力资源部',
    content: '请在本周内完成员工信息更新',
    time: '07-25',
    unread: 1,
  },
  {
    title: '前端开发组',
    content: '李华：今天下午3点进行技术分享',
    time: '07-24',
    unread: 3,
  },
  {
    title: '客户A',
    content: '这个方案我看了，有几个地方需要修改',
    time: '07-24',
    unread: 0,
  },
  {
    title: '财务部门',
    content: '本月报销截止到30号，请及时提交',
    time: '07-23',
    unread: 0,
  },
  {
    title: '市场部',
    content: '最新的营销活动方案已经上传到共享盘',
    time: '07-23',
    unread: 2,
  },
  {
    title: '王五',
    content: '上次的会议纪要能发我一份吗？',
    time: '07-22',
    unread: 0,
  },
  {
    title: '客服中心',
    content: '您的投诉我们已经收到，会尽快处理',
    time: '07-22',
    unread: 1,
  },
  {
    title: '项目组群聊',
    content: '张工：服务器已经部署完毕',
    time: '07-21',
    unread: 4,
  },
  {
    title: '合作伙伴B',
    content: '关于合作细节，我们再沟通一下',
    time: '07-20',
    unread: 0,
  },
  {
    title: '总经理办公室',
    content: '下周一开始实行新的考勤制度',
    time: '07-19',
    unread: 1,
  },
];
</script>

<style scoped>
.chat-list {
  /* 滚动条整体 */
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    background: rgba(120, 120, 120, 0.25);
    border-radius: 4px;
    transition: background 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(120, 120, 120, 0.45);
  }
  /* 滚动条轨道 */
  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

.unread {
  border-color: transparent;
  color: #d6d7e0;
}

:deep(.search-input) {
  .el-input__inner {
    color: #ffffffff;
  }

  .el-input__wrapper {
    background-color: #282828;
    box-shadow: none;
  }
}

.card:hover {
  background-color: #2d2d2d;
}
</style>
