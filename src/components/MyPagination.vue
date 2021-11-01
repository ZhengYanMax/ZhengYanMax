<template>
  <div style="margin-top:30px;">
      <!--属性： 
            background	是否为分页按钮添加背景色
            page-size	   每页显示条目个数，支持 .sync 修饰符 默认值：10条
            total	       总条目数
            layout	   组件布局，子组件名用逗号分隔
        
       -->
    <el-pagination background 
        layout="total,prev, pager, next,jumper" 
        :total="total" :page-size='pageSize'
        @current-change='changePage'
        >
    </el-pagination>
  </div>
</template>

<script>
export default {
    //设置默认值 
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:10
        }
    },
    methods:{
        changePage(val){
            // console.log(val);
            this.$emit('changeCurrent',val)
        }
    }
};
</script>

<style>
</style>