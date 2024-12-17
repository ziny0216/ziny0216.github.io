<script setup>
  import { RouterView } from 'vue-router';
  import LayoutHeader from '@/components/layout/LayoutHeader.vue';
  import { watch } from 'vue';
  import { usePopupStore } from '@/stores/usePopupStore.js';
  import { lockBodyScroll, unlockBodyScroll } from '@/utiles/common.js';

  const usePopup = usePopupStore();
  watch(
    () => usePopup.isAnyPopupOpen,
    newValue => {
      if (newValue) {
        lockBodyScroll();
      } else {
        unlockBodyScroll();
      }
    },
    { immediate: true }, // 컴
  );
</script>

<template>
  <layout-header></layout-header>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style scoped></style>
