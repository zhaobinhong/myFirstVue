<template>
  <div id="app">
    <HtmlHeader></HtmlHeader>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <HtmlFooter></HtmlFooter>
  </div>
</template>

<script>
  import HtmlHeader from '@/components/header'
  import HtmlFooter from '@/components/footer'

  export default {
    components: {
      HtmlHeader,
      HtmlFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
