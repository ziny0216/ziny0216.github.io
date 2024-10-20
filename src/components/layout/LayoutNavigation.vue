<script setup>
  import { nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  import { useCommonStore } from '@/store/common/useCommonStore.js';

  const router = useRouter();
  const route = useRoute();

  const useCommon = useCommonStore();
  const toolbar = ref(null);
  const state = reactive({
    naviList: [
      { name: '이용안내', value: 'info', url: '/about/information' },
      { name: '이벤트', value: 'event', url: '/community/event' },
      { name: '공지사항', value: 'notice', url: '/community/notice' },
      { name: '제작지원', value: 'supporter', url: '/community/support' },
      { name: '1:1문의', value: 'inquiry', url: '/community/inquiry' },
    ],
    currentUrl: '',
    isUnreadMessage: false,
    messageCount: 0,
    initialOffsetTop: null,
  });
  onMounted(() => {
    const naviTop = document.querySelector('.layout_header');
    toolbar.value.style.top = naviTop.offsetHeight + 16 + 'px'; // 'px' 추가
    window.addEventListener('scroll', stickyNavi);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', stickyNavi);
  });

  const stickyNavi = () => {
    const naviTop = document.querySelector('.layout_header');

    if (!state.initialOffsetTop) {
      state.initialOffsetTop = naviTop.offsetHeight;
    }

    if (toolbar.value) {
      if (window.scrollY >= state.initialOffsetTop) {
        toolbar.value.style.top = `50%`;
        toolbar.value.style.transform = `translateY(-50%)`;
      } else {
        toolbar.value.style.transform = '';
        toolbar.value.style.top = state.initialOffsetTop + 16 + 'px'; // 'px' 추가
      }
    }
  };

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
</script>

<template>
  <aside ref="toolbar" class="layout_navi">
    <nav class="navi_inner tablet_hide">
      <router-link
        v-for="(navi, idx) in state.naviList"
        :key="idx"
        :to="navi.url"
        class="navi_item flex-center-8 column"
      >
        <i :class="`${navi.value}_icon`"></i>
        <span>{{ navi.name }}</span>
      </router-link>
    </nav>

    <div class="toolbar">
      <a
        class="insta_icon"
        href="https://www.instagram.com/daypayrent/"
        target="_blank"
      ></a>
      <a
        class="kakao_icon"
        href="https://pf.kakao.com/_iqyas"
        target="_blank"
      ></a>
      <a
        class="youtube_icon"
        href="https://www.youtube.com/@daypaykr"
        target="_blank"
      ></a>
      <router-link class="cart_icon" to="/order/visit"></router-link>
      <button class="top_icon" type="button" @click="moveTop"></button>
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
