<template>
  <div id="app">

    <Index/>
  </div>
</template>

<script>
import Index from '@/page/index.vue'

export default {
  name: 'App',
  components: {
    Index
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
