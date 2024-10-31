<script>
  import { defineComponent } from 'vue';
  import MainAboutMe from '@/views/main/component/MainAboutMe.vue';
  import MainCareer from '@/views/main/component/MainCareer.vue';
  import MainProject from '@/views/main/component/MainProject.vue';
  import MainContactMe from '@/views/main/component/MainContactMe.vue';

  export default defineComponent({
    components: { MainContactMe, MainProject, MainCareer, MainAboutMe },
  });
</script>
<template>
  <main>
    <div>
      <!--      <MainAboutMe />-->
      <MainCareer />

      <MainProject />
      <MainContactMe />
    </div>
  </main>
</template>

<style scoped></style>
