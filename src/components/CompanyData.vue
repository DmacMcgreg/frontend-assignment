<template>
  <div class="CompanyDataPage">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae facilisis erat, vehicula pharetra nisl. Vestibulum gravida sodales varius. Ut pulvinar lorem iaculis libero maximus suscipit. </p>
    <form>
      <label>
        COMPANY NAME
        <FormInputField />
      </label>

      <label>
        COMPANY SPEND
        <FormInputField />
      </label>

      <label>
        COMPANY SPEND ABILITY
        <FormInputField />
      </label>

      <label>
        NOTES
        <FormInputField :large="true" />
      </label>
    </form>
  </div>
</template>

<script>
  import FormInputField from './FormInputField.vue'
  export default {
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