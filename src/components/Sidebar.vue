<template>
  <!-- 侧边栏 -->
  <div
    class="sidebar w-full h-full flex-shrink-0 bg-[#303030] flex flex-col items-center py-18px px-10px"
  >
    <!-- logo区域 -->
    <div class="logo">
      <span>Hobby</span>
    </div>
    <!-- 头像区域 -->
    <div class="avatar">
      <ElAvatar
        class="mt-20px"
        :size="36"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></ElAvatar>
    </div>
    <!-- 消息和好友  -->
    <div class="menu-top mt-18px w-48px">
      <ElMenu
        default-active="1"
        class="!border-none"
        :collapse="false"
        background-color="transparent"
        text-color="#ffffffff"
      >
        <!-- 消息 -->
        <ElMenuItem index="1" class="!px-0 !w-48px !h-48px rounded-10px" @click="handleClick">
          <ElIcon class="!w-full" v-if="activeIndex === '1'"><Comment /></ElIcon>
          <ElIcon class="!w-full" v-else><ChatSquare /></ElIcon>
        </ElMenuItem>
        <!-- 用户 -->
        <ElMenuItem index="2" class="!px-0 !w-48px !h-48px rounded-10px" @click="handleClick">
          <ElIcon class="!w-full" v-if="activeIndex === '2'"><UserFilled /></ElIcon>
          <ElIcon class="!w-full" v-else><User /></ElIcon>
        </ElMenuItem>
      </ElMenu>
    </div>
    <div class="flex-1"></div>
    <!-- 菜单区域 -->
    <div class="menu-bottom">
      <ElPopover
        class="box-item"
        placement="right-end"
        :hide-after="500"
        popper-style="border: none;background-color: #303030;"
        width="200px"
      >
        <ElMenu
          default-active="1"
          background-color="#303030"
          text-color="#ffffffff"
          class="box-menu !border-none w-full"
        >
          <ElMenuItem index="1" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><PieChart /></ElIcon>
            <span class="ml-4px fw-500">超级调色盘</span>
          </ElMenuItem>
          <ElMenuItem index="2" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><Bottom /></ElIcon>
            <span class="ml-4px fw-500">导入历史消息</span>
          </ElMenuItem>
          <ElMenuItem index="3" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><UploadFilled /></ElIcon>
            <span class="ml-4px fw-500">聊天记录迁移与备份</span>
          </ElMenuItem>
          <ElMenuItem index="4" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><Setting /></ElIcon>
            <span class="ml-4px fw-500">设置</span>
          </ElMenuItem>
          <ElMenuItem index="5" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><Warning /></ElIcon>
            <span class="ml-4px fw-500">关于</span>
          </ElMenuItem>
          <ElMenuItem index="6" class="!h-28px rounded-10px !px-0">
            <ElIcon :size="14"><SwitchButton /></ElIcon>
            <span class="ml-4px fw-500">退出账号</span>
          </ElMenuItem>
        </ElMenu>
        <template #reference>
          <el-icon color="#ffffffff"><More /></el-icon>
        </template>
      </ElPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItemRegistered } from 'element-plus';

const activeIndex = ref<string>('1');

const handleClick = (item: MenuItemRegistered) => {
  activeIndex.value = item.index;
};
</script>

<style scoped>
.logo {
  /* 基础容器样式 */
  display: inline-block;
  position: relative;
}

.logo span {
  /* 文字基础样式 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;

  /* 文字渐变效果 */
  background: linear-gradient(135deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  /* 文字阴影 - 创造立体感 */
  text-shadow:
    1px 1px 3px rgba(0, 0, 0, 0.2),
    3px 3px 6px rgba(0, 0, 0, 0.1);

  /* 过渡动画 */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 字母特殊处理 */
.logo span:nth-child(1) {
  /* H */
  display: inline-block;
}

.logo span:nth-child(3) {
  /* b */
  display: inline-block;
}

.el-popper__arrow {
  background-color: red;
}
</style>
