<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
</script>
<template>
  <section class="about_section" id="about">
    <div class="inner inner-top">
      <DefaultSectionTitle title="ABOUT ME" />
      <div class="content_wrap">
        <div class="info_box">
          <div class="profile_img">
            <img src="@/assets/images/profile_img.jpg" alt="조여진 이미지 " />
          </div>
          <div class="info_para">
            <h5 class="info_title">
              어제의 나를 양분으로 오늘의 나를 성장시키는<br />
              프론트엔드 3년차 조여진입니다.
            </h5>
            <p class="info_desc">
              지난날 제가 해결해 온 문제들을 참고/응용하여 개발합니다.<br />
              보다 나은 사용자 경험을 위해 제안하고 타인의 의견을 수용합니다.<br />
              보다 나은 코드 퀄리티를 위해 아키텍처를 구성하고 재사용 가능한
              코드를 짜기위해 노력합니다.
            </p>
            <p class="info_desc">
              개발팀 프론트엔드로 고객사 니즈에 맞춰 기획, 디자인된 프로젝트를
              즐겁게 개발하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
