<script setup>
  import DefaultSectionTitle from '@/components/common/DefaultSectionTitle.vue';
  import DefaultTabList from '@/components/common/DefaultTabList.vue';
  import { onMounted, reactive } from 'vue';
  import { allProject } from '@/utiles/PortfolioData.js';
  import ProjectDetailPopup from '@/components/popup/ProjectDetailPopup.vue';
  import { usePopupStore } from '@/stores/usePopupStore.js';

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
          <ul class="project_list">
            <li
              class="info_para project_item"
              v-for="(project, idx) in state.projectList"
              :key="idx"
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
                  <span class="ellipsis_clamp">
                    {{ project.summary }}
                  </span>
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

<style scoped lang="scss">
  @use '@/assets/scss/pages/main';
</style>
