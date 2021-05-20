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
  background-color: hsl(236deg 100% 16%);
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  height: 100%;
}
</style>
