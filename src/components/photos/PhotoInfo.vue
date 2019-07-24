<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img :src="item.src" alt="" class="preview-img" v-for="(item,index) in list"  height="100"
            @click="$preview.open(index,list)" :key="item.src">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
//1.导入评论组件
import component from '../subcomponents/comment'
export default {
    data(){
        return{
            id: this.$route.params.id,   //从路由中获取到的图片 ID
            photoinfo:{},   //图片详情
            list:[]
        }
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result => {
                if(result.body.status === 0){

                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumiamges/'+this.id).then(result => {
                if(result.body.status === 0){
                    result.body.message.forEach(item =>{
                        item.w = 600;
                        item.h = 400;
                    });
                    //把完整的数据保存到数据中
                    this.list = result.body.message;
                }
            })
        }
    },
    components:{    //注册品论子组件
        'cmt-box':component
    }
}
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding:3px;
        h3{
            color:#26A2FF;
            font-size:15px;
            text-align: center;
            margin:15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size:13px;
        }
        .content{
            font-size:13px
        }
        
        .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999
            }
        }
    }


</style>
