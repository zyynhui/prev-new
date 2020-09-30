import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 引入element-ui 插件
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element,{size:'small'})



import App from './components/app.vue'

import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(App), 
  router

})
