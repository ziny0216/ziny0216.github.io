<script setup>
  import DefaultPopup from '@/components/common/DefaultPopup.vue';
  import { usePopupStore } from '@/stores/usePopupStore.js';

  const props = defineProps({
    project: {
      type: Object,
      default: () => {},
    },
  });
  const usePopup = usePopupStore();
</script>

<template>
  <DefaultPopup
    :is-popup-open="usePopup.popups.isProjectPopup"
    :title="props.project.name"
    @close="usePopup.setPopupState('isProjectPopup')"
  >
    <template #body>
      <div>
        <p class="">{{ props.project.summary }}</p>
        <div>
          <span
            :key="`stack-${idx}`"
            v-for="(item, idx) in props.project.stack"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div>
        <h5>주요내용</h5>
        <ul>
          <li
            v-for="(desc, idx) in props.project.description"
            :key="`desc-${idx}`"
          >
            {{ desc }}
          </li>
        </ul>
      </div>
      <div v-if="props.project.additional?.length > 0">
        <h5>추가개발</h5>
        <ul>
          <li
            v-for="(add, idx) in props.project.additional"
            :key="`add-${idx}`"
          >
            {{ add }}
          </li>
        </ul>
      </div>
      <div>
        <h5>구현 화면</h5>
        <ul>
          <li></li>
        </ul>
      </div>
    </template>
  </DefaultPopup>
</template>

<style scoped lang="scss"></style>
