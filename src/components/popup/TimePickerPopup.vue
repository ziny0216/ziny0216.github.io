<script setup>
  import {
    computed,
    nextTick,
    onMounted,
    reactive,
    watch,
    watchEffect,
  } from 'vue';
  import 'vue-scroll-picker/lib/style.css';
  import { usePopupStore } from '@/store/common/usePopupStore.js';
  import dayjs from 'dayjs';
  import customParseFormat from 'dayjs/plugin/customParseFormat';
  import { Sheet } from 'bottom-sheet-vue3';
  import { useOrderStore } from '@/store/product/useOrderStore.js';
  import { useRoute } from 'vue-router';

  dayjs.extend(customParseFormat);
  const emits = defineEmits(['settingTime', 'openTimePicker']);
  const usePopup = usePopupStore();
  const useOrder = useOrderStore();
  const route = useRoute();
  const props = defineProps({
    isValid: {
      default: true,
      type: Boolean,
    },
    operateTime: {
      default: null,
      type: Object,
    },
    isOpen: {
      default: false,
      type: Boolean,
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
    isReset: {
      default: false,
      type: Boolean,
    },
    isTablet: {
      default: false,
      type: Boolean,
    },
    selectDate: {
      default: null,
    },
  });

  const state = reactive({
    isValid: true,
    isOpen: false,
    selectTime: {},
    time: {},

    hoursData: [],
    minutesData: [],
  });
  const openTimePicker = () => {
    emits('openTimePicker');
  };
  const transitionName = computed(() =>
    state.isOpen ? 'dp-slide-down' : 'dp-slide-up',
  );

  const handleTimePicker = async (type, value) => {
    state.selectTime[type] = value;

    console.log(state.selectTime, 'state.selectTime');
    if (state.selectTime.hour && state.selectTime.min) {
      state.isOpen = false;
      await nextTick();
      const timeFormat = dayjs(
        `${state.selectTime.hour}:${state.selectTime.min}`,
        'HH:mm',
      );
      emits('settingTime', timeFormat.format('HH:mm'));
    }
  };

  watch(
    () => props.isOpen,
    newValue => {
      if (!state.isOpen && !state.selectTime.hour && state.selectTime.min) {
        state.selectTime = {};
      }
      state.isOpen = newValue;
    },
  );

  watch(
    () => props.operateTime,
    () => {
      if (props.operateTime?.opening_hour_set === 'N') {
        // 24시간 영업
        state.hoursData = state.hoursData.map(item => ({
          ...item,
          disabled: false,
        }));
      } else {
        const startTime = dayjs(props.operateTime?.start_time, 'HH:mm');
        const startTimeHour = startTime.format('HH');
        const endTime = dayjs(props.operateTime?.end_time, 'HH:mm');
        const endTimeHour = endTime.format('HH');

        const updateData = (data, limitStart, limitEnd) => {
          return data.map(item => {
            const isDisabled = item.value < limitStart || item.value > limitEnd;

            return {
              ...item,
              disabled: isDisabled,
            };
          });
        };

        // 상태 업데이트
        const updatedHoursData = updateData(
          state.hoursData,
          startTimeHour,
          endTimeHour,
        );
        state.hoursData = [...updatedHoursData];
      }
    },
    { immediate: true },
  );
  watch(
    () => props.isReset,
    () => {
      console.log(props.isReset, 'props.isReset');
      if (props.isReset) {
        state.selectTime = {};
      }
    },
  );

  watch(
    () => props.selectDate,
    () => {
      state.selectTime.hour =
        props.selectDate && dayjs(props.selectDate, 'HH:mm').format('HH');
      state.selectTime.min =
        props.selectDate && dayjs(props.selectDate, 'HH:mm').format('mm');
    },
    { immediate: true },
  );

  onMounted(() => {
    for (let i = 1; i <= 24; i++) {
      state.hoursData.push({
        value: i < 10 ? `0${i}` : String(i),
        disabled: false,
      });
    }

    state.minutesData = [
      { value: '00', disabled: false },
      { value: '30', disabled: false },
    ];
  });
  watchEffect(async () => {
    if (!props.isValid) {
      await nextTick(); // 상태 업데이트가 DOM에 반영될 때까지 기다립니다.

      state.selectTime = {}; // 객체 전체를 새로 갱신
      emits('settingTime', '');
    }
  });
</script>

<template>
  <div v-if="!props.isTablet" class="time_picker">
    <div class="default_select border">
      <button
        :class="[
          { active: state.selectTime.hour && state.selectTime.min },
          'select_btn',
        ]"
        :disabled="props.isDisabled"
        type="button"
        @click.stop="openTimePicker"
      >
        {{
          state.selectTime.hour && state.selectTime.min
            ? `${state.selectTime.hour} : ${state.selectTime.min}`
            : '00:00'
        }}
      </button>
    </div>
    <transition :name="transitionName">
      <div v-if="state.isOpen" class="time_inner" @click.stop>
        <span class="title">시간선택 </span>

        <ul class="hour time_list">
          <li v-for="(hour, idx) in state.hoursData" :key="idx">
            <button
              :class="{ active: state.selectTime.hour === hour.value }"
              :disabled="hour.disabled"
              type="button"
              @click="handleTimePicker('hour', hour.value)"
            >
              {{ hour.value }}<i>시</i>
            </button>
          </li>
        </ul>
        <span class="separator"></span>
        <ul class="min time_list">
          <li
            v-for="(min, idx) in state.minutesData"
            :key="idx"
            @click="handleTimePicker('min', min.value)"
          >
            <button
              :class="{ active: state.selectTime.min === min.value }"
              :disabled="min.disabled"
              type="button"
              @click="handleTimePicker('min', min.value)"
            >
              {{ min.value }}<i>분</i>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div v-if="props.isTablet" class="time_picker mobile">
    <div class="default_select border">
      <button
        :class="[
          { active: state.selectTime.hour && state.selectTime.min },
          'select_btn',
        ]"
        :disabled="props.isDisabled"
        type="button"
        @click.stop="openTimePicker"
      >
        {{
          state.selectTime.hour && state.selectTime.min
            ? `${state.selectTime.hour} : ${state.selectTime.min}`
            : '00:00'
        }}
      </button>
    </div>
    <Sheet v-model:visible="state.isOpen" :threshold="10">
      <div class="time_inner mobile" @click.stop>
        <span class="title">시간선택 </span>

        <ul class="hour time_list">
          <li v-for="(hour, idx) in state.hoursData" :key="idx">
            <button
              :class="{ active: state.selectTime.hour === hour.value }"
              :disabled="hour.disabled"
              type="button"
              @click="handleTimePicker('hour', hour.value)"
            >
              {{ hour.value }}<i>시</i>
            </button>
          </li>
        </ul>
        <span class="separator"></span>
        <ul class="min time_list">
          <li
            v-for="(min, idx) in state.minutesData"
            :key="idx"
            @click="handleTimePicker('min', min.value)"
          >
            <button
              :class="{ active: state.selectTime.min === min.value }"
              :disabled="min.disabled"
              type="button"
              @click="handleTimePicker('min', min.value)"
            >
              {{ min.value }}<i>분</i>
            </button>
          </li>
        </ul>
      </div>
    </Sheet>
  </div>
