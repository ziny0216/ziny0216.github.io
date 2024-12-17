<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
</script>
<template>
  <section id="about" class="about_section">
    <div class="inner inner-top">
      <DefaultSectionTitle title="ABOUT ME" />
      <div class="content_wrap">
        <div class="info_box">
          <div class="profile_img">
            <img alt="조여진 이미지 " src="@/assets/images/profile_img.jpg" />
          </div>
          <div class="info_para">
            <h5 class="info_title">
              어제의 나를 양분으로 오늘의 나를 성장시키는<br />
              프론트엔드 3년차 조여진입니다.
            </h5>
            <p class="info_desc">
              지난날 제가 해결해 온 문제들을 참고/응용하여 개발합니다.<br />
              보다 나은 코드 퀄리티를 위해 아키텍처를 구성하고 재사용 가능한
              코드를 짜기위해 노력합니다.<br /><br />
              안된다고 말하기 보다는 서로의 만족할 수 있는 결과물을 위해
              해결책을 모색하는 개발자입니다.<br />
              보다 나은 사용자 경험을 위해 제안하고 타인의 의견을 수용합니다.<br />
              <br />
              "어제의 나는 오늘 나의 양분이다"라는 소개처럼,<br />
              사소한 아이콘의 네이밍부터 프로젝트 세팅,<br />
              아키텍처 설계, 공통 함수 생성까지 하나하나 기반을 다져왔습니다.<br />
              어제의 고민이 오늘의 저를 성장하게 했고,<br />
              그 과정들이 지금의 저를 만들어 준 중요한 밑거름이되었다고
              믿습니다.<br />
              <br />
              Vue를 주로 사용하여 개발하였고 React 개발에 참여한 경험이
              있습니다. 현재 Next.js , TypeScript 공부 중에 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/pages/main';
</style>
