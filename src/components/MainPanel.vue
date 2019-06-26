<template>
  <div class="MainPanel">
    <SideBar @changePage="togglePage" v-bind:current-page="currentPage" />
    <MainPanelContent :current-page="currentPage" />
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  import MainPanelContent from './MainPanelContent.vue'

  export default {
    data() {
      return {
        currentPage: 'CompanyData'
      }
    },
    methods: {
      togglePage(pageName) {
        this.currentPage = pageName
      }
    },
    components: {
      SideBar,
      MainPanelContent,
    },
  }
</script>

<style lang="scss" scoped>
  .MainPanel {
    padding: 8px 150px 24px 150px;
    height: calc(100vh - 251px);
    display: flex;
    flex-direction: row;
  }
</style>