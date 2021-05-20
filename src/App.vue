<template>
  <div id="app">
    <Head />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Head from './components/Head.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Head
  }
}
</script>

<style lang="less">
#app {
  background-color: hsl(236deg 100% 16%);
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  height: 100%;
}
</style>
