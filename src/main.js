// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入App根组件
import App from './App'
//1.1导入路由的包
import VueRouter from 'vue-router'
import router from './router/index.js'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
import './lib/css/mui.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './lib/css/icons-extra.css'
// import './assets/css/main.css'
//按需导入mint-UI的组件

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Button.name,Button)

import moment from 'moment'
//定义1全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
 return moment(dataStr).format(pattern)
})

// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
//全局设置 post 时候表单数据的组织格式
Vue.http.options.emulateJSON = true;


console.log('ok');

Vue.component(Header.name, Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
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
