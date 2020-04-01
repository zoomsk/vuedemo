<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="stylus">
  @import "~@/assets/styles/base/normalize.css";
  @import "~@/assets/styles/base/base.css";
  @import "~@/assets/styles/base/variable.styl";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color-6;

}
</style>
