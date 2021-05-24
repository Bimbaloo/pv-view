<template>
  <div id="app">
    <i
      class="el-icon-data-line fullScreen"
      v-on:click="fullScreen"
      v-show="isFullScreen"
    ></i>

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
    return {
      isFullScreen: true
    }
  },
  created () {
    document.addEventListener('fullscreenchange', e => {
      if (document.fullscreenElement) {
        this.isFullScreen = false
      } else {
        this.isFullScreen = true
      }
    })
  },
  methods: {
    fullScreen () {
      const Fullscreen = document
        .querySelector('#app')
        .requestFullscreen()
        .then(() => {
          this.isFullScreen = false
        })
      console.log(Fullscreen)
    }
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
.fullScreen {
  position: fixed;
  right: 0;
  top: 0;
  font-size: 35px;
  color: #2f84c1;
}
</style>
