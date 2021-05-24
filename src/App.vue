<template>
  <div id="app">
    <Top />
    <Content />
  </div>
</template>

<script>
import Content from './components/Content'
import Top from './components/Top.vue'

export default {
  name: 'App',
  components: {
    Content,
    Top
  }
}
</script>

<style lang="less">
#app {
  background-color: #000552;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  height: 100%;
}
</style>
