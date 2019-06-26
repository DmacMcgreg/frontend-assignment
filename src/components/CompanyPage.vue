<template>
  <div>
    CompanyPage
    <span>Count is {{count}}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
  export default {
    computed: {
      count () {
        return this.$store.state.count
      }
    },

    methods: {
      increment() {
        this.$store.commit('increment')
      }
    },
  }
</script>

<style lang="scss" scoped>
  div {
    background: lightblue;
    width: 200px;
    height: 200px;
  }
</style>