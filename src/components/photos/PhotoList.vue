<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0?'mui-active':'']" v-for="item in cate" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="photo-list">
  			<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
   		 		<img v-lazy="item.img_url">
					<div class="info">
						<h1 class="info_title">{{ item.title }}</h1>
						<div class="info_body">{{ item.zhaiyao }}</div>
					</div>
  			</router-link>
		</ul>
    </div>
</template>

<script>
//导入MUI的js文件

//2.初始化滑动控件

export default {
    data(){
        return {
			cate:[],
			list:[],	//图片列表
		}
	},
	created(){
		this.getAllCategory();
		this.getPhotoListByCateId(0);//默认进入页面
	},
    methods:{
		getAllCategory(){
			//获取所有图片分裂
			this.$http.get('').then(result => {
				if(result.body.status === 0){
					//手动拼接出一个完整的
					result.body.messages.unshift({title:"全部",id:0});
					this.cate = result.body.message
				}
			})
		},
		getPhotoListByCateId(cateId){
			this.$http.get('api/getimage/'+ cateId).then(result => {
				if(result.body.status === 0){
					this.list = result.body.message
				}
			})
		}
    },
	mounted(){ //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
		//如果要操作元素，最好在mounted里面，这里面的是最新的
        // this.mui(".mui-scroll-wrapper").scroll({
        //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        // });
    }
   
}
</script>

<style lang="scss" scoped>
	
	.photo-list{
		list-style: none;
		margin: 0;
		padding: 10;
		padding-bottom: 0px;
		position: relative;
		li{
			background-color: #ccc;
			text-align: center;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			img{
				width: 100%;
				visibility: middle;
			}
			img[lazy="loading"] {
				width: 40px;
				height: 300px;
				margin: auto;
			}

			.info{
				color:white;
				text-align:left;
				position: absolute;
				bottom:0;
				background-color: rgba(0,0,0,0.4);
				max-height: 84px;
				.info_title{
					font-size:14px;
				}
				.info_body{
					font-size:13px;
				}
			}
		}
	}
</style>
