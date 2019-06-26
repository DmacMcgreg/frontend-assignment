<template>
  <div :class="{ 
    'FormInputField': !large,
    'FormInputField FormInputField--large': large
  }">
    <input />
  </div>
</template>

<script>
  export default {
    props: ['large']
  }
</script>

<style lang="scss" scoped>
  .FormInputField {
    min-width: 320px;
    width: 50%;

   

    input {
        margin-top: 2px;
       width: 100%;
       height: 26px;
       background: white;
       border: 1px solid rgba(94, 94, 94, 0.3);
       box-shadow: 0px 0px 6px 0px rgba(94, 94, 94, 0.3);
    }

    &--large {
      width: 100%;
      max-height: 400px;
      height: 200px;

      input {
        height: 100%;
      }
      
    }

  }
</style>