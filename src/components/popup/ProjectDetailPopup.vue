<script setup>
  import DefaultPopup from '@/components/common/DefaultPopup.vue';
  import { usePopupStore } from '@/stores/usePopupStore.js';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules';
  import SkillBadge from '@/components/page/SkillBadge.vue';

  const props = defineProps({
    project: {
      type: Object,
      default: () => {},
    },
  });
  const usePopup = usePopupStore();

  const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(userAgent) && /Safari/.test(userAgent)) {
      return 'ios';
    } else if (/Macintosh/.test(userAgent)) {
      return 'ios';
    } else if (/Android/.test(userAgent) && /Chrome/.test(userAgent)) {
      return 'android';
    } else {
      return 'android';
    }
  };
  const movePage = () => {
    window.open(props.project.url[getDeviceType()]);
  };
</script>

<template>
  <DefaultPopup
    :is-move-button="!!props.project.url?.android || !!props.project.url?.ios"
    :is-popup-open="usePopup.popups.isProjectPopup"
    :title="props.project.name"
    @close="usePopup.setPopupState('isProjectPopup')"
    @move-page="movePage"
  >
    <template #body>
      <div>
        <p class="pj_summary">{{ props.project.summary }}</p>
        <SkillBadge :skills="props.project.stack" />
      </div>

      <div v-if="props.project.description?.length > 0" class="pj_desc">
        <h5 class="title">주요내용</h5>
        <ul class="desc_list">
          <li
            v-for="(desc, idx) in props.project.description"
            :key="`desc-${idx}`"
          >
            {{ desc }}
          </li>
        </ul>
      </div>
      <div v-if="props.project.additional?.length > 0" class="pj_desc">
        <h5 class="title">추가개발</h5>
        <ul class="desc_list">
          <li
            v-for="(add, idx) in props.project.additional"
            :key="`add-${idx}`"
          >
            {{ add }}
          </li>
        </ul>
      </div>
      <div v-if="props.project.medias?.length > 0" class="pj_desc">
        <h5 class="title">구현 화면</h5>
        <div class="pj_swiper">
          <swiper
            :modules="[Navigation]"
            :navigation="{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }"
            :slides-per-view="'auto'"
          >
            <swiper-slide
              v-for="media in props.project.medias"
              :key="media.name"
            >
              <video
                v-if="media.type === 'video'"
                :src="media.src"
                autoplay
                loop
                muted
                playsinline
              ></video>
              <img v-else :src="media.src" alt="" />
            </swiper-slide>
          </swiper>
          <!-- 커스텀 네비게이션 버튼 -->
          <button class="custom-prev">
            <font-awesome-icon
              :icon="['fas', 'angle-left']"
              size="2x"
              style="color: #6b7e9e"
            />
          </button>
          <button class="custom-next">
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              size="2x"
              style="color: #6b7e9e"
            />
          </button>
        </div>
      </div>

      <div v-if="props.project.troubleShooting" class="pj_desc">
        <h5 class="title">트러블 슈팅 및 회고</h5>
        <div class="desc_list" v-html="props.project.troubleShooting"></div>
      </div>
    </template>
  </DefaultPopup>
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/pages/project';
</style>
