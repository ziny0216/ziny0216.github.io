<script setup>
  import { usePopupStore } from '@/stores/usePopupStore.js';

  const usePopup = usePopupStore();
  const emits = defineEmits(['close', 'movePage']);
  const props = defineProps({
    isPopupOpen: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    className: {
      type: [String, Array],
      default: () => [],
    },
    title: {
      default: '',
      type: String,
    },
    padding: {
      default: '',
      type: String,
    },
    isShowButton: {
      type: Boolean,
      default: true,
    },
    isMoveButton: {
      type: Boolean,
      default: false,
    },
  });
  const close = () => {
    emits('close');
  };
  const movePage = () => {
    if (props.isMoveButton) {
      emits('movePage');
    }
  };
</script>

<template>
  <div v-if="props.isPopupOpen" class="dimmed" @click="close"></div>
  <transition :duration="500" name="fade">
    <div
      v-if="props.isPopupOpen"
      :class="['default_popup', props.size, className]"
    >
      <div class="modal_content">
        <div class="modal_wrap">
          <div class="modal_header">
            <button class="close_btn" type="button" @click="close">
              <font-awesome-icon :icon="['fas', 'xmark']" size="2x" />
            </button>
          </div>

          <!-- modal body-->
          <div :style="`padding-block:${props.padding}`" class="modal_body">
            <div class="modal_inner">
              <h6 v-if="props.title" class="modal_title" @click="movePage">
                {{ props.title }}
                <font-awesome-icon
                  v-if="props.isMoveButton"
                  :icon="['fas', 'arrow-up-right-from-square']"
                  style="font-size: 12px"
                />
              </h6>
              <slot name="body"></slot>
            </div>
          </div>

          <div v-if="props.isShowButton" class="modal_foot">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
