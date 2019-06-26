<template>
  <div class="CompanyDataPage">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae facilisis erat, vehicula pharetra nisl. Vestibulum gravida sodales varius. Ut pulvinar lorem iaculis libero maximus suscipit. </p>
    <ul class="CompanyDataPage__errors" v-if="errors.length > 0">
      <li v-for="(error, index) in errors" :key="error.index">
        {{ error }}
      </li>
    </ul>
    <form id="app"
  @submit="checkForm">
      <label>
        COMPANY NAME
        <FormInputField id="Company Name" v-model="name" />
      </label>

      <label>
        COMPANY SPEND
        <FormInputField id="Company Spend" v-model="spend" />
      </label>

      <label>
        COMPANY SPEND ABILITY
        <FormInputField id="Company Spend Ability" v-model="spendAbility" />
      </label>

      <label>
        NOTES
        <FormInputField id="Notes" v-model="notes" :large="true" />
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import FormInputField from './FormInputField.vue'
  export default {
    data() {
      return {
        errors: [],
        name: null,
        spend: null,
        spendAbility: null,
        notes: null
      }
    },
    methods:{
      checkForm: function (e) {
        this.errors = [];
        e.preventDefault();
        

        if (!this.name) {
          this.errors.push('Company Name required.');
        }
        if(!Number.isInteger(parseInt(this.spend))){
          this.errors.push('Spend must be a number!');
          return false
        }
        if (!parseInt(this.spend) < 0) {
          this.errors.push('Spend must be greater than 0');
        }

        const spendRageValid = this.spendAbility.length && this.spendAbility.split('-').length > 1
        if(!spendRageValid) {
          this.errors.push('Must have a range for spend abilities')
          return false
        } 
        const spendAbilities = this.spendAbility
                                .replace(/$/g, '')
                                .replace(/,/g, '')
                                .split('-')
        if(spendAbilities[0] > spendAbilities[1]){
          this.errors.push('Min spend range must be less than max spend range')
          return false
        }      

      }
    },
    components: {
      FormInputField,
    },
  }
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
  .CompanyDataPage {
    height: 600px;
    padding: 8px 12px 12px 12px;

     p {
      margin-bottom: 18px;
    }

    &__errors {
      color: red;
    }

    label {
      color: $textGreyLight;
      font-size: 12px;
      margin-bottom: 2px;

      :nth-child(n) {
        margin-bottom: 14px;
      }
    }
  }
</style>