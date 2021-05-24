import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App.vue'
import * as echarts from 'echarts'

import './assets/css/reset.css'

import VConsole from 'vconsole'
const vConsole = new VConsole()

Vue.prototype.axios = axios
Vue.prototype.echarts = echarts

Vue.use(ElementUI, vConsole)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
