<script setup>
  import { reactive, watch } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  const emits = defineEmits(['handleActive']);
  const props = defineProps({
    tabList: {
      default: () => {},
      type: Object,
    },
    activeValue: {
      type: [String, Array],
      default: () => [],
    },
    className: {
      type: [String, Array],
      default: () => [],
    },
    isEnabledSwiper: {
      type: Boolean,
      default: false,
    },
    isBorder: {
      type: Boolean,
      default: false,
    },
  });

  const state = reactive({
    activeTab: props.tabList[0]?.value,
    swiper: null,
  });
  const swiper = swiper => {
    state.swiper = swiper;
  };
  const handleActive = (tab, idx) => {
    state.activeTab = tab.value;
    if (state.swiper) {
      state.swiper.slideTo(idx);
    }
    emits('handleActive', tab);
  };

  watch(
    () => props.activeValue,
    newValue => {
      state.activeTab = newValue;
      if (state.swiper) {
        props.tabList.forEach((item, idx) => {
          if (item.value === newValue) {
            state.swiper.slideTo(idx);
          }
        });
      }
    },
  );
</script>

<template>
  <div v-if="props.isEnabledSwiper" class="tab_swiper">
    <Swiper :class="props.className" :slides-per-view="'auto'" @swiper="swiper">
      <SwiperSlide
        v-for="(tab, idx) in props.tabList"
        :key="tab.value"
        :class="['tab_item', { active: state.activeTab === tab.value }]"
        @click="handleActive(tab, idx)"
      >
        <button class="flex-center-4 flex-justify-center">
          {{ tab.name }}
          <!--        <span>1</span>-->
        </button>
      </SwiperSlide>
    </Swiper>
  </div>

  <div v-else :class="{ border_con: props.isBorder }">
    <ul :class="props.className">
      <li
        v-for="(tab, idx) in props.tabList"
        :key="tab.value"
        :class="['tab_item', { active: state.activeTab === tab.value }]"
        @click="handleActive(tab, idx)"
      >
        <button class="flex-center-4 flex-justify-center">
          {{ tab.name }}
          <!--        <span>1</span>-->
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
