import Vue from 'vue'
import App from './App'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 自定义图标
import '@/assets/font/iconfont.css'
import router from './router'
import axios from 'axios'
// bus引入
import Bus from './Bus'

Vue.use(ElementUi)
Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    Bus // Bus 注册到root上，方便调用， this.$root.Bus.$emit
  },
  router,
  components: { App },
  template: '<App/>'
})
