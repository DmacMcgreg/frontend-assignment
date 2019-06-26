<template>
  <div class="Header">
      <div class="HeaderLogo">
        <img src="../zeplin-assets/company-data/logo-pink.png" />
      </div>

      <div class="InputField">
          <img src="../zeplin-assets/company-data/search.png" />
          <input placeholder="Search Companies" />
      </div> 
      <span>
        OR
      </span>
      <button class="Button--smartList">
        New Smartlist
      </button>

      <div v-for="(menu, index) in menus" :key="index">
          <span>{{ menu }}</span>
          <img src="../zeplin-assets/company-data/arrow-down.png" />
      </div>
    </div>
</template>

<script>
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
  }
</script>

<style lang="scss" scoped>
 @import '../styles/colors.scss';


  .Button--smartList {
    background: $lightBlueGrey;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 24px;
    border-radius: 3px;
    border: none;
  }

  .Header, header {
    display: flex;
    flex-direction: row;
    height: 45px;
    max-width: 100%;
    background: $lightBlue;
    padding: 12px 24px;
    justify-content: space-around;
    margin: auto;
    margin-bottom: auto;
    align-items: center;
    color: white;

    .HeaderLogo {
      width: 40px;
      height: 40px;
      display: flex;
    }

    .InputField {
      display: flex;
      flex-direction: row;
      flex-wrap: none;
      width: 200px;
      height: 100%;
      background: $darkBlue;
      align-items: center;

      img {
        width: 36px;
        height: 36px;
        display: flex;
      }
      input {
        display: flex;
        width: 70%;
        height: 96%;
        background: $darkBlue;
        color: white;
        border: none;
      }
    }
  }
</style>