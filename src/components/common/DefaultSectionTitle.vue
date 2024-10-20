<script setup>
  const emits = defineEmits(['handleMore']);
  const props = defineProps({
    title: {
      type: [String, Array],
      default: () => [],
    },
    isMore: {
      default: false,
      type: Boolean,
    },
    className: {
      type: [String, Array],
      default: () => [],
    },
  });

  const handleMore = () => {
    emits('handleMore');
  };
</script>

<template>
  <div v-if="props.title" :class="`${props.className} section_title`">
    <h4>
      <span v-if="Array.isArray(props.title)">
        {{ props.title[0] }}
      </span>
      {{ Array.isArray(props.title) ? props.title[1] : props.title }}
    </h4>
    <button
      v-if="isMore"
      class="more_text_btn flex-center-2"
      type="button"
      @click="handleMore"
    >
      더보기
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
