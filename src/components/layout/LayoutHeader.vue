<script setup>
  import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const layoutHeaderRef = ref(null);
  const state = reactive({
    activeTab: 'about',
    initialOffsetTop: null,
  });

  // 네비 클릭시 active
  const handleSection = sectionId => {
    const element = document.getElementById(sectionId);
    state.activeTab = sectionId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 모바일 네비 transform
  const stickyNavi = () => {
    if (window.innerWidth < 550) {
      if (!state.initialOffsetTop) {
        state.initialOffsetTop = layoutHeaderRef.value.offsetHeight;
      }

      if (layoutHeaderRef.value) {
        layoutHeaderRef.value.style.transform =
          window.scrollY >= state.initialOffsetTop
            ? `translateY(-52px) translateX(-50%)`
            : `translateX(-50%)`;
      }
    } else {
      if (layoutHeaderRef.value) {
        layoutHeaderRef.value.style.transform = `translateX(-50%)`;
      }
    }
  };

  onMounted(async () => {
    //observer 섹션 감지 및 activeTab 값 저장
    await router.isReady();
    const options = {
      root: null,
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

    window.addEventListener('scroll', stickyNavi);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', stickyNavi);
  });
</script>

<template>
  <header ref="layoutHeaderRef" class="layout_header">
    <nav class="header_inner inner">
      <h1 class="title">YOEJIN</h1>
      <ul class="header_navi sticky">
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
