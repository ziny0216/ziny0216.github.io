<script setup>
  import { onBeforeUnmount, onMounted } from 'vue';

  onMounted(async () => {});

  onBeforeUnmount(() => {});
</script>

<template>
  <header class="layout_header">
    <nav class="header_inner inner">
      <ul class="header_navi">
        <li class="navi_item">ABOUT ME</li>
        <li class="navi_item">CAREER</li>
        <li class="navi_item">PROJECT</li>
        <li class="navi_item">CONTACT ME</li>
      </ul>
    </nav>
  </header>
  <!--  <LayoutSideMenu @close="handleSideMenu" />-->
</template>

<style lang="scss" scoped></style>
