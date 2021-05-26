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
  },
  data () {
    return {}
  },
  created () {},
  methods: {}
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
.fullScreen {
  position: fixed;
  right: 0;
  top: 0;
  font-size: 35px;
  color: #2f84c1;
}
</style>
