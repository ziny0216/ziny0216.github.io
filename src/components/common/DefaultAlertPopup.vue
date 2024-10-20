<script setup>
  import { usePopupStore } from '@/store/common/usePopupStore.js';

  const props = defineProps({
    alertData: {
      default: () => {},
      type: Object,
    },
    size: {
      type: String,
      default: 'small',
    },
    className: {
      type: String,
      default: '',
    },
    close: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      default: () => {},
      type: Object,
    },
  });
  const emits = defineEmits(['close', 'confirm']);
  const handleClose = () => {
    emits('close');
  };
  const handleCloseButton = () => {
    emits('closeButton');
  };

  const handleConfirm = () => {
    emits('confirm');
  };
</script>

<template>
  <div
    :class="['alert_popup', { large: props.size === 'large' }, props.className]"
  >
    <div class="alert_container">
      <div class="alert_body">
        <button
          v-if="props.alertData.visibleButton"
          class="close_box"
          type="button"
          @click="handleCloseButton"
        >
          <i class="close_btn"></i>
        </button>
        <div class="alert_text">
          <div :class="['alert_phrases', { icon_alert: props.alertData.icon }]">
            <i
              v-if="props.alertData.icon"
              :class="`${props.alertData.icon}`"
            ></i>
            <span v-if="props.alertData.text" v-html="props.alertData.text">
            </span>
          </div>
        </div>
        <div class="alert_footer w-100">
          <button
            v-if="props.alertData?.closeButton"
            class="default_btn white"
            type="button"
            @click="handleClose"
          >
            {{ props.alertData?.closeButton }}
          </button>
          <button
            v-if="props.alertData?.confirmButton"
            class="default_btn black"
            type="button"
            @click="handleConfirm"
          >
            {{ props.alertData?.confirmButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .default_btn {
    &:first-child:last-child {
      max-width: 112px;
    }
  }
</style>
