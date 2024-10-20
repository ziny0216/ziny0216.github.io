<script setup>
  import { onMounted, reactive, watch } from 'vue';
  import { usePopupStore } from '@/store/common/usePopupStore.js';
  import { useUserStore } from '@/store/user/useUserStore.js';
  import { useRoute, useRouter } from 'vue-router';
  import { useProductStore } from '@/store/product/useProductStore.js';
  import product from '@/router/product.js';

  const usePopup = usePopupStore();
  const user = useUserStore();
  const useProduct = useProductStore();
  const router = useRouter();
  const route = useRoute();
  const emits = defineEmits(['close']);
  const state = reactive({
    mainCtgList: [
      { name: 'BRAND', value: 'brand' },
      { name: 'NEW', value: 'new' },
      { name: 'CINEMA', value: 'cinema' },
      { name: 'CAMERA', value: 'camera' },
      { name: 'LENS', value: 'lens' },
      { name: 'LIGHTING', value: 'lighting' },
      { name: 'AUDIO', value: 'audio' },
      { name: 'GIMBAL', value: 'gimbal' },
      { name: 'TRIPOD', value: 'tripod' },
      { name: 'MONITOR', value: 'monitor' },
      { name: 'GRIP', value: 'grip' },
      { name: 'FILTER', value: 'filter' },
      { name: 'ACC', value: 'acc' },
      { name: 'SHOP', value: 'shop' },
    ],
    subCtgList: [],
    saveCtgList: [],
    mainDepth: {},
    subDepth: {},
    detailDepth: {},
  });

  const moveSubCtg = (type, ctg) => {
    console.log(type, ctg);
    if (type === 'mainDepth') {
      state.mainDepth = {
        category_code: ctg.category_code ? ctg.category_code : ctg.value,
        category_name: ctg.name ? ctg.name : ctg.category_name,
        category_value: ctg.value ? ctg.value : ctg.category_name,
      };
      state.subCtgList = ctg.category2;
      state.saveCtgList = state.subCtgList;
      if (ctg.value === 'brand') {
        state.subCtgList = useProduct.brandList;
        state.saveCtgList = state.subCtgList;
      }
    } else {
      state.subDepth = {
        category_code: ctg.brand_code || ctg.category_code,
        category_name: ctg.brand_name || ctg.category_name,
      };

      state.subCtgList = ctg.category3;

      if (state.mainDepth.category_code === 'brand') {
        state.subCtgList = ctg.category_arr;
      }
    }
  };

  const prevCtg = () => {
    if (state.mainDepth.category_code && !state.subDepth.category_code) {
      state.mainDepth = {};
    } else {
      state.subDepth = {};
      state.subCtgList = state.saveCtgList;
    }
  };

  const accessMember = page => {
    if (user.memberTokens) {
      router.push(page);
      close();
    } else {
      usePopup.isRequiredLogin();
    }
  };

  const handleRouting = url => {
    router.push(url);
    close();
  };
  const close = () => {
    emits('close');
  };

  const setNaviList = async () => {
    state.mainCtgList = state.mainCtgList.map(item => {
      const match = useProduct.ctgList.find(
        ctg => ctg.category_name === item.name,
      );
      if (match) {
        return {
          ...item,
          ...match,
        };
      }
      return item;
    });
  };

  // 라우팅 핸들러 정의
  const handlerMenuRouting = async (info, type) => {
    console.log(info, type);

    if (type === 'main') {
      // 메인 카테고리의 경우
      await router.push({
        path: `/product/${info.value}`,
        query: {
          ctg_code: info.category_code,
          title: info.category_name || info.name,
        },
      });
    } else {
      // 서브 카테고리의 경우
      const mainInfo = state.mainDepth;
      const subInfo = state.subDepth;

      await router.push({
        path: `/product/${state.mainDepth.category_value}`,
        query: {
          ctg_code:
            mainInfo.category_value !== 'brand'
              ? mainInfo.category_code
              : undefined,
          title: info.category_name || info.brand_name,
          sub: subInfo.category_code || info.category_code || info.brand_code,
          detail:
            mainInfo.category_code && subInfo.category_code
              ? info.category_code
              : undefined,
        },
      });
    }
  };

  watch(
    () => usePopup.popups.isSideMenu,
    () => {
      state.subCtgList = [];
      state.saveCtgList = [];
      state.mainDepth = {};
      state.subDepth = {};
      state.detailDepth = {};
    },
  );
  onMounted(() => {
    setNaviList();
  });
