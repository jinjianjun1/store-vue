<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
    <foot></foot>
  </div>
</template>
<script>
  import foot from '../src/components/foot'
  export default {
    name: 'App',
    components:{
      foot
    }
  }
</script>
<style lang="scss">
*{margin: 0;padding: 0;}
</style>
