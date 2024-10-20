<script setup>
  import { reactive, watch } from 'vue';
  import { useCommonStore } from '@/store/common/useCommonStore.js';

  const useCommon = useCommonStore();
  const emits = defineEmits(['handleFileData']);
  const props = defineProps({
    placeholder: {
      default: '첨부 파일',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    className: {
      default: 'lg',
      type: String,
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
  });
  const state = reactive({
    file: null,
  });
  const getFiles = event => {
    const files = event.target.files;
    state.file = files[0];

    emits('handleFileData', state.file, props.id);
  };
</script>

<template>
  <div :class="`default_input  btn_group ${props.className}`">
    <input
      :id="props.id"
      :disabled="isDisabled"
      accept="image/*, .pdf"
      type="file"
      @change="getFiles($event)"
    />
    <span
      :class="[
        { placeholder: !state.file },
        { disabled: props.isDisabled },
        'form_input ',
      ]"
    >
      <span class="ellipsis_clamp">{{
        state.file?.name ? state.file.name : props.placeholder
      }}</span>
    </span>
    <label
      :class="['default_btn light_gray', { disabled: props.isDisabled }]"
      :for="props.id"
      >첨부파일</label
    >
  </div>
</template>

<style lang="scss" scoped>
  .btn_group {
    &.sm {
      .default_btn {
        font: $text-body13-400;
        border-radius: 2px;
        line-height: 38px;
        min-width: 89px;
      }
    }
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
</style>