</script>

<template>
  <transition duration="500" name="fade-left">
    <aside v-if="usePopup.popups.isSideMenu" class="layout_side">
      <div class="dimmed" @click="close"></div>
      <div class="side_inner">
        <div class="close_box">
          <button
            class="close_btn ml-auto"
            type="button"
            @click="close"
          ></button>
        </div>
        <div v-if="!Object.keys(state.mainDepth).length > 0" class="ctg_con">
          <ul v-if="state.mainCtgList.length > 0" class="ctg_list main_ctg">
            <!--            <li class="ctg_item">-->
            <!--              <button-->
            <!--                class="ctg_name"-->
            <!--                type="button"-->
            <!--                @click="handlerMenuRouting(main, 'main')"-->
            <!--              >-->
            <!--                {{ main.name }}-->
            <!--              </button>-->
            <!--              <button-->
            <!--                class="arrow_btn black"-->
            <!--                type="button"-->
            <!--                @click="moveSubCtg('mainDepth', main)"-->
            <!--              ></button>-->
            <!--            </li>-->
            <li
              v-for="main in state.mainCtgList"
              :key="main.value"
              class="ctg_item"
            >
              <button
                class="ctg_name"
                type="button"
                @click="handlerMenuRouting(main, 'main')"
              >
                {{ main.name }}
              </button>
              <button
                class="arrow_btn black"
                type="button"
                @click="moveSubCtg('mainDepth', main)"
              ></button>
            </li>
          </ul>

          <div class="user_btn flex-center-8">
            <router-link
              v-if="!user.memberTokens"
              class="tab_btn black text_none"
              to="/auth/join/agreement"
            >
              회원가입
            </router-link>
            <router-link
              v-if="!user.memberTokens"
              class="tab_btn white text_none"
              to="/auth/login"
              >로그인
            </router-link>
            <button
              v-else
              class="tab_btn white text_none"
              type="button"
              @click="user.logout()"
            >
              로그아웃
            </button>
          </div>

          <div class="btm_menu">
            <button
              class="btm_item"
              type="button"
              @click="handleRouting('/community')"
            >
              <i class="comm_icon"></i>
              <span>Community</span>
            </button>
            <button
              class="btm_item"
              type="button"
              @click="handleRouting('/about')"
            >
              <i class="about_icon"></i>
              <span>About us</span>
            </button>
            <button class="btm_item" type="button" @click="accessMember('/my')">
              <i class="mypage_icon"></i>
              <span>Mypage</span>
            </button>
            <button
              class="btm_item"
              type="button"
              @click="accessMember('/order')"
            >
              <i class="cart_icon"></i>
              <span>장바구니</span>
            </button>
          </div>
        </div>

        <ul v-else class="ctg_list sub_ctg">
          <li class="ctg_item prev_ctg" @click="prevCtg">
            <i class="arrow_btn black" type="button"></i>
            {{
              state.subDepth.category_name
                ? state.mainDepth.category_name
                : '전체'
            }}
          </li>
          <li class="ctg_item select_ctg">
            <span class="ctg_name">{{
              state.subDepth.category_name
                ? state.subDepth.category_name
                : state.mainDepth.category_name
            }}</span>
          </li>

          <li v-for="sub in state.subCtgList" :key="sub.value" class="ctg_item">
            <button
              class="ctg_name"
              type="button"
              @click="handlerMenuRouting(sub, 'sub')"
            >
              {{ sub.category_name || sub.brand_name }}
            </button>
            <button
              v-if="sub.category3?.length > 0 || sub.category_arr?.length > 0"
              class="arrow_btn black"
              type="button"
              @click="moveSubCtg('subDepth', sub)"
            ></button>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>

<style lang="scss" scoped></style>
