<template>
  <div class="MainPanel">
    <SideBar />
    <button @click="currentPage = currentPage === 'CompanyData' ? 'CompanyPage' : 'CompanyData'">Switch</button>
    <component v-bind:is="currentPage" />
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  import CompanyData from './CompanyData.vue'
  import CompanyPage from './CompanyPage.vue'

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
      CompanyData,
      CompanyPage
    },
  }
</script>

<style lang="scss" scoped>
  .MainPanel {
    padding: 8px 42px 24px 42px;
    height: 100%;
    width: 100%;
    max-width: 100vw;
  }
</style>