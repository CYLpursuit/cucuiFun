import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false//消息环境的提示 非生产环境下开启
Vue.use(VueAxios,axios)

new Vue({//Vue实例
  router,//注入路由
  //配置了一个render函数（渲染视图，提供给el挂载），该render的h实参为createElement函数
  render: h => h(App),
}).$mount('#app')//挂载（注入）到public/index.html的#app
