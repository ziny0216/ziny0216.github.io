<script setup>
  import { computed, reactive, watch } from 'vue';
  import { useBoardStore } from '@/store/board/useBoardStore.js';

  const useBoard = useBoardStore();
  const emits = defineEmits(['change', 'arrow']);
  const props = defineProps({
    countOfTotal: {
      // 전체 목록의 갯수
      type: Number,
      default: 1,
    },
    listSize: {
      // 한 페이지의 목록 최대 갯수
      type: Number,
      default: 10,
    },
  });

  const state = reactive({
    currentPage: 1, // 임시 현재 페이지
    pageCount: 5, // 페이지 버튼 최대 갯수
    pageNum: 1,
  });

  // 최대 페이지 번호
  const maxPage = computed(() => {
    const page = Math.ceil(props.countOfTotal / props.listSize);
    return page === 0 ? 1 : page;
  });

  // 보여질 시작 페이지 번호
  const startPage = computed(() => {
    return (
      Math.trunc((state.currentPage - 1) / state.pageCount) * state.pageCount +
      1
    );
  });

  // 보여질 마지막 페이지 번호
  const endPage = computed(() => {
    let end = startPage.value + state.pageCount - 1;
    return end < maxPage.value ? end : maxPage.value;
  });

  // 화면에 표시할 페이지 배열..
  const paginationUnits = computed(() => {
    let units = [];
    let num = startPage.value;
    while (num <= endPage.value) {
      units.push(num++);
    }
    return units.length ? units : [1];
  });

  // 페이지 이동
  const setCurrentPage = page => {
    if (state.currentPage !== page) {
      state.currentPage = page;
    }
    emits('change', state.currentPage);
  };
  // 좌우의 화살표 버튼 이벤트
  const arrowEvent = (op, isDouble) => {
    let num = isDouble ? props.countOfTotal : 1;

    if (op === -1) {
      state.currentPage =
        state.currentPage - num > 1 ? state.currentPage - num : 1;
    }

    if (op === 1) {
      state.currentPage =
        state.currentPage + num < maxPage.value
          ? state.currentPage + num
          : maxPage.value;
    }

    emits('arrow', state.currentPage);
  };
</script>

<template>
  <div class="pagination">
    <button
      class="arrow_double_btn first"
      type="button"
      @click="arrowEvent(-1, true)"
    ></button>
    <button
      class="arrow_btn prev"
      type="button"
      @click="arrowEvent(-1, false)"
    ></button>
    <ul class="page_list">
      <li
        v-for="unit in paginationUnits"
        :key="`page-${unit}`"
        :class="[useBoard.offset === unit ? 'active' : '']"
        @click="setCurrentPage(unit)"
      >
        {{ unit }}
      </li>
    </ul>
    <button
      class="arrow_btn next"
      type="button"
      @click="arrowEvent(1, false)"
    ></button>
    <button
      class="arrow_double_btn last"
      type="button"
      @click="arrowEvent(1, true)"
    ></button>
  </div>
</template>

<style lang="scss" scoped></style>
