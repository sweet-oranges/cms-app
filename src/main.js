// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入App根组件
import App from './App'
import router from './router/index.js'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import {Header} from 'mint-ui'
import './lib/css/mui.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/css/main.css'
//按需导入mint-UI的组件


Vue.use(ElementUI);
Vue.use(VueResource);

console.log('ok');

Vue.component(Header.name, Header);

//设置全局表单提交格式
Vue.http.options.emulateJSON = true;

//生产模式提醒
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    msg:'123'
  },
  router, //注册router
  components: { 
    App
   },
  template: '<App/>'
});
