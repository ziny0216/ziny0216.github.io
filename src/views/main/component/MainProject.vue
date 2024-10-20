<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
</script>
<template>
  <section class="project_section">
    <div class="inner inner-top">
      <DefaultSectionTitle title="PROJECT" />

      <div class="project_box">
        <p>최근 프로젝트 리스트입니다</p>
        <ul>
          <li class="">
            <div>
              <a
                href="https://www-daypay.kacelab.com/main?type=CINEMA"
                target="_blank"
                >시네몰</a
              >
              <p>2024.07. ~ 진행 중</p>
              <p>
                촬영장비 판매 쇼핑몰(데이페이 자매사이트) - 현재 중단, 데이페이
                추가개발 완료된 이후 예정
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
            </div>
          </li>
          <li class="">
            <div>
              <a
                href="https://www-daypay.kacelab.com/main?type=CINEMA"
                target="_blank"
                >2024.02. ~ 2024.04.</a
              >
              <p>2024.05. ~ 2024.10.</p>
              <p>다이버 채팅 모임 커뮤니티 앱</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
