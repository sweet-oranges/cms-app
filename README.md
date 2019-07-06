#这是我的第一个自学vue项目

## [开源协议](https://www.zhihu.com/question/19568896)   

##制作首页App
1完成Header区域，使用的是Mint-UI 的Header组件
2完成底部Tabber区域，使用的是MUI的Tabber.html
3在中间区域放置一个router-view展示路由的组件

##改造 tabber 为router-link

##设置路由高亮

##点击 tabber 中的路由链接展示对应的路由组件

##制作首页轮播图数据
1.获取数据， way:vue-resource 
2.使用 Vue-resource的this.$http.get 获取数据
3.获取到的数据要保存到data 身上
4.使用v-for循环渲染每个item项

## 改造九宫格区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1.绘制界面，使用MUI中的media-list.html
2.使用v-resource获取数据
3.渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造成router-link,同时在跳转的时候提供唯一的Id标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块，将新闻详情的 路由地址和组件页面对应起来

## 实现 新闻详情的页面布局和数据渲染

## 单独封装一个comment.vue 评论子组件
1.先创建一个单独的component.vue组件模板
2.在需要使用comment组件的页面，先手动导入comment组件
    +'import comment from './component.vue''
3.在父组件中，使用components属性，将刚才导入的comment组件，注册为自己的子组件
4.将注册子组件时候的注册名称，以标签形式，在页面中引入即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多的功能
1.为加载更多按钮，绑定点击事件 在事件中，请求下一页数据
2.点击加载更多，让pageIndex++,然后重新调用this.getComments()方法，重新获取最新一页的数据 
3.为了防止新数据覆盖老数据的情况，我们再点击加载更多的时候，每当获取到新数据的时候，应该让老数据调用concat拼接上新数组