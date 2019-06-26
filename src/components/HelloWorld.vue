<template>
  <div class="Viewport">
    <Header />
    <MainPanel />
    <Footer />
  </div>
  
</template>

<script>
  import Header from './Header.vue'
  import MainPanel from './MainPanel.vue'
  import Footer from './Footer.vue'

  export default {
    data() {
      return {
          menus: [
            'PROSPECT',
            'ALERT',
            'LEARN'
          ]
      }
    },
    components: {
      Header,
      MainPanel,
      Footer
    },
  };
</script>

<style lang="scss">
  @import '../styles/colors.scss';

  .Viewport {
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }  
</style>