<script setup>
  import {
    nextTick,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch,
  } from 'vue';

  const emits = defineEmits(['handleSelectedItem', 'handleSelectOpen']);
  const selectRef = ref();
  const props = defineProps({
    type: {
      default: '',
      type: String,
    },
    selectList: {
      default: () => [],
      type: Array,
    },
    placeholder: {
      default: '',
      type: String,
    },
    isOpen: {
      default: false,
      type: Boolean,
    },
    activeValue: {
      type: [String, Array, Object],
      default: () => [],
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
  });
  // watch(
  //   () => props.isOpen,
  //   newValue => {
  //     state.isOpen = newValue;
  //   },
  // );
  const state = reactive({
    isOpen: false,
    selectItem: '',
    selectValue: '',
  });
  const handleSelectOpen = () => {
    state.isOpen = !state.isOpen;
  };

  const handleSelectItem = select => {
    state.selectItem = select.name;
    state.selectValue = select.value;
    state.isOpen = false;
    emits('handleSelectedItem', select);
  };
  watch(
    () => props.activeValue,
    async newValue => {
      console.log(state.selectItem, state.selectValue);
      await nextTick();
      state.selectItem = newValue.name;
      state.selectValue = newValue.value;
    },
    { deep: true },
  );
  const handleClickOutside = event => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
      state.isOpen = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<template>
  <div
    ref="selectRef"
    :class="[{ open: state.isOpen }, 'default_select', props.type]"
  >
    <button
      v-if="props.type !== 'menu'"
      :class="[{ active: state.selectValue }, 'select_btn']"
      :disabled="props.isDisabled"
      type="button"
      @click="handleSelectOpen"
    >
      <span class="ellipsis_clamp">
        {{ state.selectItem ? state.selectItem : props.placeholder }}
      </span>
    </button>
    <ul class="select_list">
      <li
        v-for="select in props.selectList"
        :key="select.value"
        :class="[
          { active: state.selectValue === select.value },
          'ellipsis1',
          'select_item',
        ]"
        @click="handleSelectItem(select)"
      >
        {{ select.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
