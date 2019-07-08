## 这是我的第一个自学vue项目

## [开源协议](https://www.zhihu.com/question/19568896)   

## 制作首页App
1完成Header区域，使用的是Mint-UI 的Header组件
2完成底部Tabber区域，使用的是MUI的Tabber.html
3在中间区域放置一个router-view展示路由的组件

## 改造 tabber 为router-link

## 设置路由高亮

## 点击 tabber 中的路由链接展示对应的路由组件

## 制作首页轮播图数据
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

## 发表评论
1.把文本框作双向数据绑定
2.为发表按钮做个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4.通过 vue-resource 发送请求把评论提交给服务器
5.当发表评论后，重新刷新列表，已查看最新的评论
    +如果调用getComments()方法可能只能得到最后一页的评论，前几页的评论获取不到
    +换一种思路：当评论成功后，在客户端手动拼接出一个最新的评论对象，然后 调用数组的unshift方法，把最新的评论，追加到data
    中comments的开头，这样，就能完美实现评论列表的需求
## 改造图片分享按钮为路由的链接并显示对应的组件页面

## 绘制图片列表组件页面结构并美化样式
1.制作顶部的滑动条
2.制作底部的图片列表
## 制作顶部滑动条的坑们：
1.需要借助与MUI的tab-top-webview-main.html
2.需要把silder区域的mui-fullscreen类去掉
3.滑动条无法正常的触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下：
    +导入 mui.js
    +调用官方提供的方式去初始化：
    ...
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005    //flick 减速系数 ，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ...
4.在初始化滑动条的时候，导入了mui.js，但是控制台报错了'mui.min.js?1754:7 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them'
    +可能是mui.js用到了以上三个类型，但是webpack打包好的bundle.js默认启用了严格模式
    +解决方案:1.把mui.js中的非严格模式代码改掉，但是不现实 2.把webpack打包时候的严格模式禁用掉
    +最终，我们选择了planB移除严格模式，使用插件
5.获取所有分类，并渲染分类列表

### 制作图片列表
1.图片列表需要使用懒加载技术，我们可以使用Mint-UI提供县城的组件 'lazy-load'
2.根据'lazy-load'的使用文档，尝试使用

### 实现了图片列表的懒加载和样式美化

## 实现了点击图片 跳转到 图片详情页面
1.在改造li成 router-link 的时候，需要使用tag 属性指定要渲染为哪种元素

## 实现了 详情页面的布局和美化， 同时获取数据渲染


## 实现 图片详情中 缩略图的功能
1.使用插件vue-preview 这个缩略图插件
2.获取到所有的图片列表。然后使用v-for渲染数据
3.注意：img上的class不能去掉
4.注意：每个图片数据对象中，必须有W和h

## 绘制商品列表结构