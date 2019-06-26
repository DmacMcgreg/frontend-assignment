<template>
  <div class="MainPanelContent">
    <transition name="slide-fade" mode="out-in">
        <component v-bind:is="currentPage" />
    </transition>
  </div>
</template>

<script>
  import CompanyData from './CompanyData.vue'
  import CompanyPage from './CompanyPage.vue'
  import CompanyTable from './CompanyTable.vue'

  export default {
    props: ['currentPage'],
    components: {
      CompanyData,
      CompanyPage,
      CompanyTable,
    },
  }
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
  .MainPanelContent {
    border: 1px solid $borderColor;
    border-radius: 3px;
    width: 100%;
    height: 100%;

    transition: all 0.1s ease-in;
  }

  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease-in;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>