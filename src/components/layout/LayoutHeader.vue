<script setup>
  import { onBeforeUnmount, onMounted, reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const state = reactive({
    activeTab: 'about',
  });
  const handleSection = sectionId => {
    const element = document.getElementById(sectionId);
    state.activeTab = sectionId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(async () => {
    await router.isReady();
    const options = {
      root: null, // 기본적으로 뷰포트를 기준으로
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          state.activeTab = item.target.id;
        }
      });
    }, options);

    const sections = document.querySelectorAll('[class*="_section"]');

    sections.forEach(section => observer.observe(section));
  });

  onBeforeUnmount(() => {});
</script>

<template>
  <header class="layout_header">
    <nav class="header_inner inner">
      <h1 class="title">YOEJIN</h1>
      <ul class="header_navi">
        <li
          :class="[{ active: state.activeTab === 'about' }, 'navi_item']"
          @click="handleSection('about')"
        >
          ABOUT ME
        </li>
        <li
          :class="[{ active: state.activeTab === 'career' }, 'navi_item']"
          @click="handleSection('career')"
        >
          CAREER
        </li>
        <li
          :class="[{ active: state.activeTab === 'project' }, 'navi_item']"
          @click="handleSection('project')"
        >
          PROJECT
        </li>
      </ul>
    </nav>
  </header>
  <!--  <LayoutSideMenu @close="handleSideMenu" />-->
</template>

<style lang="scss" scoped></style>
