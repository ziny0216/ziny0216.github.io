<script setup>
  import { reactive, watch } from 'vue';
  import { useCommonStore } from '@/store/common/useCommonStore.js';

  const useCommon = useCommonStore();
  const emits = defineEmits([
    'openSearchForm',
    'handleSearchKeyword',
    'deleteSearchKeyword',
  ]);
  const props = defineProps({
    placeholder: {
      default: '',
      type: String,
    },
    className: {
      type: [String, Array],
      default: () => [],
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  });
  const state = reactive({
    search_text: '',
  });

  const openSearchForm = event => {
    event.stopPropagation();
    emits('openSearchForm');
  };

  const handleSearchKeyword = () => {
    emits('handleSearchKeyword', state.search_text);
  };

  const deleteSearchKeyword = event => {
    event.stopPropagation();
    emits('deleteSearchKeyword');
  };

  watch(
    () => useCommon.searchWord,
    newValue => {
      console.log(newValue);
      console.log(useCommon.searchWord);
      state.search_text = newValue;
    },
  );
</script>

<template>
  <div
    :class="`header_search comb_input  ${props.className}`"
    @click="openSearchForm($event)"
  >
    <button
      class="search_btn sm comb_btn-left"
      type="button"
      @click="handleSearchKeyword"
    ></button>
    <input
      v-model="useCommon.searchWord"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      type="text"
      @keyup.enter="handleSearchKeyword"
    />
    <button
      v-if="useCommon.searchWord"
      class="close_btn sm comb_btn-right"
      type="button"
      @click="deleteSearchKeyword($event)"
    ></button>
  </div>
</template>

<style lang="scss" scoped></style>
