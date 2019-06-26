<template>
  <div class="Footer">
    <div class="Footer__row">
      <div class="Footer__linkSet">
        <a class="Footer__link" v-for="link in links" :key="link.id" href="link.link">{{ link.text }}</a>
      </div>
      
      <div class="Footer__linkSet">
        <a class="Footer__link" href="#">Terms and Conditions</a>
        <a class="Footer__link" href="#">Privacy</a>
      </div>
      
    </div>
    <div class="Footer__row">
      <div><span>Copyright 2017, Intricately, Inc. All Rights Reserved.</span></div>
      <div class="Footer__socialLinks" >
        <img v-for="socialLink in socialLinks" :key="socialLink.link" :src="getImgUrl(socialLink.icon)" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getImgUrl(pic) {
        return require('../../zeplin-assets/company-data/' + pic)
      }
    },
    data() {
      return {
        links: [
          { link: '#pricing', text: 'Pricing'},
          { link: '#blog', text: 'Blog'},
          { link: '#webinars', text: 'Webinars'},
          { link: '#events', text: 'Events'},
          { link: '#helpCenter', text: 'Help Center'},
        ],
        socialLinks: [
          { link: 'linkedIn', icon: 'fill-118.png' },
          { link: 'facebook', icon: 'fill-92.png' },
          { link: 'twitter', icon: 'fill-93.png' },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .Footer {
    max-width: 100vw;
    height: 150px;
    background: #979197;
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: space-evenly;
    padding: 0px 150px;

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__socialLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 170px;

      img {
        display: flex;
      }
    }

    &__linkSet {
      display: flex;
      flex-direction: row;

     a { 
        color: $lightBlue;
        text-decoration: none;

        &:nth-child(n + 1):not(:last-child):after {
          content: ' | ';
          margin-right: 6px;
          margin-left: 2px;
        }
        &:nth-child(2n + 1):before {
          content: ' ';
        }
      
      }
    }
  }
</style>