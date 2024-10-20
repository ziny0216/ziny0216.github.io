<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const bottomPadding = () => {
    const fixedButton = document.querySelector('.prod_button');
    return !!fixedButton;
  };
</script>

<template>
  <footer class="layout_footer">
    <div
      :style="`padding-bottom:${bottomPadding() ? '120px' : ''}`"
      class="footer_inner inner"
    >
      <div class="company_detail">
        <router-link class="footer_logo" to="/"></router-link>
        <ul class="info_list">
          <li>COMPANY: (주)데이페이</li>
          <li>CEO: 허웅걸</li>
          <li>
            PHONE: <a class="text_none" href="tel:1544-2338">1544-2338</a>/ FAX:
            02-2135-6879
          </li>
          <li>BUSINESS LICENCE: [253-87-01507]</li>
          <li>2021-서울강남-06753호</li>
          <li>
            <button
              class="text_underline"
              type="button"
              @click="CheckBusinessInfo"
            >
              [사업자정보확인]
            </button>
          </li>
          <li>ADDRESS: 06117 서울특별시 강남구 논현로 625 (논현동) 1층</li>
          <li>PERSONAL INFORMATION MANAGER: 서울</li>
          <li>
            E-mail:
            <a class="text_none" href="mailto:daypay@naver.com"
              >daypay@naver.com</a
            >
          </li>
        </ul>
        <small class="copyright"
          >COPYRIGHT &copy; <strong>DAYPAY</strong> ALL RIGHTS RESERVED.</small
        >
      </div>
      <div class="company_cs">
        <div class="company_info">
          <div class="tel">
            <p>대표전화</p>
            <a class="text_none" href="tel:1544-2338">1544-2338</a>
          </div>
          <div class="operate info_list column">
            <p>강남점 / 합정점 (24시간 운영)</p>
            <p>여의도 / 부천 / 남대문점: (08:00 ~ 22:00)</p>
            <p>No Break Time</p>
            <p>365일 연중무휴</p>
          </div>
          <div class="account info_list column">
            <p>입금계좌안내</p>
            <p>우리은행 1005-204-059206</p>
            <p>예금주: (주)데이페이</p>
          </div>
        </div>
        <div class="footer_list info_list column">
          <router-link to="/about/intro">회사소개</router-link>
          <router-link to="/about/information">이용안내</router-link>
          <router-link to="/about/terms">이용약관</router-link>
          <router-link class="fw-500" to="/privacy-policy"
            >개인정보처리방침
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
