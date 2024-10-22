<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
  import DefaultTabList from '@/components/common/DefaultTabList.vue';
  import { reactive } from 'vue';

  const state = reactive({
    tabList: [
      { name: 'NEW', value: 'new' },
      { name: 'VUE', value: 'vue' },
      { name: 'PUB', value: 'pub' },
    ],
  });
</script>
<template>
  <section class="project_section" id="project">
    <div class="inner inner-top">
      <DefaultSectionTitle title="PROJECT" />
      <div class="content_wrap">
        <div class="project_box">
          <DefaultTabList
            class-name="round_tab"
            :tab-list="state.tabList"
          ></DefaultTabList>
          <ul>
            <li class="">
              <div>
                <a href="https://www-cinemall.kacelab.com/main" target="_blank"
                  >조여진 Portfolio</a
                >
                <p>2024.10. ~ 진행 중</p>
                <p>조여진 포트폴리오 작업</p>
              </div>
            </li>
            <li class="">
              <div>
                <a href="https://www-cinemall.kacelab.com/main" target="_blank"
                  >시네몰</a
                >
                <p>2024.07. ~ 진행 중</p>
                <p>
                  촬영장비 판매 쇼핑몰(데이페이 자매사이트) 데이페이와 동일한
                  구조로 UI 작업 완료 - 현재 중단, 데이페이 추가개발 완료된 이후
                  예정
                </p>
              </div>
            </li>

            <li class="">
              <div>
                <a
                  href="https://www-daypay.kacelab.com/main?type=CINEMA"
                  target="_blank"
                  >데이페이</a
                >
                <p>2024.05. ~ 2024.10.</p>
                <p>
                  촬영장비 대여/판매 쇼핑몰(시네몰 자매사이트) - 2차 추가 개발
                  진행예정
                </p>
                <div>
                  <p>[주요 내용]</p>
                  <p>
                    토큰 만료 7일 전 접속시 refresh token 발급을 axios
                    interceptor에서 개발
                  </p>
                  <p>대여 , 대여 연장시에 날짜 유효성 체크 개발</p>
                  <p>
                    이니시스 결제창을 back 단에서 열고 front 에서 form 과 iframe
                    을 통해 사용자단에 노출
                  </p>
                </div>
              </div>
            </li>
            <li class="">
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.divingbuddy.app&hl=ko"
                  target="_blank"
                  >다이빙버디</a
                >
                <p>2024.02. ~ 2024.04.</p>
                <p>다이버 채팅 모임 커뮤니티 앱</p>
                <div>
                  <p>[주요 내용]</p>
                  <p>프로젝트 세팅,아키텍처 설계 및 구현</p>
                  <p>modal, layout, input, select와 같은 컴포넌트 개발</p>
                  <p>센드버드를 통해 채팅 구현 및 다이빙버디 회원 정보 연동</p>
                  <p>
                    페이팔 결제 전/후 history stack 을 로컬스토리지에 저장하여
                    증감에 따라 history 조작하여 페이팔페이지로 재이동 방지 구현
                  </p>
                  <p>
                    jwt 토큰을 사용하였으며 토큰 만료시 갱신 없이 로그인
                    페이지로 이동되도록 구현
                  </p>
                  <p>웹뷰를 통해 보여지는 서비스로 vue 내에 앱 소스 연동</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
