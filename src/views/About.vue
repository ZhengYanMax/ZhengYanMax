<template>
  <div class="about">
    <h1>个人中心</h1>
  </div>
</template>
<script>
import api from '../api/index'
export default {
  //进入个人界面--获取个人信息数据
  created(){
    api.getUserinfo()
    .then(res=>{
      console.log(res);
      console.log(res.data);
      //判断是否成功请求
      if(res.data.status ===200){
        //
        console.log('进入个人中心界面');
      }else{
        //token过期 无效的 或者没有发送token 
        this.$router.push('/login')
      }

    })
  }
}
</script>
