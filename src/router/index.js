import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabber/HomeContainer.vue'
import MemberContainer from '../components/tabber/MemberContainer.vue'
import ShopcarContainer from '../components/tabber/ShopcarContainer.vue'
import SearchContainer from '../components/tabber/SearchContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/shopcar',
      component:ShopcarContainer
    },
    {
      path:'/search',
      component:SearchContainer
    },
    {
      path:'/',
      redirect:'/home'
    },
    { path: '/home/newslist',component: NewsList},
    { path: '/home/newsinfo/:id',component:NewsInfo}    
  ],
  linkExactActiveClass:'mui-active' //覆盖默认的路由高亮类，router-link-active
})
