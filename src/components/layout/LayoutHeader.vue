<script setup>
  import { onBeforeUnmount, onMounted } from 'vue';

  const handleSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  onMounted(async () => {});

  onBeforeUnmount(() => {});
</script>

<template>
  <header class="layout_header">
    <nav class="header_inner inner">
      <h1 class="title">YOEJIN</h1>
      <ul class="header_navi">
        <li class="navi_item" @click="handleSection('about')">ABOUT ME</li>
        <li class="navi_item" @click="handleSection('career')">CAREER</li>
        <li class="navi_item" @click="handleSection('project')">PROJECT</li>
      </ul>
    </nav>
  </header>
  <!--  <LayoutSideMenu @close="handleSideMenu" />-->
</template>

<style lang="scss" scoped></style>
