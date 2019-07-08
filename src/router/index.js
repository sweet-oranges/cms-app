import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabber/HomeContainer.vue'
import MemberContainer from '../components/tabber/MemberContainer.vue'
import ShopcarContainer from '../components/tabber/ShopcarContainer.vue'
import SearchContainer from '../components/tabber/SearchContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from '../components/photos/PhotoList.vue'
import PhotoInfo from '../components/photos/PhotoInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'

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
    { path: '/home/newsinfo/:id',component:NewsInfo},
    { path: '/home/photolist',component:PhotoList}, 
    { path: '/home/photoinfo/:id',component:PhotoInfo},
    { path: '/home/goodslist',component:GoodsList},
  ],
  linkExactActiveClass:'mui-active' //覆盖默认的路由高亮类，router-link-active
})
