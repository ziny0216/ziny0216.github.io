<script setup>
  import { nextTick, reactive, watch } from 'vue';
  import { usePopupStore } from '@/store/common/usePopupStore.js';
  import dayjs from 'dayjs';
  import { Sheet } from 'bottom-sheet-vue3';

  const emits = defineEmits(['handleDate']);
  const usePopup = usePopupStore();
  const props = defineProps({
    isDisabled: {
      default: false,
      type: Boolean,
    },
    isValid: {
      default: true,
      type: Boolean,
    },
    isNow: {
      default: true,
      type: Boolean,
    },
    selectedDate: {
      default: null,
    },
    minDate: {
      default: null,
    },
    maxDate: {
      default: null,
    },
    placeholder: {
      default: '일자 선택',
      type: String,
    },
    isTablet: {
      default: false,
      type: Boolean,
    },
  });
  const state = reactive({
    isValid: true,
    date: props.isNow ? new Date() : null,
    mHeight: 0,
    isOpen: false,
  });

  const format = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}.${month}.${day}`;
  };
  const customPosition = () => ({ top: 47, left: 0 });
  const onDateSelected = date => {
    const selectDate = date;
    console.log(selectDate);
    emits('handleDate', selectDate);
  };
  watch(
    () => props.selectedDate,
    () => {
      state.date = props.selectedDate;
      state.isOpen = false;
    },
  );
  watch(
    () => props.isValid,
    () => {
      if (!props.isValid) {
        state.date = null;
        emits('handleDate', '');
      }
    },
  );
</script>

<template>
  <div v-if="!props.isTablet" class="date_picker">
    <VueDatePicker
      v-model="state.date"
      :alt-position="customPosition"
      :disabled="props.isDisabled"
      :enable-time-picker="false"
      :format="format"
      :max-date="props.maxDate"
      :min-date="props.minDate || props.maxDate ? props.minDate : new Date()"
      :placeholder="props.placeholder"
      auto-apply
      locale="ko"
      prevent-min-max-navigation
      @update:model-value="onDateSelected"
    >
      <template #input-icon>
        <img
          v-if="props.isDisabled"
          class="input-slot-image"
          src="@/assets/images/icon/icon-gray-calendar.png"
        />
        <img
          v-else
          class="input-slot-image"
          src="@/assets/images/icon/icon-black-calendar.png"
        />
        <img
          class="input_arrow"
          src="@/assets/images/icon/icon-Dg40-arrow.png"
        />
      </template>
      <template #arrow-left>
        <img class="slot-icon" src="@/assets/images/icon/icon-Lg40-arrow.png" />
      </template>
      <template #arrow-right>
        <img
          class="slot-icon right"
          src="@/assets/images/icon/icon-Lg40-arrow.png"
        />
      </template>
      <template #year="{ value }">
        {{ value }}
      </template>
      <template #month="{ value }">
        .{{
          value + 1 < 10
            ? String(value + 1).padStart(2, '0')
            : String(value + 1)
        }}
      </template>
    </VueDatePicker>
  </div>

  <div v-if="props.isTablet" class="time_picker date">
    <div class="default_select border">
      <button
        :class="[{ active: state.date }, 'select_btn']"
        type="button"
        @click.stop="state.isOpen = true"
      >
        <i class="calendar_icon"></i>

        {{ state.date ? dayjs(state.date).format('YYYY.M.DD') : '일자 선택' }}
      </button>
    </div>

    <Sheet v-model:visible="state.isOpen" :threshold="10">
      <div class="date_picker mobile">
        <VueDatePicker
          v-model="state.date"
          :disabled="props.isDisabled"
          :enable-time-picker="false"
          :format="format"
          :min-date="props.minDate ? props.minDate : new Date()"
          :placeholder="props.placeholder"
          auto-apply
          inline
          locale="ko"
          prevent-min-max-navigation
          @update:model-value="onDateSelected"
        >
          <template #input-icon>
            <img
              v-if="props.isDisabled"
              class="input-slot-image"
              src="@/assets/images/icon/icon-gray-calendar.png"
            />
            <img
              v-else
              class="input-slot-image"
              src="@/assets/images/icon/icon-black-calendar.png"
            />
            <img
              class="input_arrow"
              src="@/assets/images/icon/icon-Dg40-arrow.png"
            />
          </template>
          <template #arrow-left>
            <img
              class="slot-icon"
              src="@/assets/images/icon/icon-Lg40-arrow.png"
            />
          </template>
          <template #arrow-right>
            <img
              class="slot-icon right"
              src="@/assets/images/icon/icon-Lg40-arrow.png"
            />
          </template>
          <template #year="{ value }">
            {{ value }}
          </template>
          <template #month="{ value }">
            .{{
              value + 1 < 10
                ? String(value + 1).padStart(2, '0')
                : String(value + 1)
            }}
          </template>
        </VueDatePicker>
      </div>
    </Sheet>
  </div>
</template>

<style lang="scss" scoped>
  .date_picker {
    &:deep {
      --dp-menu-padding: 16px 12px;
      --dp-month-year-row-height: 40px;
      --dp-cell-size: 48px;
      --dp-cell-padding: 0;
      --dp-row-margin: 0;
      --dp-hover-color: initial;
      --dp-hover-text-color: initial;
      --dp-month-year-row-button-size: 24px;
      --dp-border-radius: 2px;
      --dp-menu-border-color: #e8e8e8;

      .dp__disabled {
        background-color: $gray-20;
        color: $gray-70;
      }

      .dp__menu {
        border-color: #e8e8e8;
      }

      .dp__input {
        font: $text-body13-400;
        padding: 0 12px 0 32px;
        border-radius: 2px;
        border: 1px solid $gray-30;
        line-height: 38px;

        &::placeholder {
          font: $text-body13-400;
          color: $gray-50;
        }
      }

      .dp__clear_icon {
        display: none;
      }

      .slot-icon {
        width: 16px;
        height: 16px;

        &.right {
          rotate: 180deg;
        }
      }

      .dp__input_icon {
        position: unset;

        .input-slot-image {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 12px;
        }

        .input_arrow {
          right: 8px;
          width: 24px;
          height: 24px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .dp__month_year_wrap {
        justify-content: center;

        .dp__month_year_select {
          width: auto;

          font: $text-p16-500;

          &:nth-of-type(1) {
            order: 2;
          }
        }
      }

      .dp__calendar_header_item {
        color: $gray-80;
        font: $text-body12-400;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .dp__cell {
        &_inner {
          font: $text-body14-400;
          color: $black;

          &.dp__today {
            border: none;
            color: $blue-50;
          }

          &.dp__active_date {
            color: $white;
            font: $text-body14-500;
            position: relative;
            background-color: $white;
            z-index: 1;

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
        }

        &_disabled {
          color: $gray-50;
        }
      }

      .dp__calendar_header_separator,
      .dp__arrow_top {
        display: none;
      }

      .dp__date_hover_end:hover,
      .dp__date_hover_start:hover,
      .dp__date_hover:hover,
      .dp--year-select:hover,
      .dp__month_year_select:hover,
      .dp__inner_nav:hover,
      .dp__inner_nav_disabled:hover,
      .dp__inner_nav_disabled {
        color: initial;
        background-color: initial;
      }

      [disabled] {
        pointer-events: auto;
      }
    }
  }

  .date_picker {
    &.mobile {
      .default_select {
      }

      &:deep {
        --dp-menu-padding: 0px 16px 40px;
        --dp-month-year-row-height: 40px;
        --dp-cell-size: 48px;
        --dp-cell-padding: 0;
        --dp-row-margin: 0;
        --dp-hover-color: initial;
        --dp-hover-text-color: initial;
        --dp-month-year-row-button-size: 24px;
        --dp-border-radius: 2px;
        --dp-menu-border-color: #e8e8e8;
        --dp-menu-width: auto;

        .dp__disabled {
          background-color: $gray-20;
          color: $gray-70;
        }

        .dp__instance_calendar {
          max-width: 360px;
        }

        .dp__menu {
          border: none;
        }

        .dp__input {
          font: $text-body13-400;
          padding: 0 12px 0 32px;
          border-radius: 2px;
          border: 1px solid $gray-30;
          line-height: 38px;

          &::placeholder {
            font: $text-body13-400;
            color: $gray-50;
          }
        }

        .dp__clear_icon {
          display: none;
        }

        .slot-icon {
          width: 16px;
          height: 16px;

          &.right {
            rotate: 180deg;
          }
        }

        .dp__input_icon {
          position: unset;

          .input-slot-image {
            width: 16px;
            height: 16px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 12px;
          }

          .input_arrow {
            right: 8px;
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .dp__month_year_wrap {
          justify-content: center;

          .dp__month_year_select {
            width: auto;

            font: $text-p16-500;

            &:nth-of-type(1) {
              order: 2;
            }
          }
        }

        .dp__calendar_header_item {
          color: $gray-80;
          font: $text-body12-400;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dp__cell {
          &_inner {
            font: $text-body14-400;
            color: $black;

            &.dp__today {
              border: none;
              color: $blue-50;
            }

            &.dp__active_date {
              color: $white;
              font: $text-body14-500;
              position: relative;
              background-color: $white;
              z-index: 1;

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
          }

          &_disabled {
            color: $gray-50;
          }
        }

        .dp__calendar_header_separator,
        .dp__arrow_top {
          display: none;
        }

        .dp__date_hover_end:hover,
        .dp__date_hover_start:hover,
        .dp__date_hover:hover,
        .dp--year-select:hover,
        .dp__month_year_select:hover,
        .dp__inner_nav:hover,
        .dp__inner_nav_disabled:hover,
        .dp__inner_nav_disabled {
          color: initial;
          background-color: initial;
        }

        [disabled] {
          pointer-events: auto;
        }
      }
    }
  }
</style>
