<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
</script>
<template>
  <section class="career_section" id="career">
    <div class="inner inner-top">
      <DefaultSectionTitle title="CAREER" />
      <div class="content_wrap">
        <div class="info_box">
          <div class="info_para">
            <h5 class="info_title">주식회사 케이스랩</h5>
            <p class="info_date">2022.03. ~ 재직 중 (2년 8개월)</p>
            <p class="info_desc">
              고객의 비즈니스에 맞춰 설계된 기획과 디자인에 맞춰 프로젝트
              프론트/퍼블리싱 및 고객서비스 운영,리뉴얼
            </p>
            <p class="info_desc">
              입사 후 주 업무 퍼블리싱, vue 서브 개발자로 참여
            </p>
            <p class="info_desc">
              2023.12 이후 1인 프론트엔드로 환경 세팅부터 서비스 운영까지
              전반적인 프론트엔드 업무 수행 및 프로젝트 진행
            </p>
            <p class="info_desc">
              프로젝트 아키텍처 구성하여 새로운 프로젝트 시작시 시간 비용 감소
            </p>
            <p class="info_desc">
              SCSS 로 매 프로젝트 사용될 common.scss , mixin 생성
            </p>
            <p class="info_desc">
              header,footer,navi의 class 와 뼈대를 만들어 여러 프로젝트에 재사용
              하도록 구성
            </p>
            <p class="info_desc">
              서비스에 따른 정규식, 유효성, 위치좌표 및 주소등 공통 함수 개발
            </p>
            <p class="info_desc">
              jwt 토큰 사용하고 refresh token 발급, 예외처리를 위한 interceptor
              개발
            </p>
            <p class="info_desc">
              웹뷰를 통해 웹 서비스 노출 및 공유하기 , 다운로드, 카메라,
              인앱결제 등 앱소스 연동
            </p>
            <p class="info_desc">구글,네이버 지도 API 연동</p>
            <p class="info_desc">이니시스 , 토스 페이먼츠, 페이팔 결제연동</p>
            <p class="info_desc">
              sns (네이버,구글,애플) 로그인 재사용 가능 함수 생성
            </p>
            <p class="info_desc">점유인증 , 본인 인증 연동</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
