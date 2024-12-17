<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
  import DefaultTabList from '@/components/common/DefaultTabList.vue';
  import { onMounted, reactive, watch } from 'vue';
  import { allProject } from '@/utiles/PortfolioData.js';
  import ProjectDetailPopup from '@/components/popup/ProjectDetailPopup.vue';
  import { usePopupStore } from '@/stores/usePopupStore.js';
  import SkillBadge from '@/components/page/SkillBadge.vue';

  const usePopup = usePopupStore();
  const state = reactive({
    activeTab: 'new',
    tabList: [
      { name: 'NEW', value: 'new' },
      { name: 'VUE', value: 'vue' },
      { name: 'REACT', value: 'react' },
      { name: 'PUB', value: 'pub' },
    ],
    projectList: [],
    selectedProject: {},
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

  const handleDetailPopup = project => {
    state.selectedProject = project;
    usePopup.setPopupState('isProjectPopup');
  };

  onMounted(() => {
    filterProjectList();
  });
</script>
<template>
  <section id="project" class="project_section">
    <div class="inner">
      <DefaultSectionTitle title="PROJECT" />
      <div class="content_wrap">
        <div class="project_box">
          <DefaultTabList
            :active-value="state.activeTab"
            :tab-list="state.tabList"
            class-name="round_tab"
            @handle-active="handleActiveTab"
          ></DefaultTabList>
          <ul class="project_list">
            <li
              v-for="(project, idx) in state.projectList"
              :key="idx"
              class="info_para project_item"
              @click="handleDetailPopup(project)"
            >
              <div>
                <a
                  class="info_sub_tit text_none"
                  href="https://www-cinemall.kacelab.com/main"
                  target="_blank"
                  >{{ project.name }}</a
                >
                <p class="info_small">{{ project.date }}</p>
                <div class="info_desc">
                  <span class="ellipsis2 summary">
                    {{ project.summary }}
                  </span>
                  <SkillBadge :skills="project.stack" />
                </div>
                <span class="read_more_btn">READ MORE</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <ProjectDetailPopup :project="state.selectedProject" />
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/pages/main';
</style>
