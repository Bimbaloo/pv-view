import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App.vue'
import * as echarts from 'echarts'

import './assets/css/reset.css'
Vue.prototype.axios = axios
Vue.prototype.echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
