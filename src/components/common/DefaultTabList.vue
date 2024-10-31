<script setup>
  import { reactive, watch } from 'vue';

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
  });

  const handleActive = (tab, idx) => {
    state.activeTab = tab.value;

    emits('handleActive', tab);
  };

  watch(
    () => props.activeValue,
    newValue => {
      state.activeTab = newValue;
    },
  );
</script>

<template>
  <div :class="{ border_con: props.isBorder }">
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
