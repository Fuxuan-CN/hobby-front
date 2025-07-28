<template>
  <ElContainer>
    <ElAside width="64px">
      <Sidebar />
    </ElAside>
    <ElMain class="!p-0">
      <RouterView />
    </ElMain>
  </ElContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
