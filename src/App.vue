<template>
  <div id="app" class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="林家小姐姐.vue项目"></mt-header>

    <!-- 中间的路由 router-view 区域 -->


    <!-- 底部Tabber区域 -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a href="#tabbar-with-chat" class="mui-tab-item">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a href="#tabbar-with-contact" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a href="#tabbar-with-map" class="mui-tab-item">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
    <h1>123</h1>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    //组件中的data必须是个function
    return {
      msg:'123'
    }
  },
  methods:{
    show(){
      console.log("调用了login.vue中的show方法")
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container{
  
}
</style>