</template>

<style lang="scss" scoped>
  .time {
    &_picker {
      position: relative;
    }

    &_inner {
      z-index: 10;
      position: absolute;
      top: 47px;
      border: 1px solid $gray-30;
      padding: 15px;
      border-radius: 2px;
      background-color: $white;
      min-width: 360px;
      max-width: 360px;
      width: 100%;
      text-align: center;

      .title {
        padding: 11px 0;
        font: $text-p16-500;
        display: block;
      }

      .separator {
        margin: 16px 0;
        display: block;
        width: 100%;
        background-color: $gray-30;
        height: 1px;
      }

      .time_list {
        display: flex;
        align-items: center;

        flex-wrap: wrap;
        padding: 0 8px;
        gap: 18px;

        button {
          position: relative;
          width: 48px;
          height: 48px;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font: $text-body14-400;

          &[disabled] {
            color: $gray-50 !important;
          }

          &.active {
            color: $white;
            font-weight: 500;

            i {
              font-weight: 500;
            }

            &:after {
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              z-index: -1;
              background-color: $blue-50;
              border-radius: 50em;
            }
          }

          i {
            font: $text-body12-400;
          }
        }
      }
    }
  }

  .mobile {
    &.time_inner {
      padding: 0 16px 24px;
      border-radius: 2px;
      background-color: $white;
      border: none;
      top: 0;
      width: 100%;
      text-align: center;
      position: relative;

      .title {
        padding: 11px 4px;
        font: $text-p16-500;
        display: block;
      }

      .separator {
        margin: 16px 0;
        display: block;
        width: 100%;
        background-color: $gray-30;
        height: 1px;
      }

      .time_list {
        display: flex;
        align-items: center;

        flex-wrap: wrap;
        padding: 0 8px;
        column-gap: 18px;

        button {
          position: relative;
          width: 48px;
          height: 48px;
          z-index: 1;
          color: $black;
          display: flex;
          justify-content: center;
          align-items: center;
          font: $text-body14-400;

          &.active {
            color: $white;
            font-weight: 500;

            i {
              font-weight: 500;
            }

            &:after {
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              z-index: -1;
              background-color: $blue-50;
              border-radius: 50em;
            }
          }

          i {
            font: $text-body12-400;
          }
        }
      }
    }
  }
</style>
