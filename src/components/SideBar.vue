<template>
  <div class="SideBar">
    <button 
      v-for="page in pages" :key="page.name"
      :class="['Button--sidebar', { active: page.name === currentPage }]"
      @click="togglePage(page.name)"
    >
      {{ page.label }}
    </button>
  </div>
</template>

<script>
  export default {
    props: ['currentPage'],
    data() {
      return {
        pages: [
          { name: 'CompanyData', label: 'Company Data', active: true },
          { name: 'CompanyPage', label: 'Company Page', active: false },
          { name: 'CompanyTable', label: 'Company Table', active: false },
        ]
      }
    },
    methods: {
      togglePage(page) {
        this.$emit('changePage', page)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';
  .SideBar {
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-right: 12px;

    .Button--sidebar {
      border: 1px solid $borderColor;
      border-radius: 3px;

      &:nth-child(n + 2) {
        border-top: none;
      }
    }
  }
    
  .Button--sidebar {
    display: flex;
    background: white;
    color: $textGrey;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 18px 18px;
    transition: all 0.1s ease-in;

    &.active {
      border-left: 4px solid $darkBlue;
      font-weight: bold;
      color: $textBlue;
      background: $lightGrey;
    }
  }
</style>