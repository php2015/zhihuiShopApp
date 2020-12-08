// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入阿里字体css
import "../src/assets/font/iconfont.css"
// 引入rem
import "../src/assets/css/reset.css"
// 引入reset.css
import "../src/assets/js/rem"
// 引入移动端vant
import "vant/lib/index.css"
import vantUI from "vant"
Vue.use(vantUI)
// 引入全局过滤器
// 引入全局组件
import "./components/index"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
