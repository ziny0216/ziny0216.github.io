<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
  import DefaultTabList from '@/components/common/DefaultTabList.vue';
  import { computed, onMounted, reactive } from 'vue';
  import { allProject } from '@/utiles/PortfolioData.js';

  const state = reactive({
    activeTab: 'new',
    tabList: [
      { name: 'NEW', value: 'new' },
      { name: 'VUE', value: 'vue' },
      { name: 'REACT', value: 'react' },
      { name: 'PUB', value: 'pub' },
    ],
    projectList: [],
  });
  const handleActiveTab = tab => {
    state.activeTab = tab.value;
    state.projectList = [];
    filterProjectList();
  };
  const filterProjectList = () => {
    state.projectList = allProject.filter(project =>
      project.type.includes(state.activeTab),
    );
  };

  onMounted(() => {
    filterProjectList();
  });
</script>
<template>
  <section class="project_section" id="project">
    <div class="inner">
      <DefaultSectionTitle title="PROJECT" />
      <div class="content_wrap">
        <div class="project_box">
          <DefaultTabList
            :active-value="state.activeTab"
            class-name="round_tab"
            :tab-list="state.tabList"
            @handle-active="handleActiveTab"
          ></DefaultTabList>
          <transition-group name="shuffle" tag="ul" class="project_list">
            <li
              class="info_para project_item"
              v-for="project in state.projectList"
            >
              <div>
                <a
                  class="info_sub_tit text_none"
                  href="https://www-cinemall.kacelab.com/main"
                  target="_blank"
                  >{{ project.name }}</a
                >
                <p class="info_small">{{ project.date }}</p>
                <p class="info_desc" v-html="project.summary"></p>
                <button type="button" class="read_more_btn">READ MORE</button>
              </div>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
