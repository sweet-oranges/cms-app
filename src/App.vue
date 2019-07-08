<template>
  <div id="app" class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="林家小姐姐.vue项目"></mt-header>

    <!-- 中间的路由 router-view 区域 -->
    <transition >
      <router-view></router-view>
    </transition>
    

    <!-- 底部Tabber区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact">
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜素</span>
      </router-link>
    </nav>
    
    
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
.mint-header{
  z-index: 99;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  padding-top:40px;
  padding-bottom: 50px;
  overflow-x: hidden
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
  
}
.v-leave-to{
   opacity: 0;
   transform: translateX(-100%);
   position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

</style>
